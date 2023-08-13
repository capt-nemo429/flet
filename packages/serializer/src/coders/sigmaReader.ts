import { HexString, isEmpty } from "@fleet-sdk/common";
import { hex } from "@fleet-sdk/crypto";
import { hexToBigInt } from "./bigint";
import { readBigVLQ, readVLQ } from "./vlq";
import { zigZagDecode, zigZagDecodeBigInt } from "./zigZag";

export class SigmaReader {
  readonly #bytes: Uint8Array;
  #cursor: number;

  public get isEmpty(): boolean {
    return isEmpty(this.#bytes);
  }

  constructor(bytes: HexString | Uint8Array) {
    if (typeof bytes === "string") {
      this.#bytes = hex.decode(bytes);
    } else {
      this.#bytes = bytes;
    }

    this.#cursor = 0;
  }

  public readBoolean(): boolean {
    return this.readByte() === 0x01;
  }

  public readBits(length: number): ArrayLike<boolean> {
    const bits = new Array<boolean>(length);
    let bitOffset = 0;

    for (let i = 0; i < length; i++) {
      const bit = (this.#bytes[this.#cursor] >> bitOffset++) & 1;
      bits[i] = bit === 1;

      if (bitOffset == 8) {
        bitOffset = 0;
        this.#cursor++;
      }
    }

    if (bitOffset > 0) {
      this.#cursor++;
    }

    return bits;
  }

  public readByte(): number {
    return this.#bytes[this.#cursor++];
  }

  public readBytes(length: number): Uint8Array {
    return this.#bytes.subarray(this.#cursor, (this.#cursor += length));
  }

  public readVlq(): number {
    return readVLQ(this);
  }

  public readShort(): number {
    return Number(zigZagDecode(readVLQ(this)));
  }

  public readInt(): number {
    const int = this.readLong();

    return Number(int);
  }

  public readLong(): bigint {
    return zigZagDecodeBigInt(readBigVLQ(this));
  }

  public readBigInt(): bigint {
    const len = readVLQ(this);

    return hexToBigInt(hex.encode(this.readBytes(len)));
  }
}

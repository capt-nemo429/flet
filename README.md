# Fleet SDK [![Checks](https://img.shields.io/github/actions/workflow/status/fleet-sdk/fleet/ci.yml?logo=githubactions)](https://github.com/fleet-sdk/fleet/actions) [![Coverage](https://img.shields.io/codecov/c/gh/fleet-sdk/fleet?logo=codecov)](https://app.codecov.io/gh/fleet-sdk/fleet)

Fleet (Fluent Ergo Toolset) is a put TypeScript SDK for Ergo Platform, offering an easy, fluent and flexible way to write off-chain code.

## Packages

This is a [monorepository](https://monorepo.tools/) which means this contains many sub-packages that composes full Fleet SDK implementation.

| Package                                         | Description                                                               |                                                                                                                                                                                                                                                                           |
| ----------------------------------------------- | ------------------------------------------------------------------------- | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [`@fleet-sdk/core`](/packages/core/)            | Core library with transaction builder and basic serialization.            |             [![npm](https://img.shields.io/npm/v/@fleet-sdk/core)](https://www.npmjs.com/package/@fleet-sdk/core) [![bundle size](https://img.shields.io/bundlephobia/minzip/@fleet-sdk/core?label=minzip)](https://bundlephobia.com/package/@fleet-sdk/core)             |
| [`@fleet-sdk/wallet`](/packages/wallet)         | Wallet related library, with mnemonic and keys management.                |         [![npm](https://img.shields.io/npm/v/@fleet-sdk/wallet)](https://www.npmjs.com/package/@fleet-sdk/wallet) [![bundle size](https://img.shields.io/bundlephobia/minzip/@fleet-sdk/wallet?label=minzip)](https://bundlephobia.com/package/@fleet-sdk/wallet)         |
| [`@fleet-sdk/common`](/packages/common)         | Internal types and utility functions shared across `@fleet-sdk` packages. |         [![npm](https://img.shields.io/npm/v/@fleet-sdk/common)](https://www.npmjs.com/package/@fleet-sdk/common) [![bundle size](https://img.shields.io/bundlephobia/minzip/@fleet-sdk/common?label=minzip)](https://bundlephobia.com/package/@fleet-sdk/common)         |
| [`@fleet-sdk/crypto`](/packages/crypto)         | Ergo blockchain crypto primitives.                                        |         [![npm](https://img.shields.io/npm/v/@fleet-sdk/crypto)](https://www.npmjs.com/package/@fleet-sdk/crypto) [![bundle size](https://img.shields.io/bundlephobia/minzip/@fleet-sdk/crypto?label=minzip)](https://bundlephobia.com/package/@fleet-sdk/crypto)         |
| [`@fleet-sdk/serializer`](/packages/serializer) | Ergo data serializer and parser.                                          | [![npm](https://img.shields.io/npm/v/@fleet-sdk/serializer)](https://www.npmjs.com/package/@fleet-sdk/serializer) [![bundle size](https://img.shields.io/bundlephobia/minzip/@fleet-sdk/serializer?label=minzip)](https://bundlephobia.com/package/@fleet-sdk/serializer) |
| [`@fleet-sdk/mock-chain`](/packages/mock-chain) | Mock chain and testing utilities for Ergo Smart Contracts.                | [![npm](https://img.shields.io/npm/v/@fleet-sdk/mock-chain)](https://www.npmjs.com/package/@fleet-sdk/mock-chain) [![bundle size](https://img.shields.io/bundlephobia/minzip/@fleet-sdk/mock-chain?label=minzip)](https://bundlephobia.com/package/@fleet-sdk/mock-chain) |
| [`@fleet-sdk/compiler`](/packages/compiler)     | Sigma.JS powered ErgoScript compiler.                                     |     [![npm](https://img.shields.io/npm/v/@fleet-sdk/compiler)](https://www.npmjs.com/package/@fleet-sdk/compiler) [![bundle size](https://img.shields.io/bundlephobia/minzip/@fleet-sdk/compiler?label=minzip)](https://bundlephobia.com/package/@fleet-sdk/compiler)     |

## Plugins

| Package                                                | Description                                                     |                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------ | --------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [`@fleet-sdk/babel-fees-plugin`](/plugins/babel-fees/) | Fleet SDK plugin and utility functions for Babel Fees protocol. | [![npm](https://img.shields.io/npm/v/@fleet-sdk/babel-fees-plugin)](https://www.npmjs.com/package/@fleet-sdk/babel-fees-plugin) [![bundle size](https://img.shields.io/bundlephobia/minzip/@fleet-sdk/babel-fees-plugin?label=minzip)](https://bundlephobia.com/package/@fleet-sdk/babel-fees-plugin) |
| [`@fleet-sdk/ageusd-plugin`](/plugins/ageusd/)         | Fleet SDK plugin and utility functions for AgeUSD protocol.     |         [![npm](https://img.shields.io/npm/v/@fleet-sdk/ageusd-plugin)](https://www.npmjs.com/package/@fleet-sdk/ageusd-plugin) [![bundle size](https://img.shields.io/bundlephobia/minzip/@fleet-sdk/ageusd-plugin?label=minzip)](https://bundlephobia.com/package/@fleet-sdk/ageusd-plugin)         |

## Fleet SDK Usage Examples

- [Nautilus' internal transaction builder](https://github.com/capt-nemo429/nautilus-wallet/blob/master/src/api/ergo/transaction/txBuilder.ts#L95)
- [Ergonames SDK](https://github.com/ergonames/sdk/blob/master/tx-lib/index.js)
- [Stealth Address example implementation](https://github.com/ross-weir/ergo-stealth-address-example)
- [SigmaFi UI](https://github.com/capt-nemo429/sigmafi-ui)

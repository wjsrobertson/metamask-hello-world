# Hello World for MetaMask

A simple hello world for testing metamask

## Building / Running dApp

### Building / Running Prerequisites

`npm` and `node` are required. Tested with version npm 3.5.2 and node 6.11.4.

### Steps to run (from the project root):

```
npm install
npm run dev
```

The `npm install` step will create a directory in the project root `node_modules`

The `npm run dev` step will startup a local server. It will puke out something like:

```
[0000] info  Server running at http://127.0.0.1:9000/ (connect)
[0000] info  LiveReload running on 35729
```

Then navigate to http://127.0.0.1:9000/examples/ (or whatever your machine's IP is set to)

### Testing prerequisites

`testrpc` and `truffle`. Tested with `testrpc` 6.0.3 and `truffle` 4.0.3.

These can be installed with:

```
npm install -g testrpc
npm install -g truffle
```

### Steps to run tests

Firstly start `testrpc` as a standalone process:

```
testpc
```

The in the project root do:

```
npm run integration-test
```

This will compile the solidity contracts in `contracts` then deploy to the testrpc network (see `truffle.js`) before running the tests in `tests`.

The `npm run integration-test` step is just running a few truffle commands - see `package.json` for details

## Building / Deploying Solidity Contract

The contract is already deployed on the Ropsten test network here: [0xc9671874b9f8b347558344dc0c80e3ac382ff127](https://ropsten.etherscan.io/address/0xc9671874b9f8b347558344dc0c80e3ac382ff127)

But you can deploy it using the instructions here: `contracts/message_sequence.sol` as per the middle bit of [this tutorial](https://medium.com/@merunasgrincalaitis/the-ultimate-end-to-end-tutorial-to-create-and-deploy-a-fully-descentralized-dapp-in-ethereum-18f0cf6d7e0e) - search for_"So go to the Remix IDE and paste the contract"_ to find the right section.

## Links

A couple of pages with useful stuff:

http://truffleframework.com/docs/getting_started/contracts

https://solidity.readthedocs.io/en/develop/contracts.html#events

https://medium.com/metamask/calling-a-smart-contract-with-a-button-d278b1e76705

https://medium.com/@merunasgrincalaitis/the-ultimate-end-to-end-tutorial-to-create-and-deploy-a-fully-descentralized-dapp-in-ethereum-18f0cf6d7e0e

https://sonnguyen.ws/hacked-parity-multisig-wallet-ropsten-testnet/

## Addresses used in this example

#### Message Sequence Contract

https://ropsten.etherscan.io/address/0xc9671874b9f8b347558344dc0c80e3ac382ff127
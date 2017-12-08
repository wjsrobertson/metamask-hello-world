# Hello World for MetaMask

A simple hello world for testing metamask

## Building / Running dApp

### Prerequisites

Make sure npm is installed. Tested with version 3.5.2 (pretty old, maybe a year old - will test newer when I upgrade)

### Steps to run after npm is available (from the project root):

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

## Building / Deploying Solidity Contract

The contract is already deployed on the Ropsten test network here: [0xd87cbd002c8663ed2ee364646056d088d4683871](https://ropsten.etherscan.io/address/0xd87cbd002c8663ed2ee364646056d088d4683871)

But you can deploy it using the instructions here: `sol/message_sequence.sol` as per the middle bit of [this tutorial](https://medium.com/@merunasgrincalaitis/the-ultimate-end-to-end-tutorial-to-create-and-deploy-a-fully-descentralized-dapp-in-ethereum-18f0cf6d7e0e) - search for_"So go to the Remix IDE and paste the contract"_ to find the right section.

## Links

A couple of pages with useful stuff:

https://solidity.readthedocs.io/en/develop/contracts.html#events

https://medium.com/metamask/calling-a-smart-contract-with-a-button-d278b1e76705

https://medium.com/@merunasgrincalaitis/the-ultimate-end-to-end-tutorial-to-create-and-deploy-a-fully-descentralized-dapp-in-ethereum-18f0cf6d7e0e

https://sonnguyen.ws/hacked-parity-multisig-wallet-ropsten-testnet/

## Addresses used in this example

#### Sender - Will 1:
https://ropsten.etherscan.io/address/0x36796F3a5CC9595D2D7BC8bb762D7395581A46E3

#### Message Sequence Contract

https://ropsten.etherscan.io/address/0xd87cbd002c8663ed2ee364646056d088d4683871
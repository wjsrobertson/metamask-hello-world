const Eth = require('ethjs-query')
const EthContract = require('ethjs-contract')

const addr = '0x36796F3a5CC9595D2D7BC8bb762D7395581A46E3'
const toAddress = '0xA296A3aC56337690f3b07bEbc0bccC9d751136Dd'
const value = 1

function startApp(web3) {
    const eth = new Eth(web3.currentProvider)
    const contract = new EthContract(eth)
    initContract(contract)
}

window.addEventListener('load', function() {

    // Check if Web3 has been injected by the browser:
    if (typeof web3 !== 'undefined') {
        // You have a web3 browser! Continue below!
        startApp(web3);
    } else {
        document.write("Sorry, example this won't work unless you use a web3 browser or install metamask")
    }
})

const abi = [{
    "constant": false,
    "inputs": [
        {
            "name": "_to",
            "type": "address"
        },
        {
            "name": "_value",
            "type": "uint256"
        }
    ],
    "name": "transfer",
    "outputs": [
        {
            "name": "success",
            "type": "bool"
        }
    ],
    "payable": false,
    "type": "function"
}]

const address = '0xdeadbeef123456789000000000000'

function initContract (contract) {
    const MiniToken = contract(abi)
    const miniToken = MiniToken.at(address)
    listenForClicks(miniToken)
}

function listenForClicks (miniToken) {
    var button = document.querySelector('button.transferFunds')
    button.addEventListener('click', function() {
        miniToken.transfer(toAddress, value, { from: addr })
            .then(function (txHash) {
                console.log('Transaction sent')
                console.dir(txHash)
                waitForTxToBeMined(txHash)
            })
            .catch(console.error)
    })
}

async function waitForTxToBeMined (txHash) {
    let txReceipt
    while (!txReceipt) {
        try {
            txReceipt = await eth.getTransactionReceipt(txHash)
        } catch (err) {
            return indicateFailure(err)
        }
    }
    indicateSuccess()
}
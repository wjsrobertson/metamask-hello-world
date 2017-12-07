const Eth = require('ethjs-query')
const EthContract = require('ethjs-contract')

const value = 1
var eth = null

function startApp(web3) {
    const eth = new Eth(web3.currentProvider)
    const contract = new EthContract(eth)
    initContract(contract)

    return eth
}

window.addEventListener('load', function() {
    if (typeof web3 !== 'undefined') {
        eth = startApp(web3);
    } else {
        displayMessage("Sorry, example this won't work unless you use a web3 browser or install metamask")
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

function initContract (contract) {
    const MiniToken = contract(abi)
    const address = document.querySelector('#contract').value
    const miniToken = MiniToken.at(address)
    listenForClicks(miniToken)
}

function listenForClicks (miniToken) {
    let button = document.querySelector('button.transferFunds')
    button.addEventListener('click', function() {
        let toAddress = document.querySelector('#to').value
        let fromAddress = document.querySelector('#from').value

        miniToken.transfer(toAddress, value, { from: fromAddress })
            .then(function (txHash) {
                displayMessage('Transaction sent: ' + txHash + ' - waiting for it to be mined')
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

function indicateFailure(err) {
    displayMessage("Oh poo - something went wrong")
    console.error(err)
}

function indicateSuccess() {
    displayMessage("Transaction has been mined - whoohoo!")
}

function displayMessage(msg) {
    var messageMar = document.querySelector('#status')
    messageMar.innerText = msg
}
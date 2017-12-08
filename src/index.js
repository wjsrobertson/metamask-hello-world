const messageSequenceAbi = require('./message-sequence-abi.js')

function startApp() {
    initAddress()
    initContract()
    displayBlockLoop()
}

window.addEventListener('load', function () {
    if (typeof web3 !== 'undefined') {
        startApp();
    } else {
        document.write("Sorry, example this won't work unless you use a web3 browser or install metamask")
    }
})

function initAddress() {
    web3.eth.getAccounts((err, accounts) => {
        document.querySelector('#from').value = accounts[0]
    })
}

function displayBlockLoop() {
    web3.eth.getBlockNumber((err, blockNumber) => {
        if (blockNumber) {
            document.querySelector('#currentBlock').innerText = blockNumber.toString()
            setTimeout(displayBlockLoop, 2000)
        }
    })
}

function initContract() {
    const address = document.querySelector('#contract').value
    const MessageSequence = web3.eth.contract(messageSequenceAbi);
    const messageSequence = MessageSequence.at(address)

    const event = messageSequence.MessageChange()
    event.watch(function (error, result) {
        if (!error) {
            console.log(`Event: ${result}`)
        } else {
            console.log(`Event error: ${error}`)
        }
    })

    listenForClicks(messageSequence)
}

function handleTransactionRequest(txHash) {
    console.info(`Checking for transaction completion of ${txHash}`)
    web3.eth.getTransaction(txHash, (err, transaction) => {
        if (err) {
            console.log(`getTransaction callback error: ${err} /`)
        } else if (transaction) {
            if (transaction.transactionIndex) {
                console.info(`Transaction complete ${txHash}`)
                document.querySelector('#statusMessage').innerText = `Mined on block ${transaction.blockNumber} with transaction index ${transaction.transactionIndex}`
            } else {
                console.info(`Transaction not yet complete ${txHash}`)
                window.setTimeout(() => handleTransactionRequest(txHash), 2000)
            }
        }
    })
}

function listenForClicks(messageSequence) {
    let button = document.querySelector('#send')

    button.addEventListener('click', function () {
        let message = document.querySelector('#message').value
        let fromAddress = document.querySelector('#from').value

        messageSequence.update_message(message, {from: fromAddress}, (err, txHash) => {
            document.querySelector('#statusMessage').innerText = `Message sent to blockchain with transaction ${txHash}`
            handleTransactionRequest(txHash)
        })
    })
}
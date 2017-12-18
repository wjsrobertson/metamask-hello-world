module.exports = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "newMessage",
                "type": "string"
            }
        ],
        "name": "updateMessage",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [

        ],
        "name": "message",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "oldMessage",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "newMessage",
                "type": "string"
            }
        ],
        "name": "MessageChange",
        "type": "event"
    }
]

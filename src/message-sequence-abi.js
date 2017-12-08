module.exports = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "new_message",
                "type": "string"
            }
        ],
        "name": "update_message",
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
                "indexed": false,
                "name": "_sender",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "_old_message",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "_new_message",
                "type": "string"
            }
        ],
        "name": "MessageChange",
        "type": "event"
    }
]

pragma solidity ^0.4.6;

contract MessageSequence {

    event MessageChange(
        address indexed sender,
        string oldMessage,
        string newMessage
    );

    string public message;

    function updateMessage(string newMessage) external {
        MessageChange(msg.sender, message, newMessage);
        message = newMessage;
    }
}

pragma solidity ^0.4.6;

contract MessageSequence {

    event MessageChange(
        address indexed _sender,
        string _old_message,
        string _new_message
    );

    string public message;

    function update_message(string new_message) external {
        MessageChange(msg.sender, message, new_message);
        message = new_message;
    }
}

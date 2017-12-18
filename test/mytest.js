const _ = require('lodash')

const MessageSequence = artifacts.require("MessageSequence");

contract('MessageSequence', function(accounts) {

    it("should fire an event with the new message", function() {
        return MessageSequence.deployed().then(function(instance) {
            return instance.updateMessage("new message", {from: accounts[0]})
        }).then(function(result) {
            const event = _.find(result.logs, (l) => l.event === "MessageChange")

            if (event) {
                assert.equal(accounts[0], event.args['sender'], "sender address wrong")
                assert.equal("new message", event.args['newMessage'])
            }
        });
    });
});

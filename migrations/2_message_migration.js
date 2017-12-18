var Migrations = artifacts.require("./MessageSequence.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};

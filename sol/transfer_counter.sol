pragma solidity ^0.4.6;

contract transfer_counter {

    uint256 public num_calls;

    uint256 public total;

    address public last_address;

    function transfer(address _to, uint256 _value) external returns (bool) {
        last_address = _to;
        total = total + _value;
        num_calls = num_calls + 1;

        return true;
    }
}

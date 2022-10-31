pragma solidity ^0.8.0;


import './SimpleBep20Token.sol';

// SPDX-License-Identifier: MIT

contract MintableBurnableBep20Token is SimpleBep20Token {

    constructor(
        address _owner,
        string memory _name,
        string memory _symbol,
        uint8 _decimals,
        uint256 _supply

    ) SimpleBep20Token(_owner, _name, _symbol, _decimals, _supply) {}

    function mint(uint256 _amount) public onlyOwner {

        _mint(msg.sender, _amount);
    }

    function burn(uint256 _amount) public {

        _burn(msg.sender, _amount);
    }

}
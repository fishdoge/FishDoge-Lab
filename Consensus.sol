// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract FishDogeLabConsensusConf is ERC1155,Ownable{

    uint256 private constant TotalSupply = 5000;
    uint256 private TotalMint = 0;

    string private _name = "FishDoge Lab";
    string private _symbol = "FishDoge Lab";

    bool private mintStart = false;
    

    constructor(string memory _baseURI)ERC1155(_baseURI){

    }


    fallback() external payable{
        require(mintStart,"not start yet");
        
        if(balanceOf(msg.sender,1) == 0){
            mintFishDogeNamecard();
        }else{
            require(msg.value > 0.001 ether,"If you want a nother one please pay!");

        }

        payable(owner()).transfer(address(this).balance);

    }

    function mintFishDogeNamecard() internal {
        _mint(msg.sender,1,1,"");
    }

    function setActive(bool state) external onlyOwner{
        mintStart = state;
    }

    
    function name() public view returns (string memory) {
        return _name;
    }

    function symbol() public view returns (string memory) {
        return _symbol;
    }

    function totalSupply() public pure returns (uint) {
        return TotalSupply;
    }

   
    function balanceOf(address account)external view returns(uint256){
        return balanceOf(account,1);
    }


}
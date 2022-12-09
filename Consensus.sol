// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract FishDogeLabConsensusConf is ERC1155,Ownable{
    using Strings for uint256;

    uint256 private constant TotalSupply = 5000;
    uint256 private TotalMint = 0;

    mapping(address => bool) public checkNFT;
    mapping(address => bool) public checkNFTV2;

    string private _name = "FishDoge Lab business card";
    string private _symbol = "FishDoge Lab";

    string private baseURI;

    bool private mintStart = false;


    constructor(string memory _baseURI)ERC1155(_baseURI){
        baseURI = _baseURI;
    }


    fallback() external payable{
        require(mintStart,"not start yet");

        if(checkNFT[msg.sender] == false){
            mintFishDogeNamecard();
            checkNFT[msg.sender] = true;
        }else if(checkNFTV2[msg.sender] == false){
            mintFishDogeNamecardV2();
            checkNFTV2[msg.sender] = true;
        }else{
            revert("You've got it all");
        }

        payable(owner()).transfer(address(this).balance);

    }

    function mintFishDogeNamecard() internal {
        _mint(msg.sender,1,1,"");
    }

    function mintFishDogeNamecardV2() internal {
        _mint(msg.sender,2,1,"");
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

    function uri(uint256 typeId) public view override returns (string memory){

        return string(abi.encodePacked(baseURI, typeId.toString(),".json"));
    }


}
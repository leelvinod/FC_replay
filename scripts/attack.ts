import { ethers } from "hardhat";

async function main() {
  const Attacker = await ethers.getContractFactory("Attacker");
  const attacker = await Attacker.deploy();
  await attacker.deployed();
  console.log("Attack starts");

  await attacker.attack();

  console.log("Attack ends");
}

main().catch((error) => {
  throw new Error(error);
});

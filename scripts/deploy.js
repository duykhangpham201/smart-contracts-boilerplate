require("@nomiclabs/hardhat-waffle");
const { ethers } = require("hardhat");

const main = async () => {
  const Starter = await ethers.getContractFactory("");
  const starter = await Starter.deploy("");

  await starter.deployed();

  console.log("Greeter deployed to:", starter.address);
};

const runMain = async () => {
  try {
    await main();
    throw new Error("Something bad happened!");
  } catch (error) {
    console.log(error);
    throw new Error("Something bad happened!");
  }
};

runMain();

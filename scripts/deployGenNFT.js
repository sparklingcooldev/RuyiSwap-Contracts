// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {

  // const UniswapV2Factory = await hre.ethers.getContractFactory("UniswapV2Factory");
  // const factory = await UniswapV2Factory.deploy('0xC2a5ea1d4406EC5fdd5eDFE0E13F59124C7e9803');

  // await factory.deployed();

  // console.log("UniswapV2Factory deployed to:", factory.address);

  // const UniswapV2Router02 = await hre.ethers.getContractFactory("UniswapV2Router02");
  // const router = await UniswapV2Router02.deploy('0x64e5cbcFbC45A57513B4BB853d18338100D4f1c2', '0x6a3173618859C7cd40fAF6921b5E9eB6A76f1fD4');

  // await router.deployed();

  // console.log("UniswapV2Router02 deployed to:", router.address);

  // const Staking = await hre.ethers.getContractFactory("BEP20Token");
  // const staking = await Staking.deploy();

  // await staking.deployed();

  // console.log("Staking deployed to:", staking.address);

  const PancakeProfile = await hre.ethers.getContractFactory("PancakeProfile");
  const pancakeprofile = await PancakeProfile.deploy('0x0c19E21C4f7036F195a98877d092327C6e69b9a4', '500000000000000000', '500000000000000000', '1000000000000000');

  await pancakeprofile.deployed();

  console.log("PancakeProfile deployed to:", pancakeprofile.address);

  const AnniversaryAchievement = await hre.ethers.getContractFactory("AnniversaryAchievement");
  const achievement = await AnniversaryAchievement.deploy(pancakeprofile.address, 100, 130, 516010001, 11400000);

  await achievement.deployed();

  console.log("AnniversaryAchievement deployed to:", achievement.address);

  const MultiCall = await hre.ethers.getContractFactory("Multicall2");
  const multicall = await MultiCall.deploy();

  await multicall.deployed();

  console.log("MultiCall deployed to:", multicall.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

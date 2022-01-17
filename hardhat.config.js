require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const PROD_ALCHEMY_KEY = process.env.PROD_ALCHEMY_KEY || "";
const KOVAN_PRIVATE_KEY = process.env.KOVAN_PRIVATE_KEY || "";
const MAINNET_PRIVATE_KEY = process.env.MAINNET_PRIVATE_KEY || "";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY || "";

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: PROD_ALCHEMY_KEY,
      accounts: [RINKEBY_PRIVATE_KEY],
    },
    kovan: {
      url: PROD_ALCHEMY_KEY,
      accounts: [KOVAN_PRIVATE_KEY],
    },
    mainnet: {
      url: PROD_ALCHEMY_KEY,
      accounts: [MAINNET_PRIVATE_KEY],
    },
  },
  etherscan: {
    url: "",
    apiKey: ETHERSCAN_API_KEY,
  },
};

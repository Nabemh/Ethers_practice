const { ethers } = require("ethers");

const key = process.env.INFURA_ID;

const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${key}`);

const main = async () => {


}

main()
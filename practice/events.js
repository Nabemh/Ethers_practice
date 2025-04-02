require('dotenv').config();

const { ethers } = require("ethers");

const key = process.env.INFURA_ID;
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${key}`);

const address = '0x6B175474E89094C44Da98b954EedeAC495271d0F' //DAI contract
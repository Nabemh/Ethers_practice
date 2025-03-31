require('dotenv').config();

const { ethers } = require("ethers");

const key = process.env.INFURA_ID;
const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${key}`);

const account1 = '0xa99831Ca21ef7C3F2E0617B6941a2b002bf5BAF6'
const account2 = '0xa19cB97872EB70ec355F4ea6649AD9ec3f2e1ecd'



const main = async () => {
    
}

main()
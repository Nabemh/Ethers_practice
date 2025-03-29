require('dotenv').config();

const { ethers } = require("ethers");

const key = process.env.INFURA_ID;

const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${key}`);

const address = '0xb35D6f636925FF8E8069f700cce93e1dAFCfB53a'

const main = async () => {
    const balance = await provider.getBalance(address)
    console.log(`\nETH balance of ${address} ---> ${ethers.utils.formatEther(balance)} ETH\n`)
}
main()
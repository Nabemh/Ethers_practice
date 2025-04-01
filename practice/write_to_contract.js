require('dotenv').config();

const { ethers } = require("ethers");

const INFURA_ID = process.env.INFURA_ID;
const provider = new ethers.providers.JsonRpcProvider(`https://kovan.infura.io/v3/${INFURA_ID}`)

const account1 = '0xa99831Ca21ef7C3F2E0617B6941a2b002bf5BAF6'
const account2 = '0xa19cB97872EB70ec355F4ea6649AD9ec3f2e1ecd'

const privateKey1 = process.env.PRIVATE_KEY;
const wallet = new ethers.Wallet(privateKey1, provider)

const ERC20_ABI = [
    "function balanceOf(address) view returns (uint)",
    "function transfer(address to, uint amount) returns (bool)",
]

const address = '0xa36085F69e2889c224210F603D836748e7dC0088'

const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {


}

main()
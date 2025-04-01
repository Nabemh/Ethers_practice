require('dotenv').config();

const { ethers } = require("ethers");

const INFURA_ID = process.env.INFURA_ID;
const provider = new ethers.providers.JsonRpcProvider(`https://kovan.infura.io/v3/${INFURA_ID}`)

const account1 = process.env.ACCOUNT_1
const account2 = process.env.ACCOUNT_2

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
require('dotenv').config();

const { ethers } = require("ethers");

const key = process.env.INFURA_ID;
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${key}`);

const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",

    "event Transfer(address indexed from, address indexed to, uint amount)"
];

const address = '0x6B175474E89094C44Da98b954EedeAC495271d0F' //DAI contract
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {
    const block = await provider.getBlockNumber()

    const transferEvents = await contract.queryFilter("Transfer", block - 10, block)
    console.log(transferEvents)
}

main()
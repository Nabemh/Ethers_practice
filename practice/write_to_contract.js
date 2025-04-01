require('dotenv').config();

const { ethers } = require("ethers");

const key = process.env.INFURA_ID;
const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${key}`);

const account1 = process.env.ACCOUNT_1
const account2 = process.env.ACCOUNT_2

const privatekey1 = process.env.PRIVATE_KEY;
const wallet = new ethers.Wallet(privatekey1, provider);

const ERC20_ABI = [
    "function balanceOf(address) view returns (uint)",
    "function transfer(address to, uint amount) returns (bool)",
];

const address = '0xa36085F69e2889c224210F603D836748e7dC0088'
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {

    const balance = await contract.balanceOf(account1)

    console.log(`\nReading from ${address}\n`)
    console.log(`Balance of sender: ${balance}\n`)

    const contractWithWallet =  contract.connect(wallet);

    const tx = await contractWithWallet.transfer(account2, balance);
    await tx.wait()

    console.log(tx)

    const balanceOfSender = await contract.balanceOf(account1)
    const balanceOfReciever = await contract.balanceOf(account2)

    console.log(`\nReading from ${balanceOfSender}\n`)
    console.log(`Balance of sender: ${balanceOfReciever}\n`)


}

main()
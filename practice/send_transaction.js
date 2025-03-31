require('dotenv').config();

const { ethers } = require("ethers");

const key = process.env.INFURA_ID;
const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${key}`);

const account1 = '0xa99831Ca21ef7C3F2E0617B6941a2b002bf5BAF6'
const account2 = '0xa19cB97872EB70ec355F4ea6649AD9ec3f2e1ecd'

const privatekey1 = process.env.PRIVATE_KEY;
const wallet = new ethers.Wallet(privatekey1, provider);

const main = async () => {

    const senderBalaneceBefore = await provider.getBalance(account1)
    const recieverBalaneceBefore = await provider.getBalance(account2)

    console.log(`reciever balance before: ${ethers.utils.formatEther(senderBalaneceBefore)}`)
    console.log(`reciever balance before: ${ethers.utils.formatEther(recieverBalaneceBefore)}\n`)

    //sending ether
    const tx = await wallet.sendTransaction({ 
        to: account2, 
        value: ethers.utils.parseEther(0.025)
    })

    await tx.wait() // wait for transaction to be mined
    console.log(tx)

    const senderBalaneceAfter = await provider.getBalance(account1)
    const recieverBalaneceAfter = await provider.getBalance(account2)

    console.log(`reciever balance before: ${ethers.utils.formatEther(senderBalaneceAfter)}`)
    console.log(`reciever balance before: ${ethers.utils.formatEther(recieverBalaneceAfter)}\n`)
}


main()
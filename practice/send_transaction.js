require('dotenv').config();

const { ethers } = require("ethers");

const key = process.env.INFURA_ID;
const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${key}`);

const account1 = process.env.ACCOUNT_1
const account2 = process.env.ACCOUNT_2

const privatekey1 = process.env.PRIVATE_KEY;
const wallet = new ethers.Wallet(privatekey1, provider);

const main = async () => {

    const senderBalanceBefore = await provider.getBalance(account1)
    const recieverBalanceBefore = await provider.getBalance(account2)

    console.log(`reciever balance before: ${ethers.utils.formatEther(senderBalanceBefore)}`)
    console.log(`reciever balance before: ${ethers.utils.formatEther(recieverBalanceBefore)}\n`)

    //sending ether
    const tx = await wallet.sendTransaction({ 
        to: account2, 
        value: ethers.utils.parseEther("0.025")
    })

    await tx.wait() // wait for transaction to be mined
    console.log(tx)

    const senderBalaneceAfter = await provider.getBalance(account1)
    const recieverBalaneceAfter = await provider.getBalance(account2)

    console.log(`reciever balance before: ${ethers.utils.formatEther(senderBalaneceAfter)}`)
    console.log(`reciever balance before: ${ethers.utils.formatEther(recieverBalaneceAfter)}\n`)
}


main()
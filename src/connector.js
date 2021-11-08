const { ethers } = require("ethers");
// const Web3 = require('web3')
const endpoints = require('./endpoints')


const connectToProvider = (network) => {
    url = endpoints[network]
    const provider = new ethers.providers.JsonRpcProvider(url);
    return provider
}


module.exports =  connectToProvider

// w3 = Web3(Web3.HTTPProvider('https://eth.manko.yoga/rpc'))
// w3 = Web3(Web3.HTTPProvider('https://eth.manko.yoga/'))
// w3ws = Web3(Web3.WebsocketProvider('wss://ethws.manko.yoga'))

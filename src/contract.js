const { ethers } = require("ethers")
const Web3 = require('web3')
const connectToProvider = require('./connector')
const {readFileSync} = require('fs')
const contractDetail = require('./contracts/contract-detail')


const subscribeToContract = (network, name) => {
    const address = contractDetail[network][name]['address'];
    const provider = connectToProvider(network)

    // const abi = contractDetail[network][name]['abi']

    // WEB# version
    // const web3 = new Web3(provider)
    // const contract = new web3.eth.Contract(
    //     abi,
    //     address
    // )

    // ETHRS version
    // this ABI object works for both Uniswap and SushiSwap
    
    const abi = [
        "event Swap(address indexed sender, uint amount0In, uint amount1In, uint amount0Out, uint amount1Out, address indexed to)",
        ];
    
    const contract = new ethers.Contract(
        address,
        abi,
        provider
      );
    //   console.log(contract);
    return contract
}

// subscribeToContract('mainnet', 'SushiswapEthSpell')

module.exports = subscribeToContract


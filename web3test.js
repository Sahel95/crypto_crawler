const { ethers } = require("ethers")
const Web3 = require('web3')
const contractDetail = require('./contracts/contract-detail')

const init = async () => {
  const address = '0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc'
  const abi = contractDetail['mainnet']['uniswapUsdtWethExchange']['abi']
  url = 'https://mainnet.infura.io/v3/ad98efa290a84b99aa20dc81ca5780fb'
  const provider = new Web3.providers.HttpProvider(url);
  const web3 = new Web3(provider)
  const contract = new web3.eth.Contract(
      abi,
      address
  )
  // console.log(contract);
  const test = await contract.methods.totalSupply().call();
  console.log(test);
  contract.events.Swap()
  .on('data', (event) => {
      console.log(event);
    })
  .on('error', console.error);
}

init()
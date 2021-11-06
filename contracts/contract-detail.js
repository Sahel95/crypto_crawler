const {readFileSync} = require('fs')

const contractDetail = {
    mainnet: {
        SushiswapEthToSpell: {
            address: '0xb5De0C3753b6E1B4dBA616Db82767F17513E6d4E',
            token0: 'weth',
            token1:'spell',
            abi: JSON.parse(readFileSync(`./contracts/MainnetSushiswapEthToSpell.json`))
        },
        uniswapUsdtWethExchange: {
            address: '0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc',
            abi: JSON.parse(readFileSync(`./contracts/uniswapUsdtWethExchange.json`)),
            token0: 'usdc',
            token1:'weth'
        }
    },
    arbitrum: {
        SushiswapEthToSpell: {
            address: '0x8f93Eaae544e8f5EB077A1e09C1554067d9e2CA8',
            token0:'whet',
            token1:'spell',
            abi: JSON.parse(readFileSync(`./contracts/ArbitrumSushiswapEthToSpell.json`))
        }
    },
}

module.exports = contractDetail
const {readFileSync} = require('fs')

const contractDetail = {
    mainnet: {
        SushiswapWethSpell: {
            address: '0xb5De0C3753b6E1B4dBA616Db82767F17513E6d4E',
            token0: 'weth',
            token1:'spell',
            // abi: JSON.parse(readFileSync(`./contracts/MainnetSushiswapEthToSpell.json`))
        },
        // uniswapUsdtWethExchange: {
        //     address: '0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc',
        //     abi: JSON.parse(readFileSync(`./contracts/uniswapUsdtWethExchange.json`)),
        //     token0: 'usdc',
        //     token1:'weth'
        // },
        SushiswapWBtcBadger: {
            address: '0x110492b31c59716ac47337e616804e3e3adc0b4a',
            token0: 'wbtc',
            token1: 'badger',
            // abi: JSON.parse(readFileSync(`./contracts/.json`))
        },
        UniswapWBtcBadger: {
            address: '0xcd7989894bc033581532d2cd88da5db0a4b12859',
            token0: 'wbtc',
            token1: 'badger',
            // abi: JSON.parse(readFileSync(`./contracts/.json`))
        }, 
        SushiswapWethCrv: {
            address: '0x58dc5a51fe44589beb22e8ce67720b5bc5378009',
            token0: 'weth',
            token1: 'crv',
            // abi: JSON.parse(readFileSync(`./contracts/.json`))
        },
        UniswapWethCrv: {
            address: '0x3da1313ae46132a397d90d95b1424a9a7e3e0fce',
            token0: 'weth',
            token1: 'crv',
            // abi: JSON.parse(readFileSync(`./contracts/.json`))
        },
        SushiswapWBtcWeth: {
            address: '0xceff51756c56ceffca006cd410b03ffc46dd3a58',
            token0: 'wbtc',
            token1: 'weth',
            // abi: JSON.parse(readFileSync(`./contracts/.json`))
        },
        UniswapWBtcWeth: {
            address: '0xBb2b8038a1640196FbE3e38816F3e67Cba72D940',
            token0: 'wbtc',
            token1: 'weth',
            // abi: JSON.parse(readFileSync(`./contracts/.json`))
        }, 
    },
    arbitrum: {
        SushiswapWethSpell: {
            address: '0x8f93Eaae544e8f5EB077A1e09C1554067d9e2CA8',
            token0:'weth',
            token1:'spell',
            // abi: JSON.parse(readFileSync(`./contracts/ArbitrumSushiswapEthToSpell.json`))
        },
        UniswapWethBadger: {
            address: '0x3C6bd88cdD2AECf466E22d4ED86dB6B8953FDb72',
            token0: 'weth',
            token1: 'badger',
            // abi: JSON.parse(readFileSync(`./contracts/.json`))
        },
        UniswapWethCrv: {
            address: '0xd45c3A746A22016B2ac77210bDC1cbdE2b1AEee6',
            token0: 'weth',
            token1: 'crv',
            // abi: JSON.parse(readFileSync(`./contracts/.json`))
        },
    },
}

module.exports = contractDetail
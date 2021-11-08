// bnt='0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c'
// vbnt='0x48Fb253446873234F2fEBbF9BdeAA72d9d387f94'
// cvxcrv='0x62b9c7356a2dc64a1969e19c23e4f579f9810aa7'
// yvecrvdao='0xc5bddf9843308380375a611c18b50fb9341f502a'
// sdvecrv='0x478bbc744811ee8310b461514bdc29d03739084d'
// crv='0xD533a949740bb3306d119CC777fa900bA034cd52'
const tokens = {
    'bnt':'0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c',
    'vbnt':'0x48Fb253446873234F2fEBbF9BdeAA72d9d387f94',
    'cvxcrv':'0x62b9c7356a2dc64a1969e19c23e4f579f9810aa7',
    'yvecrvdao':'0xc5bddf9843308380375a611c18b50fb9341f502a',
    'sdvecrv':'0x478bbc744811ee8310b461514bdc29d03739084d',
    'crv':'0xD533a949740bb3306d119CC777fa900bA034cd52',
    'usdt':'0xdac17f958d2ee523a2206206994597c13d831ec7',
    'eth':'0x0000000000000000000000000000000000000000',
    'sai':'0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359',
    'swrv':'0xB8BAa0e4287890a5F79863aB62b7F175ceCbD433',
    'dai':'0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359',
    'usdc':'0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    'mim':'0x99d8a9c45b2eca8864373a26d1459e3dff1e17f3',
    'usdp':'0x1456688345527bE1f37E9e627DA0837D6f08C925',
    'badger':'0x3472a5a71965499acd81997a54bba8d852c6e53d',
    'digg':'0x798D1bE841a82a273720CE31c822C61a67a601C3',
    'wbtc':'0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
}

paths = [
    ['yvecrvdao','crv'],
    ['sdvecrv','crv'],
    ['bnt','usdt'],
    ['crv','usdt'],
    ['mim','usdc'],
    ['usdp','usdc'],
    ['digg','wbtc'],
    ['digg','usdc'],
    ['badger','usdc'],
    ['cvxcrv','crv']
]

paths_ignore = [
    ['bnt','vbnt'],
    ['cvxcrv','crv']
]

module.exports = {
    tokens,
    paths,
    paths_ignore
}
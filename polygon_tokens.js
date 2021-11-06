const polygon_tokens={'mimatic':'0xa3fa99a148fa48d14ed51d610c367c61876997f1','pusd':'0x9af3b7dc29d3c4b1a5731408b6a9656fa7ac3b72','crv':'0x172370d5cd63279efa6d502dab29171933a610af','eth':'0x7ceb23fd6bc0add59e62ac25578270cff1b9f619','matic':'0x0000000000000000000000000000000000000000','usdc':'0x2791bca1f2de4661ed88a30c99a7a9449aa84174','usdt':'0xc2132d05d31c914a87c6611c10748aeb04b58e8f','dai':'0x8f3cf7ad23cd3cadbd9735aff958023239c6a063','wbtc':'0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6','snx':'0x50b728d8d964fd00c2d0aad81718b71311fef68a','wmatic':'0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270'}
const polygon_paths=[['mimatic','usdc'],['pusd','usdc'],['crv','usdc'],['eth','usdc'],['usdt','usdc'],['wmatic','usdc'],['snx','usdc'],['wbtc','usdc'],['dai','usdc']]
const excluded=[['snx','usdc'],['wbtc','usdc'],['dai','usdc']]

module.exports = {
    polygon_paths,
    polygon_tokens,
    excluded
}
const { ethers } = require("ethers");
const subscribeToContract = require("./contract")
const tokens = require('./tokens')
const contractDetail = require('./contracts/contract-detail')
const write = require('./influx/influx-writer')


function getAmountsFromSwapArgs(swapArgs) {
  const { amount0In, amount0Out, amount1In, amount1Out } = swapArgs;
  let token0AmountBigDecimal = amount0In;
  if (token0AmountBigDecimal.eq(0)) {
    token0AmountBigDecimal = amount0Out;
  }

  let token1AmountBigDecimal = amount1In;
  if (token1AmountBigDecimal.eq(0)) {
    token1AmountBigDecimal = amount1Out;
  }
  return { token0AmountBigDecimal, token1AmountBigDecimal };
}

function convertSwapEventToPrice({ swapArgs, token0Decimals, token1Decimals }) {
  const {
    token0AmountBigDecimal,
    token1AmountBigDecimal,
  } = getAmountsFromSwapArgs(swapArgs);

  const token0AmountFloat = parseFloat(
    ethers.utils.formatUnits(token0AmountBigDecimal, token0Decimals)
  );
  const token1AmounFloat = parseFloat(
    ethers.utils.formatUnits(token1AmountBigDecimal, token1Decimals)
  );

  if (token1AmounFloat > 0) {
    const priceOfToken0InTermsOfToken1 = token0AmountFloat / token1AmounFloat;
    return { price: priceOfToken0InTermsOfToken1, volume: token0AmountFloat };
  }

  return null;
}

const eventListener = async (network, contractName) => {
    console.log(`try to listen ${network} - ${contractName}::::::::::`);

    const token0 = contractDetail[network][contractName]['token0'];
    const token1 = contractDetail[network][contractName]['token1'];

    const contract = await subscribeToContract(network, contractName)
    const filter = contract.filters.Swap();

    contract.on(filter, (from, a0in, a0out, a1in, a1out, to, event) => {
        console.log(`Swap on ${network} - ${contractName}::::::::::`);
        const { price, volume } = convertSwapEventToPrice({
            swapArgs: event.args,
            token0Decimals: tokens[token0]['decimals'],
            token1Decimals: tokens[token1]['decimals']
        });
        console.log({ price, volume });
        write(price, volume, network, contractName)
    });
}

// eventListener('mainnet', 'SushiswapEthSpell')
// eventListener('arbitrum', 'SushiswapEthSpell')
// eventListener('arbitrum', 'uniswapWethCrv')

module.exports = eventListener
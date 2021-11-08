const contracts = require('./contracts/contract-detail')
const eventListener = require('./eventListener')


const init = async () => {
    Object.keys(contracts).map(function(key0, index) {
        Object.keys(contracts[key0]).map(function(key1, index) {
            var network = key0
            var contractName = key1
            eventListener(network, contractName)
        });
    });
}

init()
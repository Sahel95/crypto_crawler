const {InfluxDB, Point, HttpError} = require('@influxdata/influxdb-client')
const {url, token, org, bucket} = require('./client')
const {hostname} = require('os')

const influxWriter = async (price, volume, network, contractName) => {
    const tableName = `${network}-${contractName}`
    console.log(tableName);
    console.log(typeof(tableName));
    const client = new InfluxDB({
        url: url,
        token: token
    })  
    
    const writeApi = client.getWriteApi(org, bucket)
    writeApi.useDefaultTags({ host: 'host1' })
    const point = new Point(tableName)
    // .tag('price', price)
    .floatField('volume', volume)
    .intField('price', Math.round(price))
    .timestamp(new Date())
    console.log(point);
    writeApi.writePoint(point)
    
    await writeApi
        .close()
        .then( () => {
            console.log('FINISHED');
        })
        .catch( e => {
            console.error(e);
            console.log('Finished ERROR');
        })
    return
}

influxWriter(1386502.675580985, 173312.8344476231, 'ss', 'rtyui')

module.exports = influxWriter


const {InfluxDB, Point, HttpError} = require('@influxdata/influxdb-client')
const {url, token, org, bucket} = require('./client')
const {hostname} = require('os')

const influxWriter = async (price, volume, network, contractName) => {
    const tableName = `${network}-${contractName}`
    // console.log(tableName);
    // console.log(typeOf(tableName));
    const client = new InfluxDB({
        url: url,
        token: token
    })  
    
    const writeApi = client.getWriteApi(org, bucket)
    writeApi.useDefaultTags({ host: 'host1' })
    const point = new Point(tableName)
    // .tag('price', price)
    .floatField('volume', volume)
    .timestamp(new Date())
    // console.log(point);
    writeApi.writePoint(point)
    
    await writeApi
        .close()
        .then( () => {
            console.log('Influx FINISHED');
        })
        .catch( e => {
            console.error(e);
            console.log('Influx Finished ERROR');
        })
    return
}

// influxWriter(122, 220, 'ss', 'rtyui')

module.exports = influxWriter


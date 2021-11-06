const {InfluxDB, Point, HttpError} = require('@influxdata/influxdb-client')
const {url, token, org, bucket} = require('./client')
const {hostname} = require('os')

const influxWriter = async (price, volume) => {
    const client = await new InfluxDB({
        url: url,
        token: token
    })
    const writeApi = await client.getWriteApi(org, bucket)
    writeApi.useDefaultTags({ host: 'host1' })
    const point1 = await new Point('test').floatField('price',price).timestamp(new Date())
    await writeApi.writePoint(point1)
    
    const point2 = new Point('test').floatField('volume',volume).timestamp(new Date())
    await writeApi.writePoint(point2)
    
    writeApi
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

influxWriter(153, 184)

module.exports = influxWriter


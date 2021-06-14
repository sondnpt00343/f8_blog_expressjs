const mongoose = require('mongoose')
const dbConfig = require('../config/db')

async function connect() {
    const { host, port, dbname } = dbConfig

    try {
        await mongoose.connect(`mongodb://${host}:${port}/${dbname}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Connect to DB successfully!')
    } catch (error) {
        console.log('Connect to DB failure!')
    }
}

module.exports = connect

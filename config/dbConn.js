const mongoose = require('mongoose')

const dBuri = process.env.DB_URI

const connectDB = async () => {
    mongoose.connect(dBuri)
        .then(() => {
            console.log('Connected to MongoDB...')
        })
        .catch((err) => {
            console.log('Failed to connect to MongoDB...', err)
        });
}

module.exports = connectDB;
const express = require('express');
const bodyParser = require('body-parser')
const _ = require('dotenv').config();
const connectDB = require('./config/dbConn');

connectDB(); //connect to database

const port = process.env.port
const app = express();
app.use(bodyParser.json());

app.use('/owners/', require('./routes/owner'));
app.use('/cars/', require('./routes/car'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}...`)
});






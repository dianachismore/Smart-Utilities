const express = require('express');
require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('db connection is successful!')
}).catch(err => console.log(err.message));

const app = express();

app.get('/', (req,res) => {
    res.send('Initial message');
});

app.listen(8000, () => console.log("server is up and running"));


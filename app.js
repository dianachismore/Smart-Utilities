const express = require('express');
require('dotenv').config();

require('./models/db');

const app = express();

app.get('/', (req,res) => {
    res.send('Initial message');
});

app.listen(8000, () => console.log("server is up and running"));
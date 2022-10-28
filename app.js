const express = require('express');
require('dotenv').config();

require('./models/db');
const User = require('./models/user')
const app = express();

app.post('/register', async (req, res) => {
    const user = await User({
        fullName: 'John Doe',
        email: 'john@gmail.com',
        password: 'password',
        phoneNumber: '0742777766'
    });
    res.json(user);
});

app.get('/', (req,res) => {
    res.send('Initial message');
});

app.listen(8000, () => console.log("server is up and running"));
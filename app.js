const express = require('express');
require('dotenv').config();

require('./models/db');
const User = require('./models/user')
const app = express();

app.post('/register', async (req, res) => {
    const isNewUser = await User.isThisEmailUnique('john@gmail.com');
    if(!isNewUser) return res.json({suces:false, message: 'This email is already in use, try signing in'})
    const user = await User({
        fullName: 'John Doe',
        email: 'john@gmail.com',
        password: 'password',
        phoneNumber: '0742777766'
    });
    await user.save();
    res.json(user);
});

app.get('/', (req,res) => {
    res.send('Initial message');
});

app.listen(8000, () => console.log("server is up and running"));
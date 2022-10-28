const express = require('express');
require('dotenv').config();

require('./models/db');
const User = require('./models/user')
const app = express();
const userRouter = require('./routes/user');

app.use((req, res, next) => {
    req.on('data', chunk => {
        const data = JSON.parse(chunk);
        req.body = data;
    });
    next();
});

app.use(express.json());
app.use(userRouter);

app.get('/test',(req,res) =>{
    res.send('Hello World!');
})

app.get('/', (req,res) => {
    res.send('Initial message');
});

app.listen(8000, () => console.log("server is up and running"));
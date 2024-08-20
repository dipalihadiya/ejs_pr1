const express = require('express');
const dotenv = require('dotenv')
const app = express();
const path = require('path');
const port = process.env.port || 3000;
const router = require("./routrs/index");


app.set ('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, '/views')));

app.use(express.static('path'));
app.use('/', router);


app.listen(port, (err) => {
    if(!err){
        console.log(`server is running on http://localhost:${port}`)
    }
})
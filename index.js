const express = require('express');

const port = 8000;

const app = express();

const db = require('./config/mongoose');

const passport = require('passport');

const LocalStrategy = require('./config/passport-local-strategy');

const jwtstrategy = require('./config/passport-jwt-order');


app.use(express.urlencoded());

app.use('/',require('./routes'));

app.listen(port,function(err){
    if (err) {

        console.log("server is not running");
    }
    console.log("server is running",port);
})
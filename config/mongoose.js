const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/order");

const db = mongoose.connection;

db.once('open', function(err) {

    if(err){
        console.log("db is not connections");
        return false;
    }
    console.log("db is connected");
})

module.exports = db;
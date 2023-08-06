const mongoose = require('mongoose');
const passport = require('passport');


const orderscheme = mongoose.Schema({

    email : {
        type: String,
        required: true,
    },
    password : {
        type: Number,
        required: true,
    },
    order_name : {
        type : String,
        required : true
    },
    price : { 
        type : Number,
        required : true
    },
    quantity : {
        type : Number,
        required : true
    },
    food_type : {

        type : String,
        required : true
    },
    total : {   
        type : Number, 
        required : true
    },
})

const order = mongoose.model('order',orderscheme);

module.exports = order;

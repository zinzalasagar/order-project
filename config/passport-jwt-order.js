const passport = require('passport');

const jwtstrategy = require('passport-jwt').Strategy;

const jwtExtract = require('passport-jwt').ExtractJwt;

const order = require('../models/order');

var opt = {
    jwtFromRequest : jwtExtract.fromAuthHeaderAsBearerToken(),
    secretOrKey : ' order'
}

passport.use(new jwtstrategy(opt,function(jwtPayload,done){

    order.findById(jwtPayload._id,function(err,users){
        if(err){
            console.log("jwt not found");
            return false;
        }
        if(users){
            return done(null,users);
        }
        else{
            return done(null,false);
        }
    })
}))

module.exports = passport;
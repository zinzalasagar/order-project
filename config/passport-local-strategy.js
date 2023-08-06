const passport = require('passport');

const order = require('../models/order');

const LocalStrategy = require('passport-local').Strategy;


passport.use(new LocalStrategy({
    usernameField : "email"
}, function(email,password,done){
    order.findOne({email : email}, function(err,user){
        if(err){
            console.log("email not match");
            return done(null,false);
        }

        if(user.password != password || !user){
            console.log("password not match");
            return done(null,false);
        }
        return done(null,user);
    })
}))

passport.serializeUser(function(user,done){
    return done(null,user.id);
})

passport.deserializeUser(function(id,done){
    order.findById(id,function(err,user){
        if(err){
            console.log("not found record");
            return done(null,false);
        }
        return done(null,user);
    })
});

passport.checkAuthentication = function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('back');
}


passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated()){
        res.locals.user = req.user
    }
    return next();
}

module.exports = passport;
const passport = require("passport");
const LocalStrategy= require('passport-local');
const User = require('./models/users');

passport.serializeUser(()=>{
    done(null,user.id);
})

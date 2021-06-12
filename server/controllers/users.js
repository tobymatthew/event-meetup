const { email } = require("vuelidate/lib/validators");
const User = require("../models/users");

const passport= require("passport")

exports.getUsers = function(req, res) {
  User.find({}).exec((errors, users) => {
    if (errors) {
      return res.status(422).send({ errors });
    }

    return res.json(users);
  });
};

exports.register = (req, res) => {
  const registerData = req.body;

  if (!registerData.email) {
    return res.status(422).json({
      error: {
        Email: "is required",
      },
    });
  }

  if (!registerData.password) {
    return res.status(422).json({
      error: {
        password: "is required",
      },
    });
  }

  if (registerData.password !== registerData.passwordConfirmation) {
    return res.status(422).json({
      error: {
        passwordConfirmation: "is required",
      },
    });
  }


  const user = new User(registerData);

  return user.save((error, savedUser) => {
    if (error) {
      return res.status(422).json({ error });
    }

    res.json(savedUser);
  });
};

exports.login= (req,res)=>{
 const {email, password} = req.body;

  if (!email) {
    return res.status(422).json({
      error: {
        Email: "is required",
      },
    });
  }

  if (!password) {
    return res.status(422).json({
      error: {
        password: "is required",
      },
    });
  }

  return passport.authenticate('local', (err,passportUser)=>{
    if(err){
      next(err)
    
    }

    if (passportUser) {
      req.login(passportUser, function (err) {
        if (err) { next(err); }

        return res.json(passportUser)
      });
    }
    else{
      return res.status(422).send({errors:{
       'authentication':  "oops something went wrong"
      }})
    }

  })(req,res,next)
}

exports.logout = function (req, res) {
  req.logout()
  return res.json({status: 'Session destroyed!'})
}
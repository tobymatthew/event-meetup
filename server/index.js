const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/dev');

const session= require('express-session');
const passport = require('passport');
const MongoDBStore= require('connect-mongodb-session')(session);

const store= new MongoDBStore({
  uri: config.DB_URI,
  collection:"meetuperSessions"
})

store.on('error',(err)=>{
  console.log(err)})

require("./models/meetups");
require("./models/users");
require("./models/threads");
require("./models/posts");
require("./models/categories");

const meetupsRoutes = require('./routes/meetups'),
      usersRoutes = require('./routes/users'),
      threadsRoutes = require('./routes/threads'),
      postsRoutes = require('./routes/posts'),
      categoriesRoutes = require('./routes/categories');

const { SESSION_SECRET } = require('./config/dev');
const { Cookie } = require('express-session');

mongoose.connect(config.DB_URI, { useNewUrlParser: true })
  .then(() => console.log('DB Connected!'))
  .catch(err => console.log(err));

const app = express();

app.use(bodyParser.json());

app.use(session({
   secret:SESSION_SECRET,
    Cookie:{maxAge:3600000},
     resave:false,
     saveUninitialized:false,
     store
   
}))

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/v1/meetups', meetupsRoutes);
app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/posts', postsRoutes);
app.use('/api/v1/threads', threadsRoutes);
app.use('/api/v1/categories', categoriesRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT , function() {
  console.log('App is running on port: ' + PORT);
});

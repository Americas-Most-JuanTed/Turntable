var express = require('express');
var app = express();
var ejs = require('ejs');
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var SC = require('node-soundcloud');
var ejsLayouts = require('ejs-layouts');

var port = process.env.PORT || 3000;

var apiRoutes = null;
var configAuth = require('./config/auth.js');


mongoose.connect('mongodb://localhost/turntable', function (err){
  if (err) throw err;
  console.log('Connecetd to Mongodb');
})

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')))



SC.init({
  id: configAuth.soundcloudAuth.id,
  secret : configAuth.soundcloudAuth.secret,
  uri : configAuth.soundcloudAuth.uri,
  accessToken : configAuth.soundcloudAuth.accessToken
})


app.get('/', function(req, res){
  console.log('getting index');
  res.render('index');
})

//app.use('/api', apiRoutes);

app.listen(port, function(){
  console.log("Server listening on port", port);
})

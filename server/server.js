#!/usr/bin/env node

var debug = require('debug')('passport-mongo'),
    app = require('./app');


app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  console.log('listening on', app.get('port'));
  debug('Express server listening on port ' + server.address().port);
});
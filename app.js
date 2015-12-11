'use strict';
var
  config = require('./specifications/config.json'),
  app = require('express')(),
  knex = require('knex')(config.database),
  join = require('./application/sessions/join.js'),
  parser = require('body-parser');

app.use(parser.json());

app.get('/', function (req, res, next) {
  res.send();
  return next();
});
app.post('/api/join', join.handle);

app.listen(3000, function () {
  console.log('Server running ...');
});

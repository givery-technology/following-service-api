'use strict';

var
  config = require(__dirname + '/../../specifications/config.json'),
  knex = require('knex')(config.database);

function validateEmail (email) {
  var reg = /\S+@\S+\.\S+/;
  return reg.test(email);
}

function handler (req, res, next) {
  var data = req.body;

  if (!(data.username && data.email && data.password)) {
    res.send({
      'email': data.email,
      'succeed': false,
    });
    return next();
  }
  if (!validateEmail(data.email)) {
    res.send({
      'email': data.email,
      'succeed': false,
    });
    return next();
  }
  knex('users').insert({
    username: data.username,
    email: data.email,
    password: data.password,
  }).then(function (id) {
    res.send({
      succeed: true,
      id: id[0],
      email: data.email,
    });
    return next();
  }).catch(function (error) {
    res.send({
      succeed: false,
      email: data.email,
    });
    return next();
  });
}

module.exports = {
  handle: handler,
}

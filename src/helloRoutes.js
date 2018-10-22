'use strict';

const helloController = require('./helloController');

module.exports = function(app) {
  app.get('/hello', helloController.getAll);
};
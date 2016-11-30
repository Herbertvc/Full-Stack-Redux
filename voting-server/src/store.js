var createStore = require('redux').createStore;
var applyMiddleware = require('redux').applyMiddleware;
var createLogger = require('redux-node-logger');
var reducer = require('./reducer');

var logger = createLogger();

module.exports = function makeStore() {
  return createStore(reducer, applyMiddleware(logger));
}

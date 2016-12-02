var remoteActionMiddleware = require('./middlewares/remoteActionMiddleware');
var socket = require('socket.io-client')('http://192.168.12.41:8090');

var createStore = require('redux').createStore;
var applyMiddleware = require('redux').applyMiddleware;

var createLogger = require('redux-logger');
var logger = createLogger();

var reducer = require('./rootReducer');

var votes = require('./votes/index');

module.exports = (function () {
  var store = createStore(
    reducer,
    applyMiddleware(logger, remoteActionMiddleware(socket))
  );

  store.dispatch(votes.actions.next());

  socket.on('state', function(state) {
    store.dispatch(votes.actions.setState(state));
  });
}());

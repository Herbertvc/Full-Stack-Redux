var remoteActionMiddleware = require('./middlewares/remoteActionMiddleware');
var socket = require('socket.io-client')('http://192.168.10.10:8090');

var createStore = require('redux').createStore;
var applyMiddleware = require('redux').applyMiddleware;

var createLogger = require('redux-logger');
var logger = createLogger();

var reducer = require('./rootReducer');

var rootActions = require('./rootActions');

var store = createStore(
  reducer,
  applyMiddleware(logger, remoteActionMiddleware(socket))
);

module.exports = (function () {
  socket.on('state', function(state) {
    store.dispatch(rootActions.setState(state));
  });

  store.dispatch(rootActions.next());

  return store;
}());

var remoteActionMiddleware = require('./middlewares/remoteActionMiddleware');
var socket = require('socket.io-client')('http://192.168.12.41:8090');

var createStore = require('redux').createStore;
var applyMiddleware = require('redux').applyMiddleware;

var createLogger = require('redux-logger');
var logger = createLogger();

var reducer = require('./rootReducer');

module.exports = (function () {
  var createStoreWithMiddleware = applyMiddleware(
    logger,
    remoteActionMiddleware(socket)
  )(createStore);

  var store = createStoreWithMiddleware(reducer);

  store.dispatch({
    'meta': {'remote': true},
    'type': 'NEXT',
  });

  socket.on('state', function(state) {
    store.dispatch({
      'state': state,
      'type': 'SET_STATE',
    });
  });
}());

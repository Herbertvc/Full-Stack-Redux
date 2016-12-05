 var socket = require('socket.io-client')('http://192.168.10.10:8090');

var createStore = require('redux').createStore;
var applyMiddleware = require('redux').applyMiddleware;
var remoteActionMiddleware = require('./middlewares/remoteActionMiddleware');
var createLogger = require('redux-logger');
var logger = createLogger();

var root = require('./root/index');
var vote = require('./vote/index');

var renderResults = require('./libs/renderResults');
var renderVote = require('./libs/renderVote');

var store = createStore(
  root.reducer,
  applyMiddleware(logger, remoteActionMiddleware(socket))
);

var currentState = store.getState();

store.subscribe(function () {
  var previousState = currentState;
  currentState = store.getState();

  previousTally = vote.selectors.getTally(previousState);
  currentTally = vote.selectors.getTally(currentState);

  if (previousTally !== currentTally) {
    renderResults(currentState);
  }

  previousPair = vote.selectors.getPair(previousState);
  currentPair = vote.selectors.getPair(currentState);

  if (previousPair !== currentPair) {
    renderVote(currentState);
  }
});

var listen = function listen() {
  socket.on('state', function(state) {
    store.dispatch(root.actions.setState(state));
  });
}

module.exports = {
  listen: listen,
  store: store,
};

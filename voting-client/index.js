var express = require('express');
var expressNunjucks = require('express-nunjucks');
var bodyParser = require('body-parser');
var setState = require('./src/action_creators').setState;
var vote = require('./src/action_creators').vote;
var remoteActionMiddleware = require('./src/remote_action_middleware');
var socket = require('socket.io-client')('http://localhost:8090');

var createStore = require('redux').createStore;
var applyMiddleware = require('redux').applyMiddleware;
var createLogger = require('redux-node-logger');
var logger = createLogger();
var reducer = require('./src/reducer');

var createStoreWithMiddleware = applyMiddleware(
  remoteActionMiddleware(socket)
)(createStore);

var store = createStoreWithMiddleware(reducer);

store.dispatch({
    'meta': {'remote': true},
    'type': 'NEXT',
  });

var app = express();
app.set('views', __dirname + '/dist');
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use(bodyParser.json());

var njk = expressNunjucks(app, {
    watch: true,
    noCache: true
});

socket.on('state', function(state) {
    store.dispatch(setState(state));
  }
);

app.get('/', function(req, res) {
  // Show the entries.
  res.render('index', {"entries": store.getState().vote.pair});
})

app.post('/vote', function(req, res) {
  // Execute the vote for the entry selected;
  var option = req.body.option;
  store.dispatch(vote(option));
  res.send('Render comments');
})

app.listen(4000, function() {
  console.log('Server up and ready');
})
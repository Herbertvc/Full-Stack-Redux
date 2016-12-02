var makeStore = require('./src/store');
var startServer = require('./src/server');

var store = makeStore();
startServer(store);

store.dispatch({
  type: 'votes/SET_ENTRIES',
  entries: require('./entries.json'),
});

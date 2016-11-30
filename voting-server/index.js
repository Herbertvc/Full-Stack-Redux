var makeStore = require('./src/store');
var startServer = require('./src/server');

var store = makeStore();
startServer(store);

store.dispatch({
  type: 'SET_ENTRIES',
  entries: require('./entries.json')
});

store.dispatch({type: 'NEXT'});

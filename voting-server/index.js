var makeStore = require('./src/store');
var startServer = require('./src/server');
var entries = require('./src/entries/index');

var store = makeStore();
startServer(store);

store.dispatch(entries.actions.set(require('./entries.json')));

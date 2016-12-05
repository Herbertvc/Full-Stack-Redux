var makeStore = require('./src/store');
var startServer = require('./src/server');
var entries = require('./src/entries/index');
var rootActions = require('./src/rootActions');

var store = makeStore();
startServer(store);

store.dispatch(entries.actions.set(require('./entries.json')));
store.dispatch(rootActions.next());
store.dispatch({
  type: 'vote/VOTE',
  entry: 'Trainspotting',
});

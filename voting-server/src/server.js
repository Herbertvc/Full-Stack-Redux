var Server = require('socket.io');

module.exports = function startServer(store) {
  var io = new Server().attach(8090);

  store.subscribe(function() {
    var clientState = Object.assign({}, store.getState());
    delete clientState.entries;

    return io.emit('state', clientState);
  });

  io.on('connection', function(socket) {
    var clientState = Object.assign({}, store.getState());
    delete clientState.entries;

    socket.emit('state', clientState);
    socket.on('action', store.dispatch.bind(store));
  });
}

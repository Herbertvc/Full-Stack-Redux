var Server = require('socket.io');

module.exports = function startServer(store) {
  var io = new Server().attach(8090);

  store.subscribe(function() {
    return io.emit('state', store.getState());
  });

  io.on('connection', function(socket) {
    socket.emit('state', store.getState().toJS());
    socket.on('action', store.dispatch.bind(store));
  });
}

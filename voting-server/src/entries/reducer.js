var t = require('./actionTypes');

var initialState = [];

function set(entries) {
  return Array.prototype.slice.call(entries);
}

module.exports = function (state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }

  switch (action.type) {
    case t.SET:
      return set(action.entries);
  }

  return state;
}

var jquery = require('jquery');
var store = require('../bootstrap').store;
var root = require('../root/index');

module.exports = (function (handleVote) {
  handleVote(jquery, window, document);
} (function ($, w, d) {
  $(function () {
    var $resultsMount = $('.js-results-mount');

    $resultsMount.on('click', '.js-next-button', function () {
      console.log('test');
      store.dispatch(root.actions.next());
    });
  });
}));
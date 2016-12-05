var jquery = require('jquery');
var store = require('../bootstrap').store;
var vote = require('../vote/index');

module.exports = (function (handleVote) {
  handleVote(jquery, window, document);
} (function ($, w, d) {
  $(function () {
    var $votesMount = $('.js-votes-mount');

    if ($votesMount) {
      $votesMount.on('click', '.js-voting-button', function () {
        var entry = $(this).data('entry');
        store.dispatch(vote.actions.vote(entry));
      });
    }
  });
}));
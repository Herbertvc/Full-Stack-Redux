var jquery = require('jquery');
var store = require('../bootstrap');
var vote = require('../vote/index');
var rootActions = require('../rootActions');

module.exports = (function (handleVote) {
  handleVote(jquery, window, document);
} (function ($, w, d) {
  $(function () {
    var $votingButton = $('.js-voting-button');

    $votingButton.on('click', function () {
      store.dispatch(rootActions.next());
    });
  });
}));
var jquery = require('jquery');
var renderResults = require('./renderResults');
var renderVote = require('./renderVote');

module.exports = (function (renderApp) {
  renderApp(jquery, window, document);
} (function ($, w, d) {
  $(function () {
    renderVote();
    renderResults();
  });
}));

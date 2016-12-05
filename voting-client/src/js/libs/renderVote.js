var jquery = require('jquery');

module.exports = function renderVote(state) {
  if (state.vote) {
    var render = '';
    votedEntry = state.hasVoted;

    var disabled = votedEntry
      ? 'disabled'
      : '';

    state.vote.pair.map(function (entry) {
      render += (
        '<button class="js-voting-button" data-entry="' + entry + '" ' + disabled + '>' +
          entry +
        '</button>'
      );
    });

    if (votedEntry) {
      render += (
        '<p>' +
          'YOU ALREADY VOTED FOR ' + votedEntry +
        '</p>'
      );
    }

    $mountPoint = jquery('.js-votes-mount');

    if ($mountPoint.length) {
      $mountPoint.empty();
      $mountPoint.append(render);
    }
  }
}

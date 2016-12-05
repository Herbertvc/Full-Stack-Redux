var jquery = require('jquery');

function getVotes(voteState, entry) {
  if (voteState.tally && voteState.tally.hasOwnProperty(entry)) {
    return voteState.tally[entry];
  }

  return 0;
}

module.exports = function renderResults(state) {
  var render = '';

  if (state.winner) {
    render = (
      '<h2>' +
        'AND THE WINNER IS...' +
      '</h2>' +
      '<p>' +
        state.winner +
      '</p>'
    );
  } else if (state.vote) {
    state.vote.pair.map(function (entry) {
      render += (
        '<p>' +
          entry + ': ' + getVotes(state.vote, entry) +
        '</p>'
      );
    });

    render += (
      '<button class="js-next-button">' +
        'NEXT' +
      '</button>'
    );
  } else {
    render = (
      '<h2>' +
        'A VOTE IS NOT IN PROGRESS :(' +
      '</h2>'
    );
  }

  $mountPoint = jquery('.js-results-mount');

  if ($mountPoint.length) {
    $mountPoint.empty();
    $mountPoint.append(render);
  }
}

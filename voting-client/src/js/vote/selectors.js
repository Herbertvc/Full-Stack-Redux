var getTally = function getTally(state) {
  if (!state.vote) {
    return null;
  }

  return state.vote.tally;
}

var getPair = function getPair(state) {
  if (!state.vote) {
    return null;
  }

  return state.vote.pair;
}

module.exports = {
  getTally: getTally,
  getPair: getPair,
};
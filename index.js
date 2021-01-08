
const sum = function(fromN, toN) {
  // Sum all the values from fromN up to toN
  let total = 0;
  if (fromN < toN) {
    total = sum(fromN + 1, toN);
  }
  return total + fromN;
};

module.exports = sum;

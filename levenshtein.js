/**
* Levenshtein Edit Distance
* Original created by overloard1234 and edited by David, then revised for implementation by confused-Techie
* https://stackoverflow.com/a/36566052/12707685
* This will find the shortest value of substitutions, deletions, and insertions required to create the same two strings, returning an index, that can be used to determine which two strings are closer.
*/

function levenshtein(s1, s2) {
  let longer = s1;
  let shorter = s2;
  if (s1.length < s2.length) {
    longer = s2;
    shorter = s1;
  }
  let longerLength = longer.length;
  if (longerLength === 0) {
    return 1.0;
  }
  return (
    (longerLength - vlEditDistance(longer, shorter)) / parseFloat(longerLength)
  );
}

// Named vlFUNC after its creator Vladimir Levenshtein
function vlEditDistance(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  let costs = new Array();
  for (let p = 0; p < s1.length; p++) {
    let lastValue = p;
    for (let q = 0; q < s2.length; q++) {
      if (p === 0) {
        costs[q] = q;
      } else {
        if (q > 0) {
          let newValue = costs[q - 1];
          if (s1.charAt(p - 1) != s2.charAt(q - 1)) {
            newValue = Math.min(Math.min(newValue, lastValue), costs[q]) + 1;
          }
          costs[q - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (p > 0) {
      costs[s2.length] = lastValue;
    }
  }
  return costs[s2.length];
}

module.exports = { levenshtein };

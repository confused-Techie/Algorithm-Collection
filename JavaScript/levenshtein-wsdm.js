/**
* This is largely based on Levenshteins Edit Distance
* But has been slightly modified by @confused-Techie
* This modifications creates what can be verbosly reffered to as Levenshein Distance w/ Word Seperators - Double Mean
* Not only does it calculate the Levenshtein Edit Distance, and per word character of the source strings, it additionally will then get the mean
* per word, and per sentence to return back as a still similar scoring index as levenshteins original function.
*/

function levenshteinWSDM(s1, s2) {
  // Since I still want to have the max score be 1.0, this will normalize results,
  // by dividing the added results by the amount of results, otherwise getting the arithmetic mean.

  // One thing to note that is done purposefully, The base levenshteinWS doesn't support modifications to
  // the words themselves, and checks the values of the words in the order they appear both in the search,
  // and searched strings.

  // First create an array of the characters, after substituting all word seperators for a single word sep.
  let c = s1;
  s1 = s1.replace(" ", "-").replace("_", "-"); // word characters
  s2 = s2.replace(" ", "-").replace("_", "-"); // word characters
  let s1A = s1.split("-");
  let s2A = s2.split("-");

  let means = new Array();
  for (let i = 0; i < s1A.length; i++) {
    let costs = new Array();
    for (let u = 0; u < s2A.length; u++) {
      costs[u] = vlSimilairty(s1A[i], s2A[u]);
    }
    means[i] =
      costs.reduce((a, b) => (isNaN(a) ? (isNaN(b) ? 0 : b) : a + b), 0) /
      costs.length;
  }
  // then to calculate the mean of all means.
  return means.reduce((a, b) => a + b, 0) / means.length;
}

// This is an unmodified implementation of Levenshteins original Edit Distance Formula
// ===================================================================================
function vlSimilairty(s1, s2) {
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

module.exports = { levenshteinWSDM };

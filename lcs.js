/**
* Longest Common Subsequence
* This will do its best to find the longest common subsequence between two sequences.
* Completely implemented by @confused-Techie in JavaScript based on the formula.
*
* This does take one liberty from the actual equation, and instead of returning the actual longest common subsequence
* It will instead return a float of similarity between the two. This could be useful for performing searches on multiple strings, to find the best
* similarity between the two.
*/

function lcs(s1, s2) {
  let height = s1.length + 1;
  let width = s2.length + 1;
  let matrix = Array(height)
    .fill(0)
    .map(() => Array(width).fill(0));

  for (let row = 1; row < height; row++) {
    for (let col = 1; col < width; col++) {
      if (s1[row - 1] == s2[col - 1]) {
        matrix[row][col] = matrix[row - 1][col - 1] + 1;
      } else {
        matrix[row][col] = Math.max(matrix[row][col - 1], matrix[row - 1][col]);
      }
    }
  }

  let longest = lcsTraceBack(matrix, s1, s2, height, width);
  // Now longest is a literal string of the longest common subsequence.
  // This is now where the implementation differs from the alrogithm,
  // We will make a float of how close the longest sequence is to the searched sequence
  return longest.length / s1.length;
}

function lcsTraceBack(matrix, s1, s2, height, width) {
  if (height === 0 || width === 0) {
    return "";
  }
  if (s1[height - 1] == s2[width - 1]) {
    return (
      lcsTraceBack(matrix, s1, s2, height - 1, width - 1) +
      (s1[height - 1] ? s1[height - 1] : "")
    );
  }
  if (matrix[height][width - 1] > matrix[height - 1][width]) {
    return lcsTraceBack(matrix, s1, s2, height, width - 1);
  }
  return lcsTraceBack(matrix, s1, s2, height - 1, width);
}

module.exports = { lcs };

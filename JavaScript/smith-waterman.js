/**
* @function SmithWaterman
* @desc This is current a non-complete implementation.
* But this implementation has been created directly from the base algorithm and
* implemented in JavaScript by confused-Techie. The alrogithm finds the optimal
* local alignment with respect to the scoring system used.
* @author confused-Techie <dev@lhbasics.com>
* @copyright confused-Techie 2022
* @license MIT
* @see {@link https://en.wikipedia.org/wiki/Smith%E2%80%93Waterman_algorithm|Wikipedia}
*/

function SmithWaterman(s1, s2) {
	let height = s1.length +1;
  let width = s2.length +1;
  let gapPenalty = -1; // if I truly want to use a linear gap penalty score, and not static,
  // this will need to check the scores of every single gap, within the direction.

  // then create a 2d array, filled with zeros, based on width & height
  let scoringMatrix = Array(height).fill(0).map(() => Array(width).fill(0));

  for (let row = 1; row < height; row++) {
  	for (let col = 1; col < width; col++) {
    	let similarityScore = SmithWatermanSimilarity(s1[row -1], s2[col -1]);

      let alignedScore = scoringMatrix[row-1][col-1] + similarityScore;

      // We can be basic here and use a linear gap penalty.
      let s1GapLength = scoringMatrix[row-1][col] - gapPenalty;
      let s2GapLength = scoringMatrix[row][col-1] - gapPenalty;
      console.log(`S1: ${s1[row]} S2: ${s2[col]}; SS: ${similarityScore}; AL: ${alignedScore}; S1GL: ${s1GapLength}; S2GL: ${s2GapLength}`);

      // now the scoring matrix for this position, is the best score from the above
      scoringMatrix[row][col] = Math.max(alignedScore, s1GapLength, s2GapLength);

      // This does not yet, actually traceback the score. But after getting this far, I realized this was not
      // suitable for the functionality I wanted.
    }
  }
  return scoringMatrix;
}

function SmithWatermanSimilarity(s1, s2) {
	// This similarity score is very VERY basic. Determining if the characters match or not.
  if (s1 == s2) {
  	return 1;
  } else {
  	return 0;
  }
}

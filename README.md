# Algorithm Collection

This is a simple collection of algorithms, written in as many languages as possible, for use in different software projects.

This collection has been contributed by the community, written myself from the base algorithm, borrowed, modified, or improved from other sources.

It exists to help other programmers implement these algorithms into their own code, learn or do whatever they need to with them.

It's goal is to make utilizing these algorithms as simply as possible.

## Contributing:

When contributing feel free to add your algorithm to the read me if not already present, otherwise add it under the 'Uses' section.

Otherwise after writing the code for the algorithm source, ensure to add some JSDoc syntax comments at the start of the file. Indicating the license, and creator. This license is then to be respected in any further use of your contribution.

The [`MIT`](https://choosealicense.com/licenses/mit/#suggest-this-license) license may be a good choice for these snippets, as its a short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.

For an example of the JSDoc Syntax that may be best to use, feel free to use the first algorithm added to this project [JavaScript - Longest Common Subsequence](/JavaScript/longest-common-subsequence.js) as an example.

## Collection of Algorithms

### Levenshtein Distance:

The <b>[Levenshtein Distance](https://en.wikipedia.org/wiki/Levenshtein_distance)</b> is a string metric for measuring the difference between two sequences. Named after Vladimir Levenshtein, who considered this distance in 1965.

![Levenshtein Distance Formula](https://wikimedia.org/api/rest_v1/media/math/render/svg/6224efffbe9a4e01afbddeeb900bfd1b3350b335)

###### Uses:
* Spell Checkers
* Correction for optical character recognition
* Natural-language translation based on translation memory.

###### Code:
* [JavaScript](/JavaScript/levenshtein-distance.js)

### Longest Common Subsequence:

The <b>[Longest Common Subsequence (LCS) problem](https://en.wikipedia.org/wiki/Longest_common_subsequence_problem)</b> is the problem of finding the longest subsequence common to all sequences in a set of sequences (often just two sequences).

![Longest Common Subsequence Formula](https://wikimedia.org/api/rest_v1/media/math/render/svg/feb8e3bedc5867dd897fed772931631f768f7d7e)

###### Uses:
* Linux diff utility
* Git revision control system

###### Code:
* [JavaScript](/JavaScript/longest-common-subsequence.js)

### Smith-Waterman:

The <b>[Smith-Waterman Algorithm](https://en.wikipedia.org/wiki/Smith%E2%80%93Waterman_algorithm)</b> performs local sequence alignment, for determining similar regions between two strings.

![Smith-Waterman Algorithm Animated Example](https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Smith-Waterman-Algorithm-Example-En.gif/220px-Smith-Waterman-Algorithm-Example-En.gif)

###### Uses:
* Determining similar regions between two sequences of nucleic acid sequences.
* Determining similar regions between two sequences of protein sequences.

###### Code:
* [JavaScript](/JavaScript/smith-waterman.js) - NOTICE: Incomplete Implementation

### Levenshtein Distance w/ Word Seperators - Double Mean:

TODO:

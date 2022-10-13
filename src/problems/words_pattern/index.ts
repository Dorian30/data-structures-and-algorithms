/* Words pattern
 *
 * Given a list of words and a word, return the list of words that has similar patterns as given word.
 * Ex: Words=[aabbcc, aakkff, akkffkk, tjjiijj, deftg]. word="mnnssnn". Output=[akkffkk, tjjiijj]
 *
 * Pattern: Frenquency counter
 *
 * Time complexity: O(N^2)
 * Space complexity: O(N)
 *
 */

function pattern(word: string) {
  // Create a letters dictionary
  const letters: Record<string, number> = {};

  // Create a letters counter.
  let counter = 0;

  // Create a pattern string variable.
  let pattern = '';

  // Traverse the string (word)
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    // Check if the current letter exists.
    if (!letters[letter]) {
      letters[letter] = ++counter;
    }

    pattern += letters[letter];
  }

  // Returns the pattern
  return pattern;
}

export function similarWords(words: Array<string>, word: string) {
  // if the array has no length return an empty array
  if (words.length === 0) return [];

  // Create a similar words list variable
  const list: Array<string> = [];

  // Get the given word pattern
  const wordPattern = pattern(word);

  // Traverse the array of words
  for (let i = 0; i < words.length; i++) {
    // If the current words does not have the same length, skip the iteration.
    if (words[i].length !== word.length) continue;

    // Get the current index word pattern.
    const tempPattern = pattern(words[i]);

    // Compare the current word pattern with the given one.
    // If both patterns are equal, add the current word to the list.
    if (tempPattern === wordPattern) {
      list.push(words[i]);
    }
  }

  return list;
}

/* Same elements
 *
 * Write a function called Same, which accepts two arrays.
 * The function should return true if every value in the array
 * has it's corresponding value squared in the second array.
 * The frequency of values must be the same.
 *
 * Examples:
 *
 * same([2, 1, 4], [1, 16, 4]) // true
 * same([1, 2, 3], [1, 9]) // false
 * same([1, 2, 1], [4, 4, 1]) // false (must be same frequency)
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

interface IFrequency {
  [key: number]: number;
}

export function same(arr1: Array<number>, arr2: Array<number>): boolean {
  // Different frequency
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Square items in first array and determine their frequency
  const freq1: IFrequency = {};
  for (let i = 0; i < arr1.length; i++) {
    const item = Math.pow(arr1[i], 2);
    freq1[item] = (freq1[item] || 0) + 1;
  }

  // Determine items frenquency in second arr
  const freq2: IFrequency = {};
  for (let i = 0; i < arr2.length; i++) {
    const item = arr2[i];
    freq2[item] = (freq2[item] || 0) + 1;
  }

  // See if they both have the same frequency
  for (let key in freq1) {
    if (freq1[key] !== freq2[key]) {
      return false;
    }
  }

  return true;
}

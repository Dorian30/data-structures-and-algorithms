/* Count Unique Values
 *
 * Implement a function called unique values,
 * which accepts a sorted array, and counts the unique values
 * in the array. There can be negative numbers in the array,
 * but it will always be sorted.
 *
 * NOTE: You could use a frequency counter obj to check how
 * many values you have, but in this case we are goin to use a
 * diff approach. Here we'll use multiple pointers.
 *
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

export function countUniqueValues(arr: Array<number>): number {
  if (arr.length === 0) {
    return 0;
  }

  // Create a counter variable
  let counter = 1;

  // Set the first pointer to the first position.
  let firstPointer = arr[0];

  // Iterate over the array. We start at the second position
  for (let i = 1; i < arr.length; i++) {
    // Set the second pointer to the current index.
    let secondPointer = arr[i];
    // If second pointer is different than the first,
    // increase the counter and set the first pointer to the current index
    if (firstPointer !== secondPointer) {
      counter++;
      firstPointer = secondPointer;
    }
  }

  return counter;
}

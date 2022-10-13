/* Max subarray sum
 *
 * Write a function called maxSubarraySum which accepts
 * an array of integers and a number called n. The function
 * should calculate the maximum sum of n consecutive elements
 * in the array.
 *
 * Time complexity: O(n)
 * Pattern: Sliding window.
 *
 * Example: [1, 2, 5, 2, 8, 1, 5], 2)
 * Result: 10
 */

export function maxSubarraySum(array: Array<number>, n: number) {
  // If the array is empty
  if (array.length === 0 || n === 0) return 0;
  // Declare sum variable
  let maxSum = 0;

  // Traverse the array and add the first n elements (Starts at 0 all the way until n)
  for (let i = 0; i < n; i++) {
    maxSum += array[i] || 0;
  }

  // If the array length is less or equal than n, return the sum of all the elements.
  if (array.length <= n) return maxSum;

  // Set sliding window.
  let tempSum = maxSum;

  // Traverse the array. Starts at: 1. All the way until: array.length - 1 - n
  for (let i = 1; i <= array.length - n; i++) {
    // Set prev and next items;
    const prevItem = array[i - 1];
    const nextItem = array[i + n - 1];

    // Declare temp sum variable.
    tempSum = tempSum - prevItem + nextItem;

    // If tempSum is higher that our current max sum, then set max sum to temp sum
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }

  // returns the sum
  return maxSum;
}

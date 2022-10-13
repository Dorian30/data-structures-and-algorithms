import { maxSubarraySum } from '../../subarray_sum';

test('maxSubarraySum', () => {
  expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)).toBe(10);
  expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)).toBe(17);
  expect(maxSubarraySum([4, 2, 1, 6, 2], 4));
  expect(maxSubarraySum([], 4)).toBe(0);
  expect(maxSubarraySum([2, 3], 4)).toBe(5);
  expect(maxSubarraySum([8, 2, 5, 10], 1)).toBe(10);
});

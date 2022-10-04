import { countUniqueValues } from '../../unique_values';

test('count unique values', () => {
  expect(countUniqueValues([1, 1, 4, 6, 7, 7, 7, 7, 10])).toBe(5);
  expect(countUniqueValues([1, 2])).toBe(2);
  expect(countUniqueValues([-3, -2, 0])).toBe(3);
  expect(countUniqueValues([-2, -1, -1, 0, 0, 1, 2])).toBe(5);
  expect(countUniqueValues([1])).toBe(1);
  expect(countUniqueValues([])).toBe(0);
});

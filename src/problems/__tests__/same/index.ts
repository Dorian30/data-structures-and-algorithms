import { same } from '../../same';

test('same', () => {
  expect(same([2, 1, 4], [1, 16, 4])).toBe(true);
  expect(same([1, 2, 3], [1, 9])).toBe(false);
  expect(same([1, 2, 1], [4, 4, 1])).toBe(false);

  expect(same([1, 2, 3], [])).toBe(false);
  expect(same([1, 2, -3], [1, 4, 9])).toBe(true);
});

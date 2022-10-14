// Time complexity: O(logN)

export function search(array: Array<number>, elem: number): boolean {
  // Create lo pointer
  let lo = 0;

  // Create hi pointer
  let hi = array.length - 1;

  // Loop until you find the element or until hi < lo (it is not in the array)
  do {
    // Find the middle point (hi - lo / 2)
    const m = Math.floor(lo + (hi - lo) / 2);

    // If the the middle point is equal to the searched elem, return true.
    if (array[m] === elem) {
      return true;
    }

    // If the element is higher than the middle, it means it is in the right side
    if (elem > array[m]) {
      lo = m + 1;
    }

    // If the element is lower than the middle, it mean it is in the left side
    if (elem < array[m]) {
      hi = m;
    }
  } while (hi > lo);

  // Return false if not found
  return false;
}

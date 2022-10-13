// Time Complexity: O(N^2)

export function sort(arr: Array<number>): Array<number> {
  const newArr = [...arr];

  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr.length - 1 - i; j++) {
      if (newArr[j] > newArr[j + 1]) {
        const swap = newArr[j + 1];
        newArr[j + 1] = newArr[j];
        newArr[j] = swap;
      }
    }
  }

  return newArr;
}

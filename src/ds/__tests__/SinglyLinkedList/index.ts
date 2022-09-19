import { SinglyLinkedList } from '../../SinglyLinkedList';

let list: SinglyLinkedList<number>;

beforeEach(() => {
  list = new SinglyLinkedList();
  list.append(5);
  list.append(8);
  list.append(13);
  list.append(1);
});

describe('SinglyLinkedList', () => {
  it('returns the length of the list', () => {
    expect(list.length).toBe(4);
  });

  it('gets the item in a given index', () => {
    expect(list.get(0)).toBe(5);
    expect(list.get(1)).toBe(8);
    expect(list.get(2)).toBe(13);
  });

  it('returns undefined when trying to access an index outside of boundary', () => {
    expect(list.get(10)).toBe(undefined);
  });

  it('appends a given item to the list', () => {
    list.append(10);
    expect(list.length).toBe(5);
    expect(list.get(4)).toBe(10);
  });

  it('prepends a given item to the list', () => {
    list.preprend(8);
    expect(list.length).toBe(5);
    expect(list.get(0)).toBe(8);
  });

  it('inserts an element in a given index', () => {
    expect(list.insertAt(20, 2)).toBe(20);
    expect(list.get(2)).toBe(20);
    expect(list.length).toBe(5);
  });

  it('does not insert when given an index outside of boundary', () => {
    expect(list.insertAt(20, 15)).toBe(undefined);
    expect(list.get(15)).toBe(undefined);
    expect(list.length).toBe(4);
  });

  it('removes the given value if it exists', () => {
    expect(list.remove(13)).toBe(13);
    expect(list.get(2)).toBe(1);
    expect(list.length).toBe(3);
  });

  it('removes the item in a given index', () => {
    expect(list.removeAt(2)).toBe(13);
    expect(list.get(2)).toBe(1);
    expect(list.length).toBe(3);
  });

  it('does not remove when give an index outside of boundary', () => {
    expect(list.removeAt(20)).toBe(undefined);
    expect(list.length).toBe(4);
  });
});

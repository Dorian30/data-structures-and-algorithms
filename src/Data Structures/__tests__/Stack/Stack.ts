import { Stack } from '../../Stack';

let stack: Stack<number>;

beforeEach(() => {
  stack = new Stack();
});

describe('Stack', () => {
  it('returns the length', () => {
    expect(stack.length).toBe(0);
  });

  it('pushes values to the stack', () => {
    stack.push(5);
    stack.push(10);
    expect(stack.length).toBe(2);
  });

  it('returns the last value on peak', () => {
    stack.push(5);
    stack.push(10);
    expect(stack.peek()).toBe(10);
  });

  it('returns undefined on peak when there is no elements', () => {
    expect(stack.peek()).toBe(undefined);
  });

  it('pops the last value from the stack', () => {
    stack.push(5);
    stack.push(20);
    expect(stack.pop()).toBe(20);
    expect(stack.length).toBe(1);
    expect(stack.peek()).toBe(5);
  });
});

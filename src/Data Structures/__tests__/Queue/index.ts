import { Queue } from '../../Queue';

let queue: Queue<number>;

beforeEach(() => {
  queue = new Queue();
});

describe('Queue', () => {
  it('should have a length', () => {
    expect(queue.length).toBe(0);
  });

  it('should enqueue values', () => {
    queue.enqueue(2);
    queue.enqueue(5);
    expect(queue.length).toBe(2);
  });

  it("should return the head's value on peak", () => {
    queue.enqueue(4);
    queue.enqueue(1);
    queue.enqueue(10);
    expect(queue.peek()).toBe(4);
  });

  it('should return undefined on peak when there is no head', () => {
    expect(queue.peek()).toBe(undefined);
  });

  it("should return the head's value and deque the node", () => {
    queue.enqueue(4);
    queue.enqueue(1);
    queue.enqueue(10);
    expect(queue.deque()).toBe(4);
    expect(queue.length).toBe(2);
    expect(queue.peek()).toBe(1);
  });
});

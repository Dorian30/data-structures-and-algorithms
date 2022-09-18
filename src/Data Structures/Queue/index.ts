export interface INode<T> {
  value: T;
  next?: INode<T>;
}

/*
 * First in, First out
 */

export class Queue<T> {
  public length: number;
  private head?: INode<T>;
  private tail?: INode<T>;

  constructor() {
    this.length = 0;
    this.head = this.tail = undefined;
  }

  enqueue(value: T): void {
    const node: INode<T> = { value };
    this.length++;

    if (this.tail) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = this.tail = node;
    }
  }

  deque(): T | undefined {
    if (!this.head) return;

    this.length--;

    const value = this.head?.value;
    this.head = this.head.next;

    if (this.length === 0) {
      this.tail = undefined;
    }

    return value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}

export interface INode<T> {
  value: T;
  next?: INode<T>;
}

/*
 * First in, First out
 */

export class Queue<T> {
  private _length: number;
  private head?: INode<T>;
  private tail?: INode<T>;

  constructor() {
    this._length = 0;
    this.head = this.tail = undefined;
  }

  get length() {
    return this._length;
  }

  enqueue(value: T): void {
    const node: INode<T> = { value };
    this._length++;

    if (this.tail) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = this.tail = node;
    }
  }

  deque(): T | undefined {
    if (!this.head) return;

    this._length--;

    const value = this.head?.value;
    this.head = this.head.next;

    if (this._length === 0) {
      this.tail = undefined;
    }

    return value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}

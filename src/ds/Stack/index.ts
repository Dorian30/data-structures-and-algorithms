export interface INode<T> {
  value: T;
  prev?: INode<T>;
}

/*
 * First in, last out
 */

export class Stack<T> {
  private _length: number;
  private head?: INode<T>;

  constructor() {
    this._length = 0;
    this.head = undefined;
  }

  get length() {
    return this._length;
  }

  push(value: T): void {
    const node: INode<T> = { value };
    this._length++;

    if (this.head) {
      node.prev = this.head;
      this.head = node;
    } else {
      this.head = node;
    }
  }

  pop(): T | undefined {
    if (!this.head) return;

    this._length--;

    const head = this.head;
    this.head = this.head.prev;

    return head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}

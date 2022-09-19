export interface INode<T> {
  value: T;
  prev?: INode<T>;
}

/*
 * First in, last out
 */

export class Stack<T> {
  public length: number;
  private head?: INode<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
  }

  push(value: T): void {
    const node: INode<T> = { value };
    this.length++;

    if (this.head) {
      node.prev = this.head;
      this.head = node;
    } else {
      this.head = node;
    }
  }

  pop(): T | undefined {
    if (!this.head) return;

    this.length--;

    const head = this.head;
    this.head = this.head.prev;

    return head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}

export interface INode<T> {
  value: T;
  next?: INode<T>;
}

export class SinglyLinkedList<T> {
  private _length: number;
  private head?: INode<T>;
  private tail?: INode<T>;

  constructor() {
    this._length = 0;
  }

  get length() {
    return this._length;
  }

  append(value: T): void {
    const node: INode<T> = { value };
    this._length++;

    if (this.tail) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = this.tail = node;
    }
  }

  preprend(value: T): void {
    const node: INode<T> = { value };
    this._length++;

    if (this.head) {
      node.next = this.head;
      this.head = node;
    } else {
      this.head = this.tail = node;
    }
  }

  remove(value: T): T | undefined {
    let curr = this.head;

    do {
      curr = curr?.next;
    } while (curr && curr.next?.value !== value);

    const next = curr?.next;

    if (!next) return;

    this._length--;

    if (next.next) {
      curr!.next = next.next;
    } else {
      curr!.next = undefined;
    }

    return next.value;
  }

  removeAt(idx: number): T | undefined {
    let curr = this.head;

    for (let i = 1; i < idx; i++) {
      curr = curr?.next;
    }

    const next = curr?.next;

    if (!next) return;

    this._length--;

    if (next.next) {
      curr!.next = next.next;
    } else {
      curr!.next = undefined;
    }

    return next.value;
  }

  get(idx: number): T | undefined {
    let curr = this.head;

    for (let i = 1; i <= idx; i++) {
      curr = curr?.next;
    }

    return curr?.value;
  }

  insertAt(value: T, idx: number): T | undefined {
    const node: INode<T> = { value };
    let curr = this.head;

    for (let i = 1; i < idx; i++) {
      curr = curr?.next;
    }

    if (!curr) return;

    this._length++;

    if (curr.next) {
      node.next = curr.next;
      curr.next = node;
    } else {
      curr.next = node;
    }

    return value;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(maxSize = 10) {
    if (typeof maxSize !== 'number' || maxSize <= 0 || !Number.isInteger(maxSize)) {

      throw new Error(`${maxSize} is invalid parameter`);
    }

    this.maxSize = maxSize;
    this.size = 0;
    this.top = null;
  }

  push(value) {
    if (this.size >= this.maxSize) {

      throw new Error('The stack is full');
    }

    const newNode = new Node(value);

    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {

      throw new Error('The stack is empty');
    }

    const poppedValue = this.top.value;

    this.top = this.top.next;
    this.size--;

    return poppedValue;
  }

  peek() {
    return this.isEmpty() ? null : this.top.value;
  }

  isEmpty() {
    return this.size === 0;
  }

  toArray() {
    const result = [];
    let current = this.top;

    while (current !== null) {
      result.unshift(current.value);
      current = current.next;
    }

    return result;
  }

  static fromIterable(iterable) {
    if (!Symbol.iterator in Object(iterable)) {

      throw new Error('Provided value is not iterable');
    }

    const stack = new Stack(iterable.length);

    for (const item of iterable) {
      stack.push(item);
    }

    return stack;
  }
}

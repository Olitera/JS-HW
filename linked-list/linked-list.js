class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertAtBeginning(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;
  }

  insertAtEnd(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next !== null) {
        current = current.next;
      }

      current.next = newNode;
    }

    this.size++;
  }

  insertAtPosition(value, position) {
    if (position < 0 || position > this.size) {

      throw new Error('Invalid position.');
    }

    const newNode = new Node(value);

    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let previous = null;

      for (let index = 0; index < position; index++) {
        previous = current;
        current = current.next;
      }

      newNode.next = current;
      previous.next = newNode;
    }

    this.size++;
  }

  deleteAtBeginning() {
    if (this.head === null) {

      throw new Error('List is empty, no node to delete.');
    }

    const deletedValue = this.head.value;

    this.head = this.head.next;
    this.size--;

    return deletedValue;
  }

  deleteAtEnd() {
    if (this.head === null) {

      throw new Error('List is empty, no node to delete.');
    }

    if (this.head.next === null) {
      const deletedValue = this.head.value;

      this.head = null;
      this.size--;

      return deletedValue;
    }

    let current = this.head;
    let previous = null;

    while (current.next !== null) {
      previous = current;
      current = current.next;
    }

    const deletedValue = current.value;

    previous.next = null;
    this.size--;

    return deletedValue;
  }

  deleteAtPosition(position) {
    if (position < 0 || position >= this.size) {

      throw new Error('Invalid position.');
    }

    let current = this.head;
    let previous = null;

    if (position === 0) {
      const deletedValue = this.head.value;

      this.head = this.head.next;
      this.size--;

      return deletedValue;
    }

    for (let index = 0; index < position; index++) {
      previous = current;
      current = current.next;
    }

    const deletedValue = current.value;

    previous.next = current.next;
    this.size--;

    return deletedValue;
  }

  deleteByValue(value) {
    if (this.head === null) {

      throw new Error('List is empty, cannot delete.');
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;

      return value;
    }

    let current = this.head;
    let previous = null;

    while (current !== null && current.value !== value) {
      previous = current;
      current = current.next;
    }

    if (current === null) {

      throw new Error(`Element ${ value } not found, cannot delete.`);
    }

    previous.next = current.next;
    this.size--;

    return value;
  }

  search(value) {
    let current = this.head;
    let position = 0;

    while (current !== null) {
      if (current.value === value) {

        return position;
      }

      current = current.next;
      position++;
    }

    throw new Error(`Element ${ value } not found.`);
  }

  get(position) {
    if (position < 0 || position >= this.size) {

      throw new Error('Invalid position.');
    }

    let current = this.head;

    for (let index = 0; index < position; index++) {
      current = current.next;
    }

    return current.value;
  }

  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  display() {
    if (this.head === null) {

      throw new Error('List is empty.');
    }

    let current = this.head;
    let output = '';

    while (current !== null) {
      output += current.value + (current.next ? ' -> ' : '');
      current = current.next;
    }

    console.log(output);
  }
}

const list = new SingleLinkedList();

list.insertAtBeginning(10);
list.insertAtBeginning(20);
list.insertAtBeginning(30);
list.display();

list.insertAtEnd(40);
list.insertAtEnd(50);
list.display();

list.insertAtPosition(25, 2);
list.display();

list.search(20);

list.deleteAtBeginning();
list.display();

list.deleteAtEnd();
list.display();

list.deleteAtPosition(2);
list.display();

list.deleteByValue(20);
list.display();

list.reverse();
list.display();

list.get(1);




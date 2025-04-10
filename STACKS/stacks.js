class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export class Stacks {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  //push
  push(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.length++;
      return true;
    }
    if (this.length >= 5) {
      return false;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return true;
  }
  //pop
  pop(data) {
    if (this.length == 0) {
      return false;
    }
    let poppedNode = this.head;
    this.head = this.head.next;
    this.length--;
    return poppedNode.data;
  }
  //peek
  peek(data) {
    return this.head ? this.head.data : null;
  }
  //isempty
  isempty() {
    return this.head === null;
  }
  //size
  size() {
    return this.length;
  }
}

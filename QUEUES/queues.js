class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
export class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }
  //enqueue
  enqueue(data) {
    let newNode = new Node(data);
    if (!this.rear) {
      this.front = newNode;
      this.rear = newNode;
      this.length++;
      return true;
    }
    this.rear.next = newNode;
    this.rear = newNode;
    this.length++;
    return true;
  }
  //dequeue
  dequeue() {
    if (!this.front) {
      return false;
    }
    let removedNode = this.front;
    this.front = removedNode.next;
    this.length--;
    return removedNode.data;
  }
  //peek
  peek() {
    return this.length > 0 ? this.front.data : false;
  }
  //isempty
  isempty() {
    return this.length === 0;
  }
  //size
  size() {
    return this.length;
  }
}

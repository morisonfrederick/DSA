class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export class CircularSingly {
  constructor() {
    this.head = null;
  }
  //append -- add new node
  append(data) {
    const newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
      newNode.next = this.head;
      return true;
    }
    let curr = this.head;
    while (curr.next != this.head) {
      curr = curr.next;
    }
    curr.next = newNode;
    newNode.next = this.head;
  }
}

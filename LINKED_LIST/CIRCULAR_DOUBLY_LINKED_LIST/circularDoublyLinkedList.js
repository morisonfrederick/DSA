class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

export class CircularDoubly {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  //append -- add node to the list
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
      newNode.prev = this.head;
      this.length++;
      return true;
    }
    let curr = this.head;
    while (curr.next !== this.head) {
      curr = curr.next;
    }
    this.head.prev = newNode;
    newNode.next = this.head;
    newNode.prev = curr;
    curr.next = newNode;
    this.length++;
  }
  //delete -- delete node from the list
  delete(data) {
    if (!this.head) {
      return false;
    }
    let curr = this.head;
    do {
      if (this.head.data == data && this.length == 1) {
        this.head = null;
        this.length--;
        return true;
      }
      if (curr.data === data) {
        curr.prev.next = curr.next;
        curr.next.prev = curr.prev;
        if (curr == this.head) {
          this.head = curr.next;
        }
        this.length--;
        return true;
      }
      curr = curr.next;
    } while (curr !== this.head);
  }
  //search -- search a node from the list
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export class CircularSingly {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  //append -- add new node
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
      this.length++;
      return true;
    }
    let curr = this.head;
    while (curr.next != this.head) {
      curr = curr.next;
    }
    curr.next = newNode;
    newNode.next = this.head;
    this.length++;
  }
  search(data) {
    if (this.head === null) {
      return false;
    }
    let curr = this.head;
    do {
      if (curr.data == data) {
        return true;
      }
      curr = curr.next;
    } while (curr !== this.head);

    return false;
  }
  //delete -- delete a single node
  delete(data) {
    if (!this.head) {
      return false;
    }
    if (this.head.data == data) {
      this.head = null;
      this.length--;
      return true;
    }
    let curr = this.head;
    while (curr.next != this.head) {
      if (curr.next.data == data) {
        curr.next = curr.next.next;
        this.length--;
        return true;
      }
      curr = curr.next;
    }

    return false;
  }
}

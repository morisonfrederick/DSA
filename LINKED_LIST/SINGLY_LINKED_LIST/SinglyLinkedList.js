class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  //append -- add new node at the end of list

  append(data) {
    const newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
      this.length++;
    } else {
      let curr = this.head;
      while (curr.next !== null) {
        curr = curr.next;
      }
      curr.next = newNode;
      this.length++;
    }
  }

  //prepend -- add new node at the beginning of the list
  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  //search -- search a node

  search(data) {
    if (!this.head) {
      return false;
    }
    let curr = this.head;
    while (curr != null) {
      if (curr.data === data) {
        return true;
      }
      curr = curr.next;
    }
    return false;
  }

  //delete -- delete a node

  delete(data) {
    if (!this.head) {
      return false;
    }
    if (this.head.data === data) {
      this.head = this.head.next;
      this.length--;
      return true;
    }
    let curr = this.head;
    while (curr.next !== null) {
      if (curr.next.data === data) {
        curr.next = curr.next.next;
        this.length--;
        return true;
      }
      curr = curr.next;
    }
    return false;
  }

  // print -- print all the data
  print() {
    if (!this.head) {
      console.log("empty list");
      return;
    }
    let curr = this.head;
    while (curr) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
  getLength() {
    return this.length;
  }
}

export default LinkedList;

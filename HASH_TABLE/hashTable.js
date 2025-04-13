export class HashTable {
  constructor(size = 127) {
    this.table = new Array(size);
    this.size = 0;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }
  set(key, value) {
    let index = this._hash(key);

    if (!this.table[index]) {
      this.table[index] = [];
    }
    for (let pair of this.table[index]) {
      if (pair[0] === key) {
        pair[1] = value;
        return true;
      }
    }
    this.table[index].push([key, value]);

    return true;
  }
  get(key) {
    const index = this._hash(key);
    let bucket = this.table[index];
    if (!bucket) {
      return false;
    } else {
      console.log("bucket found");

      for (let pair of bucket) {
        if (pair[0] === key) {
          return pair[1];
        }
      }
      return false;
    }
  }
}

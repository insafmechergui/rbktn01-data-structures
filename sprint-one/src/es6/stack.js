class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
   this.storage = {};
   this._size = 0;
  }

  push (value) {
    this.storage[this._size] = value
    this._size++
  };

  pop () {
    this._size && this._size--
    var result = this.storage[this._size]
    delete this.storage[this._size]
    return result
  };

  size () {
    return this._size;
  };

}
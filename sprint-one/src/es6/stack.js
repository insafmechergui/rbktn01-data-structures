class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {

  this.storage = {};
  this.key = 0;

  }

  push(value) {
     this.key++;
     this.storage[this.key] = value;

  }

  pop() {
      if(this.key <= 0) {
        return undefined;
      }

    var result  = this.storage[this.key]
    delete this.storage[this.key];
    this.key--;
    return result ;

  }

size() {
    
    return this.key;
  }

}


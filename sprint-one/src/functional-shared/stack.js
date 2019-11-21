var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.key = 0;
  // Implement the methods below
	extend(someInstance, stackMethods);

  return someInstance;

};

var stackMethods = {};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

stackMethods.push = function(value) {
     this.storage[this.key] = value;
     this.key++;

  };

stackMethods.pop = function() {
      if(this.key <= 0) {
        return undefined;
      }

    this.key--;
    var result = this.storage[this.key];
    delete result;
    
    return this.storage[this.key];

  };

stackMethods.size = function() {
    
    return this.key;
  };
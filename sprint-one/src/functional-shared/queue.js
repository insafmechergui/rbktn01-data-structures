var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance._storage={};
  someInstance._start = 0;
  someInstance._end = 0;
  
  extend(someInstance, queueMethods);
  
  return someInstance;

};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
}

var queueMethods = {};

  queueMethods.enqueue = function(value) {
    this._storage[this._end] = value
    this._end++
  };

  queueMethods.dequeue = function() {
    var result = this._storage[this._start]
    delete this._storage[this._start]
    this.size() && this._start++
    return result

  };

  queueMethods.size = function() {
    return this._end - this._start
  };

var Queue = function() {
  var someInstance = {};
  var key = 0 ;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[key] = value;
     key++;
  };

  someInstance.dequeue = function() {
  	if(key === 0) {
        return undefined;
      }

    key--;
    var result = storage[key];
    delete result;
    return storage[key];
  };

  someInstance.size = function() {
  	return key ;
  };

  return someInstance;
};

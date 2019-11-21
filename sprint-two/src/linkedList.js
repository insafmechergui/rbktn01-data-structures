var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
  	 list.tail = Node(value)
  	 if (list.head === null ) {
  	 	  list.head = list.tail ;
  	 }
  };

  list.removeHead = function() {
  	var a = list.tail;
  	delete list.head;
  
   
};

  list.contains = function(target) {
     var test = false ;
     if ( list.head !== null &&  list.addToTail !== null ) {
          
     }
       return test ;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

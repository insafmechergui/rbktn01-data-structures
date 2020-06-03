var BinarySearchTree = function(value) {
    var binaryTree = Object.create(binaryPrototype);
    binaryTree.value = value;
    binaryTree.left = null;
    binaryTree.right = null;

    return binaryTree;
};

var binaryPrototype = {};

binaryPrototype.insert = function(val){
    if (val < this.value) {
        if (this.left === null) {
          this.left = BinarySearchTree(val);
        } else {
          this.left.insert(val);
        }
      } else if (val > this.value) {
        if (this.right === null) {
          this.right = BinarySearchTree(val);
        } else {
          this.right.insert(val);
        }
      } else {
    
     "the tree contain this value"
      }
}

binaryPrototype.contains = function(val) {
    if (val === this.value) {
        return true;
      } else if (val < this.value) {
        return !!(this.left && this.left.contains(val));
      } else if (val > this.value) {
        return !!(this.right && this.right.contains(val));
      }
}

binaryPrototype.depthFirstLog= function(callback){
    callback(this.value)
    if(this.left){
        this.left.depthFirstLog(callback)
    }
    if(this.right){
        this.right.depthFirstLog(callback)
    }
    
}
/*
 * Complexity: What is the time complexity of the above functions?
 */

class Stack {
  /*
  Last in first out
  */
  constructor() {
    // init new stack with a count of 0 and an empty container object.
    this.count = 0;
    this.container = {};
  }

  push(item) {
    //adds an item to the end of the stack 
    this.storage[this.count] = item;
    this.count ++;
  }
}

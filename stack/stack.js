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

  empty() {
    // check if stack is empty evaluates to bool
    if (this.count === 0) {
      return true;
    }
    return false;
  }

  pop() {
    // removes and returns the last element in the stack.
    if (this.empty()) {
      return undefined;
    }
    this.count--;
    let removed = this.storage[this.count];
    delete this.storage[this.count];
    return removed;
  }
}

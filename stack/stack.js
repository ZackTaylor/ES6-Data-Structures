module.exports.Stack = class Stack {
  /*
  Last in first out
  */
  constructor() {
    // init new stack with a count of 0 and an empty container object.
    this.count = 0;
    this.storage = {};
  }

  size() {
    //returns # items in stack
    return this.count;
  }

  push(item) {
    //adds an item to the end of the stack
    this.storage[this.count] = item;
    this.count++;
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
      return null;
    }

    this.count--;
    const removed = this.storage[this.count];
    delete this.storage[this.count];
    return removed;
  }

  peek() {
    // if stack not empty return last element
    if (this.empty()) {
      return null;
    }

    return this.storage[this.count - 1];
  }

  swap() {
    // if Stack has 2 or more elements swap the last 2 elemtns
    if (this.count > 1) {
      let last = this.container[this.count - 1];
      let secondToLast = this.container[this.count - 2];
      this.container[this.count - 2] = last;
      this.container[this.count - 1] = secondToLast;
      return this.container;
    }

    return null;
  }
};

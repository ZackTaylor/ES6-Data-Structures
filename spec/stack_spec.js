const Stack = require('../stack/stack.js');
describe('Stack', function () {
  let stack;

  beforeEach(function () {
    stack = new Stack();
  });

  describe('#constructor', function () {

    it('creates a new stack with a size of 0.', function () {
      expect(stack.size()).toEqual(0);
    });

    it('creates a new stack with an empty storage.', function () {
      expect(stack.storage).toEqual({});
    });
  });

  describe('#push', function () {

    beforeEach(function () {
      let newItem = ['New', 'Stuff'];
      stack.push(newItem);
    });

    it('adds a new item to the end of the stack.', function () {
      expect(stack.storage).toEqual({ 0: ['New', 'Stuff'] });
    });

    it('changes the count of the stack when new item pushed.', function () {
      expect(stack.size()).toEqual(1);
    });
  });

  describe('#empty', function () {

    it('returns true when Stack is empty.', function () {
      expect(stack.empty()).toEqual(true);
    });

    it('returns false when stack has items in it.', function () {
      let newItem = ['New', 'Stuff'];
      stack.push(newItem);
      expect(stack.empty()).toEqual(false);
    });
  });

  describe('#pop', function () {
    beforeEach(function () {
      let newItems = ['New', 'Stuff'];
      stack.push(newItems[0]);
      stack.push(newItems[1]);
    });

    it('removes the last element in storage.', function () {
      stack.pop();
      expect(stack.size()).toEqual(1);
    });

    it('returns the removed element from the storage.', function () {
      expect(stack.pop()).toEqual('Stuff');
    });
  });

  describe('#peek', function () {

    it('returns the last element in storage.', function () {
      let newItems = ['New', 'Stuff'];
      stack.push(newItems[0]);
      stack.push(newItems[1]);
      expect(stack.peek()).toEqual(stack.storage['1']);
    });

    it('returns null if storage is empty.', function () {
      expect(stack.peek()).toBeNull();
    });
  });

  describe('#swap', function () {

    it('swaps the last 2 elements in storage.', function () {
      let newItems = ['New', 'Stuff', 'Cool'];
      stack.push(newItems[0]);
      stack.push(newItems[1]);
      stack.push(newItems[2]);
      expect(stack.swap()).toEqual({ 0: 'New', 1: 'Cool', 2: 'Stuff'});
      console.log(stack.storage)
    });

    it('returns null if storage is empty.', function () {
      expect(stack.swap()).toBeNull();
    });

    it('returns null if storage size is 1.', function () {
      let newItem = ['New', 'Stuff'];
      stack.push(newItem);
      expect(stack.swap()).toBeNull();
    });
  });

});

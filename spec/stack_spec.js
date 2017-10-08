const Stack = require('../stack/stack.js');
describe('Stack', function () {
  let stack;

  beforeEach(function () {
    stack = new Stack();
  });

  describe('#constructor', function () {

    it('creates a new stack with a size of 0.', function () {
      expect(stack.count).toEqual(0);
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
      expect(stack.count).toEqual(1);
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

});

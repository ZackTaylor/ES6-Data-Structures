const { Stack } = require('../stack/stack.js');
describe('Stack', function () {
  let stack;

  describe('#constructor', function () {
    it('creates a new stack with a size of 0', function () {
      stack = new Stack();
      expect(stack.count).toEqual(0);
    });

    it('creates a new stack with an empty storage', function () {
      stack = new Stack();
      expect(stack.container).toEqual({});
    });
  });

});

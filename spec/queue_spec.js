const Queue = require('../queue/queue.js');

describe('Stack', function () {
    let queue;

    beforeEach(function () {
        queue = new Queue();
    });

    describe('#constructor', function () {

        it('creates a new queue with a size of 0.', function () {
            expect(queue.count).toEqual(0);
        });

        it('creates a new queue with a tail of 0.', function () {
            expect(queue.tail).toEqual(0);
        });

        it('creates a new queue with an empty storage.', function () {
            expect(queue.storage).toEqual({});
        });
    });

    describe('#enqueue', function () {

        beforeEach(function () {
            queue.enqueue("Test");
            queue.enqueue("Testing");
        });
        it('adds an item to the end of the queue', function () {
            expect(queue.storage).toEqual({ 0: "Test", 1: "Testing" });
        });

        it('increments the count', function () {
            expect(queue.count).toEqual(2);
        });
    });

});

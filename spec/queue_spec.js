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

        it('creates a new queue with a lowestIndex of 0.', function () {
            expect(queue.count).toEqual(0);
        });

        it('creates a new queue with an empty storage.', function () {
            expect(queue.storage).toEqual({});
        });
    });

});

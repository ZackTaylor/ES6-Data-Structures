module.exports = class Queue {
    constructor() {
        this.storage = {};
        this.count = 0;
        this.tail = 0;
    }

    enqueue(value) {
        this.storage[this.count] = value;
        this.count++;
    }

};

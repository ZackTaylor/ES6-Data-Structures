module.exports = class Queue {
    constructor() {
        this.storage = {};
        this.count = 0;
        this.lowestIndex = 0;
    }
};

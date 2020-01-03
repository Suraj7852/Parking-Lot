let assert = require('chai').assert;
let observer = require('../main/Observer');

describe('notify All', () => {
    it('should return true if lot is full', function () {
        assert.isTrue(observer.notifyAll());
    });
});
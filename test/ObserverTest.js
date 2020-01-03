let assert = require('chai').assert;
let ParkingLot = require('../main/ParkingLot');
let observer = require('../main/Observer');

describe('notify All', () => {
    it('should return true if lot is full', function () {
        let parkingLot = new ParkingLot(2);
        parkingLot.park({});
        parkingLot.park({});
        let full = parkingLot.isFull();
        assert.isTrue(full);
    });
});
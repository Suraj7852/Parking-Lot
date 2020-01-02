let assert = require('chai').assert;
let parkingLot = require('../main/parkingLot');
describe('park the car', () => {
    it('should return true if car get parked', () => {
        let park = parkingLot.park(new Object());
        assert.isTrue(park);
    });
});

describe('unPark the car', () => {
    it('should return true if car get Unarked', () => {
        parkingLot.park(new Object());
        let unPark = parkingLot.unPark();
        assert.isTrue(unPark);
    });
});
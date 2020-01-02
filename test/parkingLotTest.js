let assert = require('chai').assert;
let ParkingLot = require('../main/ParkingLot');

describe('park the car', () => {
    it('should return true if car get parked', () => {
        let parkingLot  = new ParkingLot(2);
        let park = parkingLot.park({});
        assert.isTrue(park);
    });

    it('should return false if car is not parked', () => {
        let parkingLot  = new ParkingLot(2);
        parkingLot.park({});
        parkingLot.park({});
        assert.isFalse(parkingLot.park({}));
    });
});

describe('unPark the car', () => {
    it('should return true if car get unParked', () => {
        let parkingLot  = new ParkingLot(2);
        parkingLot.park({});
        let unPark = parkingLot.unPark();
        assert.isTrue(unPark);
    });

    it('should return false if there is no car', () => {
        let parkingLot  = new ParkingLot(2);
        let unPark = parkingLot.unPark();
        assert.isFalse(unPark);
    });
});

describe('full parking lot', () => {
    it('should return true if car parking is full', () => {
        let parkingLot  = new ParkingLot(2);
        parkingLot.park({});
        parkingLot.park({});
        let unPark = parkingLot.isFull();
        assert.isTrue(unPark);
    });
});
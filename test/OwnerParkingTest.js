let assert = require('chai').assert;
let ownerParking = require('../main/OwnerParking');
let ParkingLot = require('../main/ParkingLot')

describe('Lot is full', () => {
    it('should return true if lot is full', function () {
        let parkingLot = new ParkingLot(2);
        parkingLot.park({});
        parkingLot.park({});
        let full = parkingLot.isFull();
        let parkingOwner = ownerParking.isFull(full);
        assert.isTrue(parkingOwner)
    });

    it('should return true if lot is full and someOne unPark', function () {
        let parkingOwner = ownerParking.notifyOwner(true);
        assert.isTrue(parkingOwner);
    });
});
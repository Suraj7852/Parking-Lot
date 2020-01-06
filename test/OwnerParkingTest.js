let assert = require('chai').assert;
let ownerParking = require('../main/OwnerParking');
let ParkingLot = require('../main/ParkingLot')

describe('Lot is full', () => {
    it('should return true if lot is full', function () {
        let parkingLot = new ParkingLot(2);
        parkingLot.createLots(1)
        let full = parkingLot.park({name: "suraj",car: "1234"});
        let parkingOwner = ownerParking.isFull(full);
        assert.isTrue(parkingOwner)
    });

    it('should return true if lot is full and someOne unPark', function () {
        let parkingOwner = ownerParking.notifyOwner(true);
        assert.isTrue(parkingOwner);
    });
});
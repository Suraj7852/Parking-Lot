let assert = require('chai').assert;
let ParkingLot = require('../main/ParkingLot');

describe('park the car', () => {
    it('should return true if car get parked', () => {
        let parkingLot = new ParkingLot(2);
        parkingLot.createLots(1);
        let park = parkingLot.park({name: "suraj", car: 1234});
        assert.isTrue(park);
    });

    it('should return false if car slot is full', () => {
        let parkingLot = new ParkingLot(2);
        parkingLot.createLots(1);
        parkingLot.park({name: "suraj", car: 4587});
        parkingLot.park({name: "raju", car: 45857});
        assert.isFalse(parkingLot.park({name: "rani", car: 4587}));
    });
});

describe('unPark the car', () => {
    it('should return true if car get unParked', () => {
        let parkingLot = new ParkingLot(2);
        parkingLot.createLots(1);
        parkingLot.park({name: "suraj", car: 4587});
        let unPark = parkingLot.unPark(4587);
        assert.isTrue(unPark);
    });

    it('should return false if there is no car', () => {
        let parkingLot = new ParkingLot(2);
        parkingLot.createLots(1);
        let unPark = parkingLot.unPark(4569);
        assert.isFalse(unPark);
    });
});

describe('full parking lot', () => {
    it('should return true if car parking is full', () => {
        let parkingLot = new ParkingLot(2);
        parkingLot.createLots(1);
        parkingLot.park({name: "suraj", car: 4587});
        parkingLot.park({name: "uraj", car: 4586});
        let unPark = parkingLot.unPark(4587);
        assert.isTrue(unPark);
    });
});

describe('creating multiple slot', () => {
    it('should return true if car parking is full', () => {
        let parkingLot = new ParkingLot(2);
        parkingLot.createLots(2);
        parkingLot.park({name: "suraj", car: 4587});
        parkingLot.park({name: "uraj", car: 4586});
        let unPark = parkingLot.unPark(4587);
        assert.isTrue(unPark);
    });
});
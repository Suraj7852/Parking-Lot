let assert = require('chai').assert;
let ParkingLot = require('../main/ParkingLot');

describe('park the car', () => {
    it('should return true if car get parked', () => {
        let parkingLot = new ParkingLot(2);
        let park = parkingLot.park({});
        assert.isTrue(park);
    });

    it('should return false if car is not parked', () => {
        let parkingLot = new ParkingLot(2);
        parkingLot.park({});
        parkingLot.park({});
        assert.isFalse(parkingLot.park({}));
    });
});

describe('unPark the car', () => {
    it('should return true if car get unParked', () => {
        let parkingLot = new ParkingLot(2);
        parkingLot.park({});
        let unPark = parkingLot.unPark();
        assert.isTrue(unPark);
    });

    it('should return false if there is no car', () => {
        let parkingLot = new ParkingLot(2);
        let unPark = parkingLot.unPark();
        assert.isFalse(unPark);
    });

    it('should return false if there is no car', () => {
        let parkingLot = new ParkingLot(2);
        parkingLot.park({});
        parkingLot.park({});
        let unPark = parkingLot.unPark();
        assert.isTrue(unPark);
    });

    it('should return true if lot is full', function () {
        let parkingLot = new ParkingLot(2);
        parkingLot.park({});
        parkingLot.park({});
        let full = parkingLot.unPark();
        assert.isTrue(full);
    });
});

describe('full parking lot', () => {
    it('should return true if car parking is full', () => {
        let parkingLot = new ParkingLot(2);
        parkingLot.park({});
        parkingLot.park({});
        let unPark = parkingLot.isFull();
        assert.isTrue(unPark);
    });
});

describe('given slots: ', () => {
    let parkingLot = new ParkingLot(5);
    it('should return list of slots available', () => {
        parkingLot.park({name: "suraj",car: "1234"});
        parkingLot.park({name: "ravi",car: "1235"});
        let allocatedSpace = parkingLot.allocatedSpace();
        assert.isArray(allocatedSpace)
    });

    it('should return list of empty slots available', () => {
        parkingLot.unAllocatedSpace();
    });

    it('should park the car where to park', function () {
        let specificPlace = parkingLot.parkAtSpecificPlace({name: "vishal", car: "5689"},4);
        assert.isTrue(specificPlace);
    });

    it('should return false if car is already parked at that slot', function () {
        let specificPlace = parkingLot.parkAtSpecificPlace({name: "vishal", car: "5689"},1);
        assert.isFalse(specificPlace);
    });
});

describe('find car', () => {
    let parkingLot = new ParkingLot(5);
    it('should should able to find slot where owner car is parked', function () {
        parkingLot.park({name: "suraj",car: "1234"});
        parkingLot.park({name: "ravi",car: "1238"});
        parkingLot.park({name: "romil",car: "1231"});
        parkingLot.park({name: "raju",car: "1255"});
        parkingLot.allocatedSpace();
        let allocatedSpace = parkingLot.findCar(1238);
        assert.equal(allocatedSpace, 1);
    });

    it('should return false if there is no such car', function () {
        let allocatedSpace = parkingLot.findCar(5545);
        assert.equal(allocatedSpace, -1);
    });
});
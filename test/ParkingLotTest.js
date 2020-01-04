let assert = require('chai').assert;
let ParkingLot = require('../main/ParkingLot');

describe('park the car', () => {

    it('should return true if car get parked', () => {
        let parkingLot = new ParkingLot(2);
        let park = parkingLot.park({name: "suraj", car: 1234}, 0);
        assert.isTrue(park);
    });

    it('should return false if car slot is full', () => {
        let parkingLot = new ParkingLot(2);
        parkingLot.park({name: "suraj", car: 4587},0);
        parkingLot.park({name: "raju", car: 45857},1);
        assert.isFalse(parkingLot.park({name: "rani", car: 4587},2));
    });
});

describe('unPark the car', () => {
    it('should return true if car get unParked', () => {
        let parkingLot = new ParkingLot(2);
        parkingLot.park({name: "suraj", car: 4587},1);
        let slotNo = parkingLot.findCar(4587);
        let unPark = parkingLot.unPark(slotNo);
        assert.isTrue(unPark);
    });

    it('should return false if there is no car', () => {
        let parkingLot = new ParkingLot(2);
        let unPark = parkingLot.unPark(1);
        assert.isFalse(unPark);
    });

    it('should return true if lot is full when unparked inform owner', () => {
        let parkingLot = new ParkingLot(2);
        parkingLot.park({name: "suraj", car: 4587},0);
        parkingLot.park({name: "surj", car: 487},1);
        let number = parkingLot.findCar(487);
        let unPark = parkingLot.unPark(number);
        assert.isTrue(unPark);
    });
});

describe('full parking lot', () => {
    it('should return true if car parking is full', () => {
        let parkingLot = new ParkingLot(2);
        parkingLot.park({name: "suraj", car: 4587},0);
        parkingLot.park({name: "uraj", car: 4587},1);
        let unPark = parkingLot.isFull();
        assert.isTrue(unPark);
    });
});

describe('given slots: ', () => {
    let parkingLot = new ParkingLot(5);
    it('should return list of slots available', () => {
        parkingLot.park({name: "suraj",car: "1234"},0);
        parkingLot.park({name: "ravi",car: "1235"},1);
        let allocatedSpace = parkingLot.allocatedSpace();
        assert.isArray(allocatedSpace)
    });
});

describe('find car', () => {
    let parkingLot = new ParkingLot(5);
    it('should should able to find slot where owner car is parked', function () {
        parkingLot.park({name: "suraj",car: "1234"},0);
        parkingLot.park({name: "ravi",car: "1238"},1);
        parkingLot.park({name: "romil",car: "1231"},2);
        parkingLot.park({name: "raju",car: "1255"},3);
        let allocatedSpace = parkingLot.findCar(1238);
        assert.equal(allocatedSpace, 1);
    });

    it('should return false if there is no such car', function () {
        let allocatedSpace = parkingLot.findCar(5545);
        assert.equal(allocatedSpace, -1);
    });
});
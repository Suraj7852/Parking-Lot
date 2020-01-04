let assert = require('chai').assert;
let airportSecurity = require('../main/AirportSecurity');
let ParkingLot = require('../main/ParkingLot');

describe('Lot is full', () => {
    it('should return true if lot is full', function () {
        let parkingLot = new ParkingLot(2);
        parkingLot.park({name: "suraj",car: "1234"},0);
        parkingLot.park({name: "suraj",car: "1234"},1);
        let full = parkingLot.isFull();
        let securityAirport = airportSecurity.isFull(full);
        assert.isTrue(securityAirport)
    });
});
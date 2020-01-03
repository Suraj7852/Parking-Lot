let assert = require('chai').assert;
let airportSecurity = require('../main/AirportSecurity');
let ParkingLot = require('../main/ParkingLot');

describe('Lot is full', () => {
    it('should return true if lot is full', function () {
        let parkingLot = new ParkingLot(2);
        parkingLot.park({});
        parkingLot.park({});
        let full = parkingLot.isFull();
        let securityAirport = airportSecurity.isFull(full);
        assert.isTrue(securityAirport)
    });
});
let assert = require('chai').assert;
let airportSecurity = require('../main/AirportSecurity');

describe('Lot is full', () => {
    it('should return true if lot is full', function () {
        let securityAirport = airportSecurity.isFull(true);
        assert.isTrue(securityAirport)
    });
});
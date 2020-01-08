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
        assert.isFalse(parkingLot.park({name: "rani", car: 45887}));
    });

    it('should throw exception if same car is parked already', () => {
        try {
            let parkingLot = new ParkingLot(2);
            parkingLot.createLots(1);
            parkingLot.park({name: "suraj", car: 4587});
            parkingLot.park({name: "raju", car: 4587});
        } catch (e) {
            assert.equal(e.message, "this number of car already exists");
        }
    });

    it('should throw exception if empty car name passed', () => {
        try {
            let parkingLot = new ParkingLot(2);
            parkingLot.createLots(1);
            parkingLot.park({name: "", car: 4587});
        } catch (e) {
            assert.equal(e.message, "Invalid enteries!");
        }
    });

    it('should throw exception if empty car details passed', () => {
        try {
            let parkingLot = new ParkingLot(2);
            parkingLot.createLots(1);
            parkingLot.park({});
        } catch (e) {
            assert.equal(e.message, "Invalid enteries!");
        }
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

describe('handicap parking', () => {
    it('should return nearest empty parking slot', () => {
        let parkingLot = new ParkingLot(2);
        parkingLot.createLots(2);
        parkingLot.park({name: "shri", car: 5236});
        parkingLot.park({name: "akshay", car: 9652});
        parkingLot.park({name: "suraj", car: 4598});
        parkingLot.unPark(4598);
        let handicapParking = parkingLot.handicapParking({name: "mango", car: 1254});
        assert.isTrue(handicapParking);
    });

    it('should throw exception when no parking space available', () => {
        try {
            let parkingLot = new ParkingLot(2);
            parkingLot.createLots(2);
            parkingLot.park({name: "shriniwas", car: 5236});
            parkingLot.park({name: "akshayP", car: 9652});
            parkingLot.park({name: "surajNag", car: 4598});
            parkingLot.park({name: "surajN", car: 4558});
            parkingLot.handicapParking({name: "mango", car: 1254});
        } catch (e) {
            assert.equal(e.message, "There is no empty parking space available")
        }
    });
});


describe('max free space', () => {
    it('should return lot number with max parking space', () => {
        let parkingLot = new ParkingLot(4);
        parkingLot.createLots(4);
        parkingLot.park({name: "shri", car: 5236});
        parkingLot.park({name: "akshay", car: 9652});
        parkingLot.park({name: "suraj", car: 4598});
        let handicapParking = parkingLot.largeVehicle({name: "suraj", car: 4598});
        assert.isTrue(handicapParking)
    });

    it('should return lot number with max parking space', () => {
        try {
            let parkingLot = new ParkingLot(2);
            parkingLot.createLots(2);
            parkingLot.park({name: "shri", car: 5236});
            parkingLot.park({name: "akshay", car: 9652});
            parkingLot.park({name: "akshay1", car: 2652});
            parkingLot.park({name: "suraj", car: 4598});
            parkingLot.largeVehicle({name: "suraj", car: 4598});
        } catch (e) {
            assert.equal(e.message, "slots are full")
        }
    });
});

describe('police Department', () => {
    it('should return array with specific color of car', () => {
        let parkingLot = new ParkingLot(2);
        parkingLot.createLots(2);
        parkingLot.park({name: "shri", car: 5236, color: "white"});
        parkingLot.park({name: "akshay", car: 9652, color: "white"});
        parkingLot.park({name: "suraj", car: 4598, color: "red"});
        assert.isArray(parkingLot.specificCars({color: "white"}));
    });

    it('should throw exception when no such car found', () => {
        try {
            let parkingLot = new ParkingLot(2);
            parkingLot.createLots(2);
            parkingLot.park({name: "shri", car: 5236, color: "black"});
            parkingLot.park({name: "akshay", car: 9652, color: "blue"});
            parkingLot.park({name: "suraj", car: 4598, color: "red"});
            parkingLot.specificCars({color: "blue", brand: "toyota"});
        } catch (e) {
            assert.equal(e.message, "car with specific color not not found");
        }
    });
});

describe('police Department search car by color with brand', () => {
    it('should return array with specific color and brand of car', () => {
        let parkingLot = new ParkingLot(2);
        parkingLot.createLots(2);
        parkingLot.park({name: "shri", car: 5236, color: "blue", brand: "toyota"});
        parkingLot.park({name: "akshay", car: 9652, color: "blue", brand: "toyota"});
        parkingLot.park({name: "suraj", car: 4598, color: "blue", brand: "maruti"});
        assert.isArray(parkingLot.specificCars({color: "blue", brand: "toyota"}));
    });

    it('should throw exception when no such car found', () => {
        try {
            let parkingLot = new ParkingLot(2);
            parkingLot.createLots(2);
            parkingLot.park({name: "shri", car: 5236, color: "black", brand: "toyota"});
            parkingLot.park({name: "akshay", car: 9652, color: "blue", brand: "maruti"});
            parkingLot.park({name: "suraj", car: 4598, color: "red", brand: "toyota"});
            parkingLot.specificCars({color: "blue", brand: "toyota"});
        } catch (e) {
            assert.equal(e.message, "car with specific color not not found");
        }
    });
});

describe('police Department search BMW car', () => {
    it('should return array with specific color and brand of car', () => {
        let parkingLot = new ParkingLot(2);
        parkingLot.createLots(2);
        parkingLot.park({name: "shri", car: 5236, color: "white", brand: "bmw"});
        parkingLot.park({name: "akshay", car: 9652, color: "blue", brand: "maruti"});
        parkingLot.park({name: "suraj", car: 4598, color: "blue", brand: "bmw"});
        assert.isArray(parkingLot.specificCars({color: "blue", brand: "bmw"}));
    });
});

describe('police Department search car by time', () => {
    it('should return all cars specific time', () => {
        let parkingLot = new ParkingLot(2);
        parkingLot.createLots(2);
        parkingLot.park({name: "suraj", car: 7849, color: "blue", brand: "honda", time: new Date(`1/8/2020 15:00`)});
        parkingLot.park({name: "shri", car: 5236, color: "white", brand: "bmw", time: new Date(`1/8/2020 15:14`)});
        parkingLot.park({name: "akshay", car: 8236, color: "white", brand: "bmw", time: new Date(`1/8/2020 15:25`)});
        parkingLot.park({name: "vishal", car: 5126, color: "red", brand: "audi", time: new Date(`1/8/2020 15:00`)});
        assert.isArray(parkingLot.parkingTimeHistory(30));
    });

    it('should throw exception when no such cars found', () => {
        try {
            let parkingLot = new ParkingLot(2);
            parkingLot.createLots(2);
            parkingLot.park({name: "suraj",car: 7849,color: "blue",brand: "honda",time: new Date(`1/8/2020 15:20`)});
            parkingLot.park({name: "shri", car: 5236, color: "white", brand: "bmw", time: new Date(`1/8/2020 15:56`)});
            parkingLot.park({name: "akshay",car: 8236,color: "white",brand: "bmw",time: new Date(`1/8/2020 15:25`)});
            parkingLot.park({name: "vishal", car: 5126, color: "red", brand: "audi", time: new Date(`1/8/2020 15:30`)});
            assert.isArray(parkingLot.parkingTimeHistory(30));
        } catch (e) {
            assert.equal(e.message, "No such car found")
        }
    });
});

describe('test', () => {
    it('should rye', () => {
        // let parkingLot = new ParkingLot(2);
        // parkingLot.createLots(2);
        // parkingLot.park({name: "suraj", car: 7849, color: "blue", brand: "honda", time: new Date(`1/8/2020 15:00`)});
        // parkingLot.park({name: "shri", car: 5236, color: "white", brand: "bmw", time: new Date(`1/8/2020 15:14`)});
        // parkingLot.park({name: "akshay", car: 8236, color: "white", brand: "bmw", time: new Date(`1/8/2020 15:25`)});
        // parkingLot.park({name: "vishal", car: 5126, color: "red", brand: "audi", time: new Date(`1/8/2020 15:00`)});
        // assert.isArray(parkingLot.parkingTimeHistory(30));
        let object = {name:""};
        if (Object.keys(object).length == 0 || object.name.length == 0)
            console.log("SURAJ")
    });
});
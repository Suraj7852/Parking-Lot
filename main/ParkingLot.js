let ownerParking = require('./OwnerParking');

class ParkingLot {
    capacity;
    cars = [];

    constructor(capacity) {
        this.capacity = capacity;
    }

    park(car) {
        if (!this.isFull()) {
            this.cars.push(car);
            return true;
        }
        return false;
    }

    unPark() {
        if (this.cars.length > 0) {
            this.cars.pop();
            return true;
        }
        return false
    }

    isFull() {
        if (this.cars.length >= this.capacity) {
            ownerParking.isFull(true);
            return true;
        }
        return false;
    }
}

module.exports = ParkingLot;
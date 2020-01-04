let observer = require('./Observer');
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
        if (this.isFull()) {
            observer.notifyAll();
            return false;
        }
    }

    unPark() {
        if (this.isFull()) {
            this.cars.pop();
            return ownerParking.notifyOwner(true);
        }
        if (this.cars.length > 0) {
            this.cars.pop();
            return true;
        }
        return false
    }

    isFull() {
        return this.cars.length >= this.capacity;
    }

    allocatedSpace() {
        let object = {
            name: null,
            car: null
        };
        for (let i = 0; i < this.capacity; i++) {
            if (this.cars[i] === undefined)
                this.cars.push(object);
        }
        return this.cars;
    }

    unAllocatedSpace() {
        for (let i = 0; i < this.capacity; i++) {
            if (this.cars[i].car === null)
                console.log("Empty slots: " + i);
        }
    }

    parkAtSpecificPlace(car, slot) {
        if (this.cars[slot].car === null) {
            this.cars[slot] = car;
            return true;
        }
        return false;
    }

    findCar(type) {
        let searchSlot = this.cars.find(o => o.car == type );
        return this.cars.indexOf(searchSlot);
    }
}

module.exports = ParkingLot;
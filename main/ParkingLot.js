let observer = require('./Observer');
let ownerParking = require('./OwnerParking');
let carDetails = require('./CarDetails');

class ParkingLot {
    capacity;
    cars = [];

    constructor(capacity) {
        this.capacity = capacity;
        this.allocatedSpace();
    }

    park(car, slot) {
        if (!this.isFull()) {
            this.cars[slot] = car;
            return true;
        }
        if (this.isFull()) {
            observer.notifyAll();
            return false;
        }
    }

    unPark(slot) {
        if (this.isEmpty() === this.capacity)
            return false;
        if (this.isFull()) {
            this.cars[slot] = carDetails;
            return ownerParking.notifyOwner(true);
        }
        if (!this.isFull()) {
            this.cars[slot] = carDetails;
            return true;
        }
    }

    isFull() {
        let count=0;
        for (let i=0; i<this.capacity; i++) {
            if (this.cars[i].car != null )
                count++;
        }
        return count >= this.capacity;
    }

    isEmpty() {
        let count = 0;
        for (let i=0; i<this.capacity; i++) {
            if (this.cars[i].car === null )
                count++;
        }
        return count;
    }

    allocatedSpace() {
        for (let i = 0; i < this.capacity; i++) {
            if (this.cars[i] === undefined)
                this.cars.push(carDetails);
        }
        return this.cars;
    }

    unAllocatedSpace() {
        for (let i = 0; i < this.capacity; i++) {
            if (this.cars[i].car === null)
                console.log("Empty slots: " + i);
        }
        return true;
    }

    findCar(carNo) {
        let searchSlot = this.cars.find(o => o.car == carNo );
        return this.cars.indexOf(searchSlot);
    }
}

module.exports = ParkingLot;
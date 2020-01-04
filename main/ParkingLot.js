let observer = require('./Observer');
let ownerParking = require('./OwnerParking');

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
        let object = {
            name: null,
            car: null
        };

        if (this.isEmpty() === this.capacity)
            return false;
        if (this.isFull()) {
            this.cars[slot] = object;
            return ownerParking.notifyOwner(true);
        }
        if (!this.isFull()) {
            this.cars[slot] = object;
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

    findCar(carNo) {
        let searchSlot = this.cars.find(o => o.car == carNo );
        return this.cars.indexOf(searchSlot);
    }
}

module.exports = ParkingLot;
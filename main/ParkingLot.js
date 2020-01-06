let observer = require('./Observer');
let ownerParking = require('./OwnerParking');
let carDetails = require('./CarDetails');

class ParkingLot {
    capacity;
    parkingLots;

    constructor(capacity) {
        this.capacity = capacity;
    }

    park(car) {
        if (this.findCar(car.car).slot == -1) {
            if (this.notFull().notFull) {
                let lotNumber = this.findLotNumber();
                for (let i = 0; i < this.parkingLots[lotNumber].length; i++) {
                    if (this.parkingLots[lotNumber][i].name == null) {
                        this.parkingLots[lotNumber][i] = {name: car.name, car: car.car, time: carDetails.time};
                        break;
                    }
                }
                return true;
            }
            if (!this.notFull().notFull) {
                observer.notifyAll();
                return false;
            }
        }
        throw new Error("this number of car already exists");
    }

    unPark(carNo) {
        let carUnPark = this.findCar(carNo);
        if (this.notFull().empty) {
            return false;
        }
        if (!this.notFull().notFull) {
            this.parkingLots[carUnPark.lotNumber][carUnPark.slot] = carDetails;
            return ownerParking.notifyOwner(true);
        }
        if (this.notFull().notFull) {
            this.parkingLots[carUnPark.lotNumber][carUnPark.slot] = carDetails;
            return true;
        }
    }

    notFull() {
        let count = 0;
        let empty = 0;
        for (let i = 0; i < this.parkingLots.length; i++) {
            for (let j = 0; j < this.capacity; j++) {
                if (this.parkingLots[i][j].name == null)
                    count++;
                if (this.parkingLots[i][j].name != null)
                    empty++;
            }
        }
        return {
            notFull: count > 0,
            empty: empty == 0
        };
    }

    handicapParking(car) {
        for (let i = 0; i < this.parkingLots.length; i++) {
            let parkingIndex = this.parkingLots[i].find(o => o.car == null);
            let index = this.parkingLots[i].indexOf(parkingIndex);
            if (index != -1) {
                this.parkingLots[i][index] = {name: car.name, car: car.car, time: carDetails.time};
                return true;
            }
        }
        throw new Error("There is no empty parking space available");
    }

    findCar(carNo) {
        let searchSlot;
        let count = 0;
        for (let i = 0; i < this.parkingLots.length; i++) {
            if (this.parkingLots[i].find(o => o.car == carNo)) {
                count = i;
                searchSlot = this.parkingLots[i].find(o => o.car == carNo);
            }
        }
        let search = this.parkingLots[count].indexOf(searchSlot);
        return {
            lotNumber: count,
            slot: search
        };
    }

    createLots(numberLot) {
        this.parkingLots = [];
        for (let i = 0; i < numberLot; i++) {
            this.parkingLots[i] = new Array();
            for (let j = 0; j < this.capacity; j++) {
                this.parkingLots[i][j] = carDetails;

            }
        }
    }

    findLotNumber() {
        let slotCountArray = [];
        for (let i = 0; i < this.parkingLots.length; i++) {
            let count = 0;
            for (let j = 0; j < this.parkingLots[i].length; j++) {
                if (this.parkingLots[i][j].name == null)
                    count++;
            }
            slotCountArray[i] = count;
        }
        let max = slotCountArray[0];
        let lotnumber = 0;
        for (let i = 0; i < slotCountArray.length; i++) {
            if (slotCountArray[i] > max)
                lotnumber = i;
        }
        return lotnumber;
    }
}

module.exports = ParkingLot;
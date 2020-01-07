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
                        this.parkingLots[lotNumber][i] = {
                            name: car.name,
                            car: car.car,
                            color: car.color,
                            brand: car.brand,
                            time: carDetails.time
                        };
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
        let max = 0;
        let lotNumber = 0;
        for (let i = 0; i < this.parkingLots.length; i++) {
            for (let j = 0; j < this.capacity; j++) {
                if (this.parkingLots[i][j].name == null)
                    count++;
                if (this.parkingLots[i][j].name != null)
                    empty++;
            }
            if (count > max) {
                max = count;
                lotNumber = i;
            }
        }
        return {
            notFull: count > 0,
            empty: empty == 0,
            maxFreeSpace: lotNumber
        };
    }

    largeVehicle(car) {
        if (this.notFull().notFull) {
            let lot = this.notFull().maxFreeSpace;
            let parkingIndex = this.parkingLots[lot].find(o => o.car == null);
            let index = this.parkingLots[lot].indexOf(parkingIndex);
            this.parkingLots[lot][index] = car;
            return true;
        }
        throw new Error("slots are full");
    }

    handicapParking(car) {
        for (let i = 0; i < this.parkingLots.length; i++) {
            let parkingIndex = this.parkingLots[i].find(o => o.car == null);
            let index = this.parkingLots[i].indexOf(parkingIndex);
            if (index != -1) {
                this.parkingLots[i][index] = {name: car.name, car: car.car, color: car.color, time: carDetails.time};
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

    specificCars(color, brand) {
        let specificCar = [];
        let count=0;
        for (let i = 0; i < this.parkingLots.length; i++) {
            specificCar[i] = this.parkingLots[i].filter(o => o.color == color).filter((k => k.brand == brand));
            if (specificCar[i].length >0 )
                count++;
        }
        if (count > 0) {
            console.log(specificCar)
            return specificCar;
        }
        throw new Error("car with specific color not not found");
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
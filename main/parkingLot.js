class parkingLot {
    car;
    park(car) {
        this.car = car;
        return true;
    }

    unPark() {
        this.car = null;
        return true;
    }
}
module.exports = new parkingLot();
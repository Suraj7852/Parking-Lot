let parkingOwner = require('./OwnerParking');
let airportSecurity = require('./AirportSecurity');

class Observer {
    constructor() {
        this.observer = [];
    }

    subscribe() {
        this.observer.push(parkingOwner);
        this.observer.push(airportSecurity);
    }

    notifyAll() {
        this.subscribe();
        for (let i of this.observer) {
            console.log(i,"Informed");
        }
        return true;
    }
}
module.exports = new Observer();
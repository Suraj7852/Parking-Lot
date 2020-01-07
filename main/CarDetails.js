let hours = new Date().getHours();
let minutes = new Date().getMinutes();
let seconds = new Date().getSeconds();
const CarDetails = {
    name: null,
    car: null,
    color: null,
    brand: null,
    time: hours + " " + minutes + " " + seconds
};
module.exports = CarDetails;
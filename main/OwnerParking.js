class OwnerParking {
    isFull(full) {
        return full;
    }

    notifyOwner(status) {
        if (status){
            console.log("space avalible");
            return true;
        }
    }
}

module.exports = new OwnerParking;
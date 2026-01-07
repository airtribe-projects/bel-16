
class Address {
    constructor(street, city) {
        this.street = street;
        this.city = city;
    }

    getCity() {
        return this.city;
    }
}


// Dev 1: Owns code
class Customer {
    constructor(name, currentAddress, permenentAddress) {
        this.name = name;
        this.address = permenentAddress;
        this.currentAddress = currentAddress;
    }

    getAddress() {
        return this.address;
    }

    getCurrentAddress() {
        return this.currentAddress;
    }
}

// PM --> Customer could have 2 addreses, One Current Address, another a permenent address

// Dev 2: Owns code
class Order {
    constructor(customer) {
        this.customer = customer;
    }

    // Address where the user is currently residing
    printShipingCity() {
        console.log( this.customer.address.city);
    }
}

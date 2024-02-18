// class Buyer {
//     constructor(name, phone) {
//         this.name = name;
//         this.phone = phone;
//     }
// }
// class Seller extends Buyer {
//     constructor(name, phone, id, address) {
//         super(name, phone);
//         this.id = id;
//         this.address = address;
//     }
// }
// let info = new Seller('Rose', 56745345, 335, 'Toronto, Canada');
// console.log(info);


class Car {
    constructor(model, brand) {
        this.model = model;
        this.brand = brand;
    }
}

class Bus extends Car {
    constructor(poribohon, year, model, brand) {
        super(model, brand);
        this.poribohon = poribohon;
        this.year = year;
    }
}

let result = new Bus('Hanif', 2015, 'Civic', 'Honda');
console.log(result);
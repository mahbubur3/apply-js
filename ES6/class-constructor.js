class Student {
    id = 163895;
    name = 'Mahbub';
}
let info = new Student();
console.log(info);

// class Student {
//     constructor(id, name) {
//         this.id = id;
//         this.name = name;
//     }
// }
// let info = new Student(163895, 'Mahbub'); // create an object
// console.log(info);

// class Car {
//     constructor(model, brand, year) {
//         this.modelName = model;
//         this.brandName = brand;
//         this.modelYear = year;
//     }
// }
// let myCar = new Car('Civic', 'Honda', 2022);
// let hisCar = new Car('Premio', 'Toyota', 2019);
// console.log(myCar);
// console.log(hisCar);

class Car {
    constructor(model, brand, year) {
        this.modelName = model;
        this.brandName = brand;
        this.modelYear = year;
    }
    drive() {
        return 'Drive the Civic!!';
    }
}
let myCar = new Car('Civic', 'Honda', 2022);
let hisCar = new Car('Premio', 'Toyota', 2019);
console.log(myCar.drive());
console.log(hisCar);
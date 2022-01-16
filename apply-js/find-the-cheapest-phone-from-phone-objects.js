let samsungPhones = [
    { brand: "Samsung", model: "Galaxy S21 Ultra", price: 130000 },
    { brand: "Samsung", model: "Galaxy S21FE", price: 69000 },
    { brand: "Samsung", model: "Galaxy S10+", price: 94000 },
    { brand: "Samsung", model: "Galaxy S20 Ultra", price: 99000 },
    { brand: "Samsung", model: "Galaxy Note10+", price: 85000 },
    { brand: "Samsung", model: "Galaxy Note20 Ultra", price: 120000 },
    { brand: "Samsung", model: "Galaxy S20FE", price: 65000 }
]
let cheapest = samsungPhones[0];
for (let phone of samsungPhones) {
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}
console.log("My phone:", cheapest)
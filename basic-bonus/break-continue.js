/*
let smartphones = [
    { brand: "samsung", model: "Galaxy S21 Ultra", price: 130000 },
    { brand: "apple", model: "iPhone 13Pro", price: 150000 },
    { brand: "xiaomi", model: "Mi11 Ultra", price: 89000 },
    { brand: "google", model: "pixel 6 Pro", price: 69000 },
    { brand: "samsung", model: "Galaxy A12", price: 13000 },
    { brand: "xiaomi", model: "Redmi Note10 Pro", price: 20000 }
];
for (let phone of smartphones) {
    if (phone.price < 45000) {
        break;
    }
    console.log(phone);
}
*/


let smartphones = [
    { brand: "samsung", model: "Galaxy S21 Ultra", price: 130000 },
    { brand: "apple", model: "iPhone 13Pro", price: 150000 },
    { brand: "xiaomi", model: "Mi11 Ultra", price: 89000 },
    { brand: "google", model: "pixel 6 Pro", price: 69000 },
    { brand: "samsung", model: "Galaxy A12", price: 13000 },
    { brand: "xiaomi", model: "Redmi Note10 Pro", price: 20000 }
];
for (let phone of smartphones) {
    if (phone.price < 45000) {
        continue;
    }
    console.log(phone);
}

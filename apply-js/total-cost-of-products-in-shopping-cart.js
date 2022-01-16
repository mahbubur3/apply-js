let products = [
    { name: "watch", price: 950 },
    { name: "t-shirt", price: 550 },
    { name: "panjabi", price: 700 },
    { name: "wallet", price: 500 },
    { name: "shirt", price: 1200 }
]
let totalPrice = 0;
for (let product of products) {
    totalPrice = totalPrice + product.price;
}
console.log(totalPrice);


let cart = [
    { name: "watch", price: 950, quantity: 1 },
    { name: "t-shirt", price: 350, quantity: 3 },
    { name: "panjabi", price: 700, quantity: 2 },
    { name: "wallet", price: 500, quantity: 1 },
    { name: "shirt", price: 1200, quantity: 2 }
]
let cartTotal = 0
for (let product of cart) {
    let totalPrice = product.price * product.quantity;
    cartTotal = cartTotal + totalPrice;
}
console.log(cartTotal);
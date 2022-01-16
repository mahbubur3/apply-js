// object holo jekhane onek boisisto rakha jay....

// var mobileInfo = {
//     brand : "Samsung",
//     modelName : "Galaxy J7",
//     ram : "3GB",
//     price : 29000
// };
// console.log(mobileInfo);


// var bookInfo = {
//     title : "Never Stop Learning", // title, author, price, brand egula hocche property.
//     author : "Ayman Sadiq",
//     publisher : "Oddhoyon",
//     price : 200
// }
// console.log(bookInfo);

// show exactly this value....
// var desktop = {
//     cpu: "i5-10400",
//     mb: "B460",
//     ram: "16GB",
//     storage: "240GB",
//     price: 6000
// }
// // console.log(desktop);
// // console.log(desktop.mb);
// console.log(desktop.price);


// set/change value...
// var desktop = {
//     cpu: "i5-10400",
//     mb: "B460",
//     ram: "16GB",
//     storage: "240GB",
//     price: 60000
// }
// desktop.price = 65000;
// console.log(desktop);


var desktop = {
    cpu: "i5-10400",
    mb: "B460",
    ram: "16GB",
    storage: "240GB",
    price: 60000
}
desktop.storage = "512GB";
console.log(desktop);

desktop["storage"] = "1tb";
console.log(desktop);

var storageProperty = "storage";
desktop[storageProperty] = "2tb";
console.log(desktop);
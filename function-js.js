// function brandName() { // function create/declaration
//     console.log("Audi");
//     console.log("Mercedes");
//     console.log("Honda");
// }
// brandName(); // call the function


// function bookList() {
//     console.log("Time Management");
//     console.log("Sell Me This Pen");
// }
// bookList();


// // ___** with parametter **___
// function buyPen(taka) {
//     console.log("pen price:", taka);
// }
// buyPen(10);


// function buyDesktop(price) {
//     console.log("Price:", price);
// }
// var desktopPrice = 50000;
// buyDesktop(desktopPrice);


// // **** return ****
// function buyLaptop(price)  {
//     var laptopPrice = 950;
//     var myRestMoney = price - laptopPrice;
//     return myRestMoney;
// }
// var myMoney = buyLaptop(1000);
// console.log(myMoney);


// function bringPen(myMoney) {
//     var penPrice = 10;
//     var penQuantity = myMoney / penPrice;
//     return penQuantity;
// }
// var myMoney = 50;
// var result = bringPen(myMoney);
// console.log(result);


// // multiple parameter
// function subtraction(num1, num2) {
//     var total = num1 - num2;
//     return total;
// }
// result = subtraction(10, 8);
// console.log(result);

// function addNumbers(num1, num2) {
//     var total = num1 + num2;
//     return total;
// }
// var firstNumber = 10;
// var secondNumber = 40;
// var result = addNumbers(firstNumber, secondNumber);
// console.log(result);


// ---------- unlimited parameters using arguments
function addNumbers() {
    let result = 0;
    for (const num of arguments) {
        result = result + num;
    }
    return result;
}
const total = addNumbers(4, 5, 9, 2, 3, 8);
console.log(total);
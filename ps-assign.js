// problem - 01
/* function seerToMon(seer) {
    if (seer < 1) {
        return "please enter the number above 1";
    }
    else if (typeof (seer) != "number") {
        return "string or boolean not allow, please give a number!";
    }
    let mon = seer / 40;
    return mon;
}
let monQuantity = seerToMon("50");
console.log(monQuantity);
 */

// problem - 02
/*
function totalSales(shirtsSaleQuantity, pantsSaleQuantity, shoesSaleQuantity) {
    const perShirtPrice = 100;
    const perPantPrice = 200;
    const perShoePrice = 500;
    let shirtCost = shirtsSaleQuantity * perShirtPrice;
    let pantCost = pantsSaleQuantity * perPantPrice;
    let shoeCost = shoesSaleQuantity * perShoePrice;
    let total = shirtCost + pantCost + shoeCost;
    return total;
}
let totalSalesToday = totalSales(4, 6, 9);
console.log(totalSalesToday);
 */


// problem - 04

function perfectFriend(friendsName) {
    if (typeof (friendsName) != "object") {
        return "please give object!"
    }
    let largestName = 0;
    for (let i = 0; i < friendsName.length; i++) {
        let element = friendsName[i];
        if (element.length == 5) {
            largestName = element;
            break;
        }
    }
    return largestName;
}
let friendsName = ["siddik", "sakib", "marjan", "samaun", "pollov"];
let result = perfectFriend(friendsName);
console.log(result);

const myName = 'Hellow World'
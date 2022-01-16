// find largest number between two numbers...

let a = 80;
let b = 60;
if (a > b) {
    console.log("a is largest");
} else {
    console.log("b is largest");
}

let x = 30;
let y = 80;
let z = 20;
if (x > y && x > z) {
    console.log("x is largest");
} else if (y > x && y > z) {
    console.log("y is largest");
} else {
    console.log("z is largest");
}


function smallNumber(x, y, z) {
    if (x < y && x < z) {
        return x;
    } else if (y < x && y < z) {
        return y;
    } else {
        return z;
    }
}
let check = smallNumber(4, 5, 2);
console.log(check);

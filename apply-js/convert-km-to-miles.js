function kmToMiles(miles) {
    var result = miles * 1.60934; // 1 mile = 1.60934 kilometre
    return result;
}
var convert = kmToMiles(10);
console.log("After convert =", convert);

var convert2 = kmToMiles(20);
console.log(convert2);
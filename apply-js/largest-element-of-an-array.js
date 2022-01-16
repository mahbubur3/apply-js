
function largestEle(items) {
    let largest = items[0]
    for (let i = 0; i < items.length; i++) {
        let element = items[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}
let numbers = [56, 34, 78, 23, 67, 12];
let result = largestEle(numbers);
console.log(result);


function findLargest(ages) {
    let lar = ages[0];
    for (let i = 0; i < ages.length; i++) {
        let number = ages[i];
        if (number > lar) {
            lar = number;
        }
    } 
    return lar;
}
let ageList = [5, 7, 2, 9, 3, 2];
let result = findLargest(ageList);
console.log(result);

















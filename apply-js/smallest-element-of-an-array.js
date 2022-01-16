function findSmallest(ages) {
    let small = ages[0];
    for (let i = 0; i < ages.length; i++) {
        let number = ages[i];
        if (number < small) {
            small = number;
        }
    }
    return small;
}
let ageList = [5, 6, 4, 9, 7, 2];
let result = findSmallest(ageList);
console.log(result);
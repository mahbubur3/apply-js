let numbers = [5, 4, 3, 5, 6, 4, 3, 9, 3, 2, 7, 9];
function removeDuplicate(numbers) {
    const unique = [];
    for (const element of numbers) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}
let result = removeDuplicate(numbers);
console.log(result);


let studentsNames = ["Rose", "Jack", "John", "Emily", "Adam", "Sam", "John", "Emily", "Adam"];
function removeDuplicate(studentsNames) {
    const unique = [];
    for (const name of studentsNames) {
        if (unique.indexOf(name) == -1) {
            unique.push(name);
        }
    }
    return unique;
}
let result = removeDuplicate(studentsNames);
console.log(result);
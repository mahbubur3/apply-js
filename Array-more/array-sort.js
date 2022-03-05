// ----------- sort
// const numbers = [5, 6, 3, 1, 8, 7, 2, 4];
// console.log(numbers.sort());

// const numbers = [5, 6, 3, 1, 8, 7, 2, 4];
// const sortedNumbers = numbers.sort();
// console.log(sortedNumbers);

// const alpa = ['b', 'e', 'a', 'c', 'd'];
// console.log(alpa.sort());

// const names = ['jack', 'rose', 'alex', 'cook', 'bell'];
// console.log(names.sort());


//---------- reverse
// const numbers = [5, 6, 3, 1, 8, 7, 2, 4];
// console.log(numbers.reverse());

// const names = ['jack', 'rose', 'alex', 'cook', 'bell'];
// const reversedNames = names.reverse();
// console.log(reversedNames);


//--------- sort and reverse
// const numbers = [5, 6, 3, 1, 8, 7, 2, 4];
// const sortedReversed = numbers.sort().reverse();
// console.log(sortedReversed);


//----------- double number sort
// const numbers = [56, 78, 43, 2, 8, 66, 3, 98];
// const sortedNumbers = numbers.sort();
// console.log(sortedNumbers);
// ulta palta output dibe. karon javascript evabe sort korte pare nah onnano language er moto.abar single number diye korte pare ja upore code kora ache. double number ke sorting korte hole function use korte hoy ja niche dekhanu holo...

const numbers = [56, 78, 43, 2, 8, 66, 3, 98];
const sortedNumbers = numbers.sort(function (a, b) {
    return a - b;
})
console.log(sortedNumbers);
// var i = 0;
// while (i < 10) {
//     console.log(i);
//     if(i == 5) {
//         break;
//     }
//     i++;
// }

// var num = 1;
// while (num < 20) {
//     console.log(num);
//     if(num == 9) { // 9 er soman holei theme jabe loop
//         break;
//     }
//     num++;
// }

// for (var i = 1; i < 30; i++) {
//     console.log(i);
//     if(i == 7) {
//         break;
//     }
// }

// for (var i = 1; i < 30; i++) {
//     console.log(i);
//     if(i > 7) { // 7 er boro howwa matroi loop theme jabe...
//         break;
//     }
// }

// var numbers = [56, 34, 89, 34, 90, 54, 9, 10];
// for (var i = 0; i < numbers.length; i++) {
//     var number = numbers[i];
//     console.log(number);
//     if (number > 80) {
//         break;
//     }
// }

// continue...
var numbers = [56, 34, 89, 44, 90, 54, 9, 10];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 80) {
        continue;
    }
    console.log(number);
}


function leapYear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        console.log(year + " is a leap year");
    } 
    else {
        console.log(year + " is not a leap year");
    }
}
var myYear = leapYear(2020);
console.log(myYear);
var herYear = leapYear(2021);
console.log(herYear);


function leapYear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        console.log(year + " is leap year..");
    } else {
        console.log(year + " is not a leap year..")
    }
}
var enterYear = leapYear(2017);
console.log(enterYear);
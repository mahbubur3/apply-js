var mathMarks = 76;
if (mathMarks >= 80 && mathMarks <= 100) {
    console.log("You got A+");
} else if (mathMarks >= 70 && mathMarks <= 79) {
    console.log("You got A");
} else if (mathMarks >= 60 && mathMarks <= 69) {
    console.log("You got A-");
} else if (mathMarks >= 50 && mathMarks <= 59) {
    console.log("You got B");
} else if (mathMarks >= 40 && mathMarks <= 49) {
    console.log("You got C");
} else if (mathMarks >= 33 && mathMarks <= 39) {
    console.log("You got D");
} else {
    console.log("You are fail!")
}

// using function 
function calculateGrade(english) {
    if (english >= 80 && english <= 100) {
        return "A+";    
    } else if (english >= 70 && english <= 79) {
        return "A";
    } else if (english >= 60 && english <= 69) {
        return "A-";
    } else if (english >= 50 && english <= 59) {
        return "B";
    } else if (english >= 40 && english <= 49) {
        return "C";
    } else if (english >= 33 && english <= 39) {
        return "D";
    } else {
        return "Fail"
    }
}
myResult = calculateGrade(76);
console.log(myResult);
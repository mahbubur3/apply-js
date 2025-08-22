function totalFine(fare) {
    if (typeof fare !== "number" || fare <= 0) return 'Invalid';
    return fare + fare * (20 / 100) + 30;
}


function onlyCharacter(str) {
    if (typeof str !== "string") return "Invalid";
    return str.split(" ").join("").toUpperCase();
}


function bestTeam(player1, player2) {
    if (typeof player1 !== "object"|| typeof player2 !== "object") {
        return "Invalid";
    }

    const playerOneResult = player1.foul + player1.cardY + player1.cardR;
    const playerTwoResult = player2.foul + player2.cardY + player2.cardR;

    if (playerOneResult === playerTwoResult) {
        return "Tie";
    } else if (playerOneResult < playerTwoResult) {
        return player1.name;
    } else {
        return player2.name;
    }
}


function isSame(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }

    if (arr1.length === arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    }
    return false;
}


function resultReport(marks) {
    if (!Array.isArray(marks)) return "Invalid";

    if (marks.length === 0) {
        return { finalScore: 0, pass: 0, fail: 0 };
    }

    let sum = 0, pass = 0, fail = 0;
    for (let mark of marks) {
        sum += mark;
        if (mark >= 40) {
            pass++;
        } else {
            fail++;
        }
    }

    const avg = Math.round(sum / marks.length);

    return { finalScore: avg, pass: pass, fail: fail }
}
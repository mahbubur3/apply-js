// function bigFriend(friends) {
//     let big = friends[0];
//     for (const friend of friends) {
//         if (friend.length > big.length) {
//             big = friend;
//         }
//     }
//     return big;
// }
// const myFriends = ['rahi', 'tiger', 'jack', 'lion'];
// const myBigFriend = bigFriend(myFriends);
// console.log(myBigFriend);


// function bigFriend(friends) {
//     if (Array.isArray(friends) == false) {
//         return 'please provide an array!'
//     }
//     let big = friends[0];
//     for (const friend of friends) {
//         if (friend.length > big.length) {
//             big = friend;
//         }
//     }
//     return big;
// }
// const myFriends = ['rahi', 'john', 'jackma', 'carolina', 'alex'];
// const myBigFriend = bigFriend(3456);
// console.log(myBigFriend);


// const myFriends = ['rahi', 'john', 'jackma', 'carolina', 'alex'];
// if (myFriends.indexOf('john') != -1) {
//     console.log('Yeap');
// }

// const myFriends = ['rahi', 'john', 'jackma', 'carolina', 'alex'];
// if (myFriends.indexOf('rose') != -1) {
//     console.log('Yeap');
// } else {
//     console.log('Not found');
// }

const myFriends = ['rahi', 'john', 'jackma', 'carolina', 'alex'];
if (myFriends.includes('alex')) {
    console.log('found');
} else {
    console.log('not found');
}
// Nested API....
/* 
let loadUsers = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then(data => displayUsers(data))
}

loadUsers();

let displayUsers = data => {
    let users = data.results;
    let userContainer = document.getElementById('user-container');
    for (let user of users) {
        let p = document.createElement('p');
        p.innerText = user.email;
        userContainer.appendChild(p);
    }
}
 */

let loadUsers = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then(data => displayUsers(data))
}

loadUsers();

let displayUsers = data => {
    let users = data.results;
    let userContainer = document.getElementById('user-container');
    for (let user of users) {
        // console.log(user);
        let p = document.createElement('p');
        p.innerText = `Name: ${user.name.first} ${user.name.last} , Email: ${user.email}`;
        userContainer.appendChild(p);
    }
}
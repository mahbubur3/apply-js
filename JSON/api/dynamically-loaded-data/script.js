function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data))
}

// function displayUsers(data) {
//     for (let user of data) {
//         console.log(user);
//     }
// }

function displayUsers(data) {
    let ul = document.getElementById('users');
    for (let user of data) {
        let li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}
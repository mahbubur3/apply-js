function loadUsers() {
    fetch('https://randomuser.me/api/?results=500')
        .then(response => response.json())
        .then(data => displayUsers(data))
}

loadUsers();

function displayUsers(info) {
    const users = info.results;
    const container = document.getElementById('container');
    for (const user of users) {
        const div = document.createElement('div');
        div.classList.add('random-user');
        div.innerHTML = `
            <img src="${user.picture.medium}">
            <p>Name: ${user.name.first} ${user.name.last}</p>
            <p>Email: ${user.email}</p>
            <p>Address: ${user.location.city}, ${user.location.state}, ${user.location.postcode}, ${user.location.country}</p>
        `;
        container.appendChild(div);
    }
}
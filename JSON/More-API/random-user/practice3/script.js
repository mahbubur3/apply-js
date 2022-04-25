const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then(data => showUsers(data))
}

const showUsers = data => {
    const users = data.results;
    const userContainer = document.getElementById('user-container');
    for (const user of users) {
        const p = document.createElement('p');
        p.innerText = `Name: ${user.name.first} ${user.name.last}, Email: ${user.email}`;
        userContainer.appendChild(p);
    }
}
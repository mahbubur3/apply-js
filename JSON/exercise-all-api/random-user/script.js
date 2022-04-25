const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=20')
        .then(response => response.json())
        .then(data => displayUsers(data))
}

loadUsers();

const displayUsers = (users) => {
    const allUser = users.results;
    const container = document.getElementById('container');
    // console.log(users.results);
    for (const user of allUser) {
        const p = document.createElement('p');
        p.innerText = `Name: ${user.name.title} ${user.name.first} ${user.name.last}, Phone: ${user.phone}, Email: ${user.email}`;
        container.appendChild(p);
    }
}

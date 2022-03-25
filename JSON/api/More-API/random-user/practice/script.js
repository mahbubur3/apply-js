let loadUserInfo = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then(data => displayUserInfo(data))
}
loadUserInfo();

let displayUserInfo = (usersData) => {
    let users = usersData.results;
    let elementBody = document.getElementById('element-body');
    for (let user of users) {
        let p = document.createElement('p');
        p.innerText = `Name: ${user.name.first} ${user.name.last}, Location: ${user.location.city}, ${user.location.country}`;
        elementBody.appendChild(p);
    }
}
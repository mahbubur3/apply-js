let loadInformation = () => {
    fetch('https://randomuser.me/api/?results=20')
        .then(response => response.json())
        .then(data => displayInformation(data))
}

loadInformation();

let displayInformation = (usersData) => {
    let userBody = document.getElementById('user-body');
    let users = usersData.results;
    for (let user of users) {
        let p = document.createElement('p');
        p.style.color = 'green';
        p.style.border = '1px solid red';
        p.style.padding = '5px';
        p.innerText = `Name: ${user.name.first} ${user.name.last}, Email: ${user.email}, Phone: ${user.phone}, Address: ${user.location.city}, ${user.location.country}, ${user.location.postcode}, Date of Birth: ${user.dob.date}, Gender: ${user.gender}`;
        userBody.appendChild(p);
    }

}
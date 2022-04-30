/* fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => console.log(data)) */

/*     
const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => displayComments(data))
}

loadComments();

const displayComments = (comments) => {
    const container = document.getElementById('container');
    comments.forEach(comment => {
        // console.log(comment);
        const div = document.createElement('div');
        div.innerHTML = `
            <p>${comment.body}</p>
            <button onclick="loadDetailsById('${comment.id}')">About</button>
        `;
        container.appendChild(div);
    })
}

const loadDetailsById = id => {
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayDetails(data[0]))
}

const displayDetails = comment => {
    const details = document.getElementById('details');
    details.innerHTML = `
        <p>ID: ${comment.id}</p>
        <p>Name: ${comment.name}</p>
        <p>Email: ${comment.email}</p>
    `;
} 
*/

/* 
function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUsers(data))
}

const displayUsers = users => {
    users.forEach(user => {
        console.log(user);
    })
}
 */
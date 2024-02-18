/*
// load users
function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data))
}

function displayUsers(data) {
    for (let user of data) {
        console.log(user);
    }
}
*/



// load posts
const loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPosts(data))
}

const displayPosts = (posts) => {
    for (const post of posts) {
        console.log(post);
    }
}
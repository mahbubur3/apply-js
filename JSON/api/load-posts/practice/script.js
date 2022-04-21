const loadPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => showPosts(data))
}

loadPost();

const showPosts = (posts) => {
    for (const post of posts) {
        console.log(post.title);
    }
}
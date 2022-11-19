document.getElementById('submit-comment').addEventListener('click', () => {
    // console.log('clicked');

    const commentBox = document.getElementById('add-new-comment');
    const userComment = commentBox.value;

    const newComment = document.createElement('p');
    newComment.innerText = userComment;

    const addCommentInUI = document.getElementById('comment-container');
    addCommentInUI.appendChild(newComment);

    commentBox.value = '';
})
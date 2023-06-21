// post.js

// Edit button click handler
const editButton = document.getElementById('edit-button');
const postTitle = document.getElementById('post-title');
const postText = document.getElementById('post-text');

editButton.addEventListener('click', () => {
    postTitle.contentEditable = true;
    postText.contentEditable = true;
    postTitle.classList.add('editable');
    postText.classList.add('editable');
    editButton.innerHTML = 'Save <i class="fas fa-save"></i>';
});

// Save button click handler
const saveButton = document.createElement('button');
saveButton.innerHTML = 'Save <i class="fas fa-save"></i>';
saveButton.id = 'save-button';
saveButton.style.display = 'none';

editButton.parentNode.insertBefore(saveButton, editButton.nextSibling);

saveButton.addEventListener('click', () => {
    postTitle.contentEditable = false;
    postText.contentEditable = false;
    postTitle.classList.remove('editable');
    postText.classList.remove('editable');
    editButton.innerHTML = 'Edit <i class="fas fa-edit"></i>';
});

// Like button click handler
const likeButton = document.getElementById('like-button');
const likeCount = document.getElementById('like-count');

let likeCountValue = 0;

likeButton.addEventListener('click', () => {
    likeCountValue++;
    likeCount.innerHTML = `${likeCountValue} ${likeCountValue === 1 ? 'person' : 'people'} like this!`;
    likeButton.innerHTML = 'Liked!';
    likeButton.disabled = true;
});

// Comment button click handler
const commentInput = document.getElementById('comment-input');
const commentButton = document.getElementById('comment-button');
const allComments = document.querySelector('.all-comments');

commentButton.addEventListener('click', () => {
    const commentText = commentInput.value.trim();
    if (commentText !== '') {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = commentText;
        allComments.insertBefore(commentElement, allComments.firstChild);
        commentInput.value = '';
    }
});

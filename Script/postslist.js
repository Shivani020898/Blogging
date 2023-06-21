// JavaScript code
const deleteIcons = document.querySelectorAll('.delete-icon');
const deleteModal = document.getElementById('delete-modal');
const deleteYesButton = document.getElementById('delete-yes');
const deleteNoButton = document.getElementById('delete-no');

deleteIcons.forEach((deleteIcon) => {
    deleteIcon.addEventListener('click', () => {
        deleteModal.style.display = 'block';
    });
});

deleteNoButton.addEventListener('click', () => {
    deleteModal.style.display = 'none';
});

deleteYesButton.addEventListener('click', () => {
    // Perform the delete action here
    // Remove the post from the DOM or make an API call to delete the post
    // After deleting, rearrange the posts if necessary
    deleteModal.style.display = 'none';
});

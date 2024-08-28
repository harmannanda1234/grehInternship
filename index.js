document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const notify = document.querySelector('.notify');
    // const home = document.querySelector('.home');
    // const complaints = document.querySelector('.complaints');
    // const visitors = document.querySelector('.visitors');
    // const suggestions = document.querySelector('.suggestions');
    

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active')
}); 

    notify.addEventListener('click', () => {
        window.location.href = '/notifications';
    });

    // home.addEventListener('click', () => {
    //     window.location.href = '/#';
    // });
    // complaints.addEventListener('click', () => {
    //     window.location.href = '/complaints';
    // });
    // visitors.addEventListener('click', () => {
    //     window.location.href = '/suggestion';
    // });
    // suggestions.addEventListener('click', () => {
    //     window.location.href = '/suggestions';
    // });
});
document.addEventListener('DOMContentLoaded', function() {
    console.log('Post loaded');
});

document.getElementById('post-button').addEventListener('click', function() {
    const postContent = document.getElementById('post-content').value;

    if (postContent.trim() !== "") {
        const postContainer = document.getElementById('posts-container');
        const newPost = document.createElement('div');
        newPost.classList.add('post');
        newPost.textContent = postContent;

        postContainer.prepend(newPost);

        document.getElementById('post-content').value = '';
    } else {
        alert('Please write something before posting.');
    }
});

// document.getElementById('postPhotoForm').addEventListener('submit', async (e) => {
//     e.preventDefault();

//     const photoInput = document.getElementById('photo');
//     const caption = document.getElementById('caption').value;
//     const messageDiv = document.getElementById('message');

//     if (photoInput.files.length === 0) {
//         messageDiv.textContent = 'Please choose a photo to upload.';
//         return;
//     }

//     const formData = new FormData();
//     formData.append('photo', photoInput.files[0]);
//     formData.append('caption', caption);

//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
//             method: 'POST',
//             body: formData
//         });

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const data = await response.json();

//         if (data.success) {
//             messageDiv.style.color = 'green';
//             messageDiv.textContent = 'Photo posted successfully!';
//             // Optionally reset the form here
//             document.getElementById('postPhotoForm').reset();
//         } else {
//             messageDiv.style.color = 'red';
//             messageDiv.textContent = 'Failed to post photo. Please try again.';
//         }
//     } catch (error) {
//         messageDiv.style.color = 'red';
//         messageDiv.textContent = `Error: ${error.message}`;
//     }
// });

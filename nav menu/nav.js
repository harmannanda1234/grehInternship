// load-nav.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('/src/nav menu/nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading navigation menu:', error));
});

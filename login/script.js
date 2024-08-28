// // document.getElementById('loginForm').addEventListener('submit', function(event) {
// //     event.preventDefault(); // Prevent the default form submission

// //     const userId = document.getElementById('userId').value;
// //     const password = document.getElementById('password').value;
// //     const cmd ="SignIn";
// //     // const cmd ="SignUp"
// //     // Clear previous error messages
// //     document.getElementById('userIDError').textContent = '';
// //     document.getElementById('passwordError').textContent = '';
// //     document.getElementById('error-message').textContent = '';

// //     // Basic validation
// //     if (userId === '' || password === '') {
// //         document.getElementById('error-message').textContent = 'Both fields are required.';
// //         return;
// //     }
// //     // const cmd= 'SignUp';
// //     // Create the data object
// //     const data = { userId: userId, password: password , cmd:cmd };

// //     // Fetch API to send login request
// //     fetch('https://ncrtc.in/fcgi/MobileAction', { 
// //         method: 'POST',
// //         // cmd :'SignUp',
// //         headers: {
// //             'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(data),
// //     })
// //     .then(response => {
// //         // Check if the response is OK and has JSON content
// //         if (!response.ok) {
// //             throw new Error('Network response was not ok');
// //         }
// //         return response.text(); // Parse the JSON from the response
// //     })
// //     .then(data => {
// //         if (data.success) { // Adjust this based on your API's response structure
// //             alert('Login successful!');
// //             window.location.href = "/index.html"; // Redirect to the dashboard or a different page upon success
// //         } else {
// //             document.getElementById('error-message').textContent = data.message || 'Login failed.';
// //         }
// //     })
// //     .catch(error => {
// //         console.log('Error:', error);
// //         document.getElementById('error-message').textContent = 'An error occurred. Please try again.';
// //     });
// // });
// async function login() {
//     const url = 'https://ncrtc.in/fcgi/MobileAction'; 
//     const userId = document.getElementById('userid').value;
//     const password = document.getElementById('password').value;

//     const data = {
//         cmd: 'SignIn',
//         userid: userId,
//         password: password
//     };

//     try {
//         const response = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         });

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const result = await response.json();
//         if (result.error) {
//             alert(result.error);
//         } else {
//             console.log(result);
//             // Process the result as needed
//             alert('Login successful!');
//             window.location.href = "/index.html";
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         alert('Login failed!');
//     }
// }

async function sendSignInRequest() {
    // Create a new FormData object

    const userid= document.getElementById('userid');
    const password = document.getElementById('password');
    const formData = new FormData();
    formData.append('cmd', 'SignIn');
    formData.append('userid', userid);
    formData.append('password', password);
 
    try {
        const response = await fetch('https://ncrtc.in/fcgi/MobileAction', {
            method: 'POST',
            body: formData,
        });
 
        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
 
        // Parse the response as JSON
        const data = await response.json();
        alert('Success:', data);
        window.location.href='../../mainindex.html';
    } catch (error) {
        alert('Error:', error);
    }
}
 
// Call the function
sendSignInRequest();

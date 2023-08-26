document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Generate random access token
    const accessToken = generateAccessToken();

    // Create user object
    const user = {
        username: username,
        password: password,
        accessToken: accessToken,
    };

    // Save user to localStorage
    localStorage.setItem('user', JSON.stringify(user));

    // Show success message
    const successMessage = document.getElementById('success');
    successMessage.textContent = 'Signup successful! Redirecting...';
    successMessage.style.display = 'block';

    setTimeout(() => {
        window.location.href = '/profile.html';
    }, 2000);
});

function generateAccessToken() {
    // Generate random 16-byte string (this is a simple example)
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

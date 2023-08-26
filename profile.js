document.addEventListener('DOMContentLoaded', function () {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken) {
        const profileInfo = document.getElementById('profileInfo');
        profileInfo.textContent = `Username: ${user.username}`;

        document.getElementById('logout').addEventListener('click', function () {
            // Clear user data from localStorage
            localStorage.removeItem('user');
            window.location.href = '/signup.html';
        });
    } else {
        // Redirect to signup if accessToken is not present
        if (!window.location.href.includes('/signup.html')) {
            window.location.href = '/signup.html';
        }
    }
});

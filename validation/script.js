// Function to validate the registration form
function validateForm() {
    let isValid = true;

    // Get the values from the form fields
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Reset error messages
    document.getElementById('usernameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';

    // Username validation
    const usernameError = document.getElementById('usernameError');
    if (username.length < 3 || username.length > 20) {
        usernameError.innerText = 'Username must be between 3 and 20 characters.';
        isValid = false;
    } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
        usernameError.innerText = 'Username must contain only letters and numbers.';
        isValid = false;
    }

    // Email validation
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        emailError.innerText = 'Please enter a valid email address.';
        isValid = false;
    }

    // Password validation
    const passwordError = document.getElementById('passwordError');
    if (password.length < 8) {
        passwordError.innerText = 'Password must be at least 8 characters.';
        isValid = false;
    } else if (!/[A-Z]/.test(password)) {
        passwordError.innerText = 'Password must contain at least one uppercase letter.';
        isValid = false;
    } else if (!/[0-9]/.test(password)) {
        passwordError.innerText = 'Password must contain at least one number.';
        isValid = false;
    } else if (!/[!@#$%^&*()_+]/.test(password)) {
        passwordError.innerText = 'Password must contain at least one special character.';
        isValid = false;
    }

    return isValid;
}

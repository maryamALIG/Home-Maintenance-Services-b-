document.addEventListener('DOMContentLoaded', (event) => {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('loginButton');

    function validateInputs() {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username !== '' && password !== '') {
            loginButton.disabled = false;
        } else {
            loginButton.disabled = true;
        }
    }

    usernameInput.addEventListener('input', validateInputs);
    passwordInput.addEventListener('input', validateInputs);
});
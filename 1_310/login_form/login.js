document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const username = loginForm.username.value.trim();
        const password = loginForm.password.value.trim();

        // Validate username
        if (username === "") {
            alert("Username is required.");
            return;
        }

        // Validate password
        if (password === "") {
            alert("Password is required.");
            return;
        }

        alert("Login successful!"); 
        loginForm.submit(); 
    });
});
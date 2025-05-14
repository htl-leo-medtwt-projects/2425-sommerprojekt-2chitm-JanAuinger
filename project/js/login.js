document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("loginBtn");
    const signupButton = document.getElementById("signupBtn");

    loginButton.addEventListener("click", () => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (!username || !password) {
            return;
        }

        const storedUser = localStorage.getItem(username);

        if (!storedUser) {
            return;
        }

        const userData = JSON.parse(storedUser);

        if (userData.password === password) {
            localStorage.setItem("currentUser", username);
            window.location.href = "../pages/profile.html"; 
        } else {
            alert("Falsches Passwort.");
        }
    });

    signupButton.addEventListener("click", () => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (!username || !password) {
            return;
        }

        if (localStorage.getItem(username)) {
            return;
        }

        localStorage.setItem(username, JSON.stringify({ username, password }));
    });
});
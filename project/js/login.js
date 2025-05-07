document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("loginBtn");
    const signupButton = document.getElementById("signupBtn");

    loginButton.addEventListener("click", () => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (!username || !password) {
            alert("Bitte fülle alle Felder aus.");
            return;
        }

        const storedUser = localStorage.getItem(username);

        if (!storedUser) {
            alert("Benutzer nicht gefunden. Bitte registriere dich zuerst.");
            return;
        }

        const userData = JSON.parse(storedUser);

        if (userData.password === password) {
            localStorage.setItem("currentUser", username);
            alert("Login erfolgreich!");
            window.location.href = "../pages/profile.html"; 
        } else {
            alert("Falsches Passwort.");
        }
    });

    signupButton.addEventListener("click", () => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (!username || !password) {
            alert("Bitte fülle alle Felder aus.");
            return;
        }

        if (localStorage.getItem(username)) {
            alert("Benutzername existiert bereits.");
            return;
        }

        localStorage.setItem(username, JSON.stringify({ username, password }));
        alert("Registrierung erfolgreich!");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const body = document.getElementById("profile");

    body.innerHTML = `
        <div class="navbar">
            <button class="nav-button">DISCOVER</button>
            <button class="nav-button">SHOWS</button>
            <button class="nav-button">ACTORS</button>
            <button class="nav-button">GAMES</button>
            <div class="user-icon">
                <img src="../media/UserIcon.png" alt="User Icon">
            </div>
        </div>

        <div class="profile-container">
            <h1>Willkommen bei deinem Profil!</h1>
            <p>Benutzername: <span id="usernameDisplay"></span></p>
            <button id="logoutBtn" class="logout-button">Logout</button>
        </div>
    `;

    // Zugriff auf den aktuellen Benutzer
    const usernameDisplay = document.getElementById("usernameDisplay");
    const currentUser = localStorage.getItem("currentUser");

    // Überprüfen, ob ein Benutzer eingeloggt ist
    if (!currentUser) {
        alert("Du bist nicht eingeloggt.");
        window.location.href = "../pages/startscreen.html"; // Weiterleitung zur Login-Seite
        return;
    }

    // Benutzernamen anzeigen
    usernameDisplay.textContent = currentUser;

    // Logout-Funktion
    document.getElementById("logoutBtn").addEventListener("click", () => {
        localStorage.removeItem("currentUser"); // Benutzer ausloggen
        window.location.href = "../pages/startscreen.html"; // Weiterleitung zur Login-Seite
    });
});
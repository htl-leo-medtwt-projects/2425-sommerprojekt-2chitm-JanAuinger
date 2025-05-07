document.addEventListener("DOMContentLoaded", function () {
    const navButtons = document.querySelectorAll(".nav-button");
    const pageLinks = {
        "DISCOVER": "discover.html",
        "SHOWS": "shows.html",
        "ACTORS": "actors.html",
        "GAMES": "games.html"
    };

    navButtons.forEach(button => {
        button.addEventListener("click", function () {
            const page = pageLinks[this.textContent]; 
            if (page) {
                window.location.href = page;
            }
        });
    });

    const discoverButtons = document.querySelectorAll(".discover_button");
    discoverButtons.forEach(button => {
        button.addEventListener("click", function () {
            if (this.textContent.includes("Games")) {
                window.location.href = "games.html";
            } else if (this.textContent.includes("Actors")) {
                window.location.href = "actors.html";
            }
        });
    });

    const userIcon = document.querySelector(".user-icon img");
    if (userIcon) {
        userIcon.addEventListener("click", function () {
            // Überprüfen, ob ein Benutzer eingeloggt ist
            const currentUser = localStorage.getItem("currentUser");
            if (!currentUser) {
                alert("Bitte logge dich ein, um dein Profil anzusehen.");
                window.location.href = "startscreen.html"; // Weiterleitung zur Login-Seite
            } else {
                window.location.href = "profile.html"; // Weiterleitung zur Profilseite
            }
        });
    }

    function navigateTo(url) {
        window.location.href = url;
    }
});
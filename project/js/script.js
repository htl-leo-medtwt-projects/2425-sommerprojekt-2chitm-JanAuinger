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

    function navigateTo(url) {
        window.location.href = url;
    }
});

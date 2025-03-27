document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".nav-button");

    const pageLinks = {
        "DISCOVER": "discover.html",
        "SHOWS": "shows.html",
        "ACTORS": "actors.html",
        "GAMES": "games.html"
    };

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const page = pageLinks[this.textContent]; 
            if (page) {
                window.location.href = page; 
            }
        });
    });
});

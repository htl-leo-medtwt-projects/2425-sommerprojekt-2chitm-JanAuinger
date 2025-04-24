document.addEventListener("DOMContentLoaded", function () {
    const body = document.getElementById("games");

    // HTML für die Navigation und Spieleauswahl
    body.innerHTML = `
        <div class="navbar">
            <button class="nav-button">DISCOVER</button>
            <button class="nav-button">SHOWS</button>
            <button class="nav-button">ACTORS</button>
            <button class="nav-button active">GAMES</button>
            <div class="user-icon">
                <img src="../media/UserIcon.png" alt="User Icon">
            </div>
        </div>

        <!-- Spieleauswahl -->
        <div id="games-landing" class="games-landing">
            <div class="game-option" data-game="quiz">
                <h2>Quiz-Spiele</h2>
                <p>Teste dein Wissen über Serien, Filme und Schauspieler!</p>
            </div>
            <div class="game-option" data-game="memory">
                <h2>Memory-Spiel</h2>
                <p>Finde die passenden Paare mit Serien und Hauptcharakteren!</p>
            </div>
            <div class="game-option" data-game="whoami">
                <h2>Wer-bin-ich-Spiel</h2>
                <p>Errate den Schauspieler oder Charakter anhand der Hinweise!</p>
            </div>
        </div>

        <!-- Spielbereich -->
        <div id="game-area" class="hidden"></div>
    `;

    const gamesLanding = document.getElementById("games-landing");
    const gameArea = document.getElementById("game-area");

    // Event-Listener für die Spieleauswahl
    document.querySelectorAll(".game-option").forEach(option => {
        option.addEventListener("click", function () {
            const gameType = option.getAttribute("data-game");
            startGame(gameType);
        });
    });

    // Dynamisches Laden der Spiele
    function startGame(gameType) {
        // Spieleauswahl ausblenden
        gamesLanding.style.display = "none";

        // Spielbereich sichtbar machen
        gameArea.style.display = "block";

        // Spiel laden
        switch (gameType) {
            case "quiz":
                loadQuizGame();
                break;
            case "memory":
                loadMemoryGame();
                break;
            case "whoami":
                loadWhoAmIGame();
                break;
            default:
                gameArea.innerHTML = "<p>Das Spiel konnte nicht geladen werden.</p>";
        }
    }


    // Seite neu laden, um zur Auswahl zurückzukehren
    window.reloadPage = function () {
        gamesLanding.style.display = "flex"; // Wieder anzeigen
        gameArea.style.display = "none";    // Ausblenden
        gameArea.innerHTML = "";            // Inhalt leeren
    };
});
document.addEventListener("DOMContentLoaded", function () {
    const body = document.getElementById("games");

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

         <div class="games-landing">
            <div class="game-option">
                <h2>Quiz-Spiele</h2>
                <p>Teste dein Wissen über Serien, Filme und Schauspieler!</p>
            </div>
            <div class="game-option">
                <h2>Memory-Spiel</h2>
                <p>Finde die passenden Paare mit Schauspielern und Serien!</p>
            </div>
            <div class="game-option">
                <h2>Wer-bin-ich-Spiel</h2>
                <p>Errate den Schauspieler oder Charakter anhand der Hinweise!</p>
            </div>
        </div>
    `;

    const gamesLanding = document.getElementById("games-landing");
    const gameArea = document.getElementById("game-area");
    const gameContent = document.getElementById("game-content");

    // Event-Listener für die Buttons
    document.querySelectorAll(".game-button").forEach(button => {
        button.addEventListener("click", function () {
            const selectedGame = button.getAttribute("data-game");
            startGame(selectedGame);
        });
    });

    // Zurück-Button
    document.getElementById("back-to-selection").addEventListener("click", function () {
        gameArea.classList.add("hidden");
        gamesLanding.classList.remove("hidden");
        gameContent.innerHTML = ""; // Spielinhalt leeren
    });

    // Starte das ausgewählte Spiel
    function startGame(gameType) {
        gamesLanding.classList.add("hidden");
        gameArea.classList.remove("hidden");

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
                gameContent.innerHTML = "<p>Das Spiel konnte nicht geladen werden.</p>";
        }
    }

    // Quiz-Spiel laden
    function loadQuizGame() {
        gameContent.innerHTML = `
            <h2>Quiz-Spiel</h2>
            <p>Fragen kommen hier hin...</p>
            <button class="play-again-button">Nochmal spielen</button>
        `;
    }

    // Memory-Spiel laden
    function loadMemoryGame() {
        gameContent.innerHTML = `
            <h2>Memory-Spiel</h2>
            <p>Memory-Logik hier...</p>
            <button class="play-again-button">Nochmal spielen</button>
        `;
    }

    // Wer-bin-ich-Spiel laden
    function loadWhoAmIGame() {
        gameContent.innerHTML = `
            <h2>Wer-bin-ich-Spiel</h2>
            <p>Hinweise und Logik kommen hier hin...</p>
            <button class="play-again-button">Nochmal spielen</button>
        `;
    }
});
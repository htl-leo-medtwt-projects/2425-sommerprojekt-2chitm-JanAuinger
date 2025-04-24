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

        <div id="game-area" class="hidden"></div>
    `;

    const gamesLanding = document.getElementById("games-landing");
    const gameArea = document.getElementById("game-area");

    document.querySelectorAll(".game-option").forEach(option => {
        option.addEventListener("click", function () {
            const gameType = option.getAttribute("data-game");
            startGame(gameType);
        });
    });

    function startGame(gameType) {
        gamesLanding.style.display = "none";

        gameArea.style.display = "block";

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


    window.reloadPage = function () {
        gamesLanding.style.display = "flex"; 
        gameArea.style.display = "none";    
        gameArea.innerHTML = "";            
    };
});
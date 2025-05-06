document.addEventListener("DOMContentLoaded", function () {
    const body = document.getElementById("games");

    // Render Navbar and Game Options
    body.innerHTML = `
        <div class="navbar">
            <button class="nav-button nav-discover">DISCOVER</button>
            <button class="nav-button nav-shows">SHOWS</button>
            <button class="nav-button nav-actors">ACTORS</button>
            <button class="nav-button nav-games active">GAMES</button>
            <div class="user-icon">
                <img src="../media/UserIcon.png" alt="User Icon" class="user-icon-img">
            </div>
        </div>

        <div id="games-landing" class="games-landing">
            <div class="game-option game-option-quiz" data-game="quiz">
                <h2 class="game-option-title">Quiz-Spiele</h2>
                <p class="game-option-description">Teste dein Wissen über Serien, Filme und Schauspieler!</p>
            </div>
            <div class="game-option game-option-memory" data-game="memory">
                <h2 class="game-option-title">Memory-Spiel</h2>
                <p class="game-option-description">Finde die passenden Paare mit Serien und Hauptcharakteren!</p>
            </div>
            <div class="game-option game-option-whoami" data-game="whoami">
                <h2 class="game-option-title">Wer-bin-ich-Spiel</h2>
                <p class="game-option-description">Errate den Schauspieler oder Charakter anhand der Hinweise!</p>
            </div>
        </div>

        <div id="game-area" class="game-area hidden"></div>
    `;

    const gamesLanding = document.getElementById("games-landing");
    const gameArea = document.getElementById("game-area");

    // Add Event Listeners to Game Options
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
                gameArea.innerHTML = "<p class='error-message'>Das Spiel konnte nicht geladen werden.</p>";
        }
    }

    window.reloadPage = function () {
        gamesLanding.style.display = "flex"; 
        gameArea.style.display = "none";    
        gameArea.innerHTML = "";            
    };

    // Quiz Game Logic
    function loadQuizGame() {
        const quizData = {
            serien: [
                {
                    question: "Welche Serie handelt von einem Chemielehrer, der zum Drogenbaron wird?",
                    options: ["Breaking Bad", "The Sopranos", "Dexter", "Narcos"],
                    correct: "Breaking Bad",
                    difficulty: "einfach"
                },
                {
                    question: "In welcher Stadt spielt die Serie 'The Wire'?",
                    options: ["New York", "Los Angeles", "Baltimore", "Chicago"],
                    correct: "Baltimore",
                    difficulty: "mittel"
                },
                {
                    question: "Welche Serie basiert teilweise auf den Verbrechen von Pablo Escobar?",
                    options: ["Fargo", "Mindhunter", "Narcos", "Ozark"],
                    correct: "Narcos",
                    difficulty: "mittel"
                }
            ],
            schauspieler: [
                {
                    question: "Wer spielt die Hauptrolle in der Serie 'Luther'?",
                    options: ["Idris Elba", "Bryan Cranston", "Tom Hardy", "Matthew McConaughey"],
                    correct: "Idris Elba",
                    difficulty: "mittel"
                },
                {
                    question: "Welche Schauspielerin gewann einen Emmy für ihre Rolle in 'Ozark'?",
                    options: ["Julia Garner", "Laura Linney", "Anna Gunn", "Rhea Seehorn"],
                    correct: "Julia Garner",
                    difficulty: "mittel"
                },
                {
                    question: "In welcher Serie spielt Bryan Cranston die Hauptrolle?",
                    options: ["Breaking Bad", "Fargo", "The Wire", "True Detective"],
                    correct: "Breaking Bad",
                    difficulty: "einfach"
                }
            ],
            trueCrime: [
                {
                    question: "Welche Serie basiert auf den realen Ermittlungen des FBI zu Serienmördern?",
                    options: ["Mindhunter", "Dexter", "The Wire", "Fargo"],
                    correct: "Mindhunter",
                    difficulty: "mittel"
                },
                {
                    question: "Welche Serie verwendet echte Verbrechen als Inspiration?",
                    options: ["Fargo", "Narcos", "Better Call Saul", "The Sopranos"],
                    correct: "Fargo",
                    difficulty: "schwer"
                },
                {
                    question: "In welcher Serie wird die Geschichte von Ted Kaczynski, dem 'Unabomber', erzählt?",
                    options: ["Manhunt: Unabomber", "True Detective", "Mindhunter", "Breaking Bad"],
                    correct: "Manhunt: Unabomber",
                    difficulty: "schwer"
                }
            ]
        };

        let totalPoints = 0;
        let currentQuestionIndex = 0;
        let selectedCategory = "";

        gameArea.innerHTML = `
            <div class="quiz-category-selection">
                <h2 class="quiz-title">Wähle eine Kategorie:</h2>
                <button class="quiz-category-button" onclick="startQuiz('serien')">Crime-Serien</button>
                <button class="quiz-category-button" onclick="startQuiz('schauspieler')">Schauspieler</button>
                <button class="quiz-category-button" onclick="startQuiz('trueCrime')">True Crime</button>
            </div>
            <div id="quiz-container" class="quiz-container"></div>
            <div id="quiz-feedback" class="quiz-feedback"></div>
        `;

        window.startQuiz = function (category) {
            selectedCategory = category;
            currentQuestionIndex = 0;
            totalPoints = 0;
            showQuestion();
        };

        function showQuestion() {
            const questionData = quizData[selectedCategory][currentQuestionIndex];
            document.getElementById("quiz-container").innerHTML = `
                <h3 class="quiz-question">${questionData.question}</h3>
                <div class="quiz-options">
                    ${questionData.options.map((option, index) => `
                        <button class="quiz-option-button" onclick="handleAnswer('${option}')">${option}</button>
                    `).join("")}
                </div>
            `;
        }

        window.handleAnswer = function (selectedOption) {
            const questionData = quizData[selectedCategory][currentQuestionIndex];
            const isCorrect = selectedOption === questionData.correct;
            const points = calculateCrimePoints(isCorrect, questionData.difficulty);
            totalPoints += points;

            document.getElementById("quiz-feedback").innerHTML = `
                <p class="quiz-feedback-message">${isCorrect ? "Richtig!" : "Falsch!"} ${isCorrect ? "+" : ""}${points} Punkte</p>
            `;

            currentQuestionIndex++;
            if (currentQuestionIndex < quizData[selectedCategory].length) {
                setTimeout(showQuestion, 2000);
            } else {
                showQuizSummary();
            }
        };

        function calculateCrimePoints(isCorrect, difficulty) {
            const pointsSystem = {
                einfach: { gain: 10, loss: -5 },
                mittel: { gain: 20, loss: -10 },
                schwer: { gain: 30, loss: -15 }
            };

            return isCorrect ? pointsSystem[difficulty].gain : pointsSystem[difficulty].loss;
        }

        function showQuizSummary() {
            document.getElementById("quiz-container").innerHTML = `
                <h2 class="quiz-summary-title">Quiz abgeschlossen!</h2>
                <p class="quiz-summary-category">Kategorie: ${selectedCategory}</p>
                <p class="quiz-summary-points">Gesamte Punkte: ${totalPoints}</p>
                <button class="quiz-restart-button" onclick="reloadPage()">Zurück zur Kategorieauswahl</button>
            `;
        }
    }

    function loadMemoryGame() {
        gameArea.innerHTML = "<p class='game-placeholder'>Memory-Spiel wird hier geladen...</p>";
    }

    function loadWhoAmIGame() {
        gameArea.innerHTML = "<p class='game-placeholder'>Wer-bin-ich-Spiel wird hier geladen...</p>";
    }
});
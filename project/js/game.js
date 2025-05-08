document.addEventListener("DOMContentLoaded", function () {
    const body = document.getElementById("games");

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
                    correct: "Breaking Bad"
                },
                {
                    question: "In welcher Stadt spielt die Serie 'The Wire'?",
                    options: ["New York", "Los Angeles", "Baltimore", "Chicago"],
                    correct: "Baltimore"
                },
                {
                    question: "Welche Serie basiert teilweise auf den Verbrechen von Pablo Escobar?",
                    options: ["Fargo", "Mindhunter", "Narcos", "Ozark"],
                    correct: "Narcos"
                },
                {
                    question: "Wer ist der Hauptcharakter in der Serie 'Dexter'?",
                    options: ["Dexter Morgan", "Walter White", "Tony Soprano", "Tommy Shelby"],
                    correct: "Dexter Morgan"
                },
                {
                    question: "Welche Serie zeigt Ermittlungen der Polizei in verschiedenen Städten?",
                    options: ["True Detective", "The Wire", "NCIS", "CSI"],
                    correct: "True Detective"
                }
            ],
            schauspieler: [
                {
                    question: "Wer spielt die Hauptrolle in der Serie 'Luther'?",
                    options: ["Idris Elba", "Bryan Cranston", "Tom Hardy", "Matthew McConaughey"],
                    correct: "Idris Elba"
                },
                {
                    question: "Welche Schauspielerin gewann einen Emmy für ihre Rolle in 'Ozark'?",
                    options: ["Julia Garner", "Laura Linney", "Anna Gunn", "Rhea Seehorn"],
                    correct: "Julia Garner"
                },
                {
                    question: "Welcher Schauspieler spielt Walter White in 'Breaking Bad'?",
                    options: ["Bryan Cranston", "Aaron Paul", "Bob Odenkirk", "Giancarlo Esposito"],
                    correct: "Bryan Cranston"
                },
                {
                    question: "Wer spielt den Charakter Tommy Shelby in 'Peaky Blinders'?",
                    options: ["Cillian Murphy", "Tom Hardy", "Sam Neill", "Paul Anderson"],
                    correct: "Cillian Murphy"
                },
                {
                    question: "Welche Schauspielerin spielt Eleven in 'Stranger Things'?",
                    options: ["Millie Bobby Brown", "Sadie Sink", "Natalia Dyer", "Winona Ryder"],
                    correct: "Millie Bobby Brown"
                }
            ],
            trueCrime: [
                {
                    question: "Welche Serie basiert auf den realen Ermittlungen des FBI zu Serienmördern?",
                    options: ["Mindhunter", "Dexter", "The Wire", "Fargo"],
                    correct: "Mindhunter"
                },
                {
                    question: "Welche Serie verwendet echte Verbrechen als Inspiration?",
                    options: ["Fargo", "Narcos", "Better Call Saul", "The Sopranos"],
                    correct: "Fargo"
                },
                {
                    question: "In welcher Serie wird die Geschichte von Ted Kaczynski, dem 'Unabomber', erzählt?",
                    options: ["Manhunt: Unabomber", "True Detective", "Mindhunter", "Breaking Bad"],
                    correct: "Manhunt: Unabomber"
                },
                {
                    question: "Welche Serie erzählt die Geschichte von Jeffrey Dahmer?",
                    options: ["Dahmer – Monster", "Mindhunter", "Criminal Minds", "The Alienist"],
                    correct: "Dahmer – Monster"
                },
                {
                    question: "Welche Serie zeigt die Verfolgung des Mörders 'Golden State Killer'?",
                    options: ["I'll Be Gone in the Dark", "The Jinx", "Unsolved Mysteries", "Making a Murderer"],
                    correct: "I'll Be Gone in the Dark"
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

            document.getElementById("quiz-feedback").innerHTML = `
                <p class="quiz-feedback-message">${isCorrect ? "Richtig! 🎉" : "Falsch! 😢"}</p>
            `;

            if (isCorrect) totalPoints += 10;

            currentQuestionIndex++;
            if (currentQuestionIndex < quizData[selectedCategory].length) {
                setTimeout(showQuestion, 2000);
            } else {
                showQuizSummary();
            }
        };

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
document.addEventListener("DOMContentLoaded", function () {
    const gameArea = document.getElementById("game-area");

    const memoryData = [
        { series: "Breaking Bad", character: "Walter White" },
        { series: "Snowfall", character: "Franklin Saint" },
        { series: "Dexter", character: "Dexter Morgan" },
        { series: "Narcos", character: "Pablo Escobar" },
        { series: "Peaky Blinders", character: "Tommy Shelby" },
        { series: "Lucifer", character: "Lucifer Morningstar" }
    ];

    // Doppelte Karten erstellen
    const cards = memoryData.flatMap(item => [
        { type: "series", text: item.series },
        { type: "character", text: item.character }
    ]);

    shuffle(cards);

    gameArea.innerHTML = `
        <div id="memory-game" class="memory-game">
            ${cards.map(card => `
                <div class="memory-card" data-type="${card.type}" data-text="${card.text}">
                    <div class="card-front"></div>
                    <div class="card-back">${card.text}</div>
                </div>
            `).join('')}
        </div>
        <div class="game-info">
            <p>Versuche: <span id="attempts">0</span></p>
            <p>Zeit: <span id="timer">0</span> Sekunden</p>
        </div>
        <button id="back-to-selection" class="back-button">Zurück zur Auswahl</button>
    `;

    const memoryCards = document.querySelectorAll(".memory-card");
    let flippedCards = [];
    let attempts = 0;
    let matchedPairs = 0;
    let timer = 0;
    let timerInterval;

    startTimer();

    memoryCards.forEach(card => {
        card.addEventListener("click", function () {
            if (flippedCards.length < 2 && !card.classList.contains("matched") && !card.classList.contains("flipped")) {
                card.classList.add("flipped");
                flippedCards.push(card);

                if (flippedCards.length === 2) {
                    checkMatch();
                }
            }
        });
    });

    function checkMatch() {
        attempts++;
        document.getElementById("attempts").textContent = attempts;
    
        const [card1, card2] = flippedCards;
    
        // Überprüfen ob die Karten passen
        const isMatch = memoryData.some(item =>
            (card1.dataset.type === "series" && card2.dataset.type === "character" && card1.dataset.text === item.series && card2.dataset.text === item.character) ||
            (card1.dataset.type === "character" && card2.dataset.type === "series" && card1.dataset.text === item.character && card2.dataset.text === item.series)
        );
    
        if (isMatch) {
            card1.classList.add("matched");
            card2.classList.add("matched");
            matchedPairs++;
    
            if (matchedPairs === memoryData.length) {
                clearInterval(timerInterval);
                setTimeout(() => {
                    alert(`Herzlichen Glückwunsch! Du hast das Spiel in ${timer} Sekunden und ${attempts} Versuchen abgeschlossen.`);
                }, 500);
            }
        } else {
            setTimeout(() => {
                card1.classList.remove("flipped");
                card2.classList.remove("flipped");
            }, 1000);
        }
    
        flippedCards = [];
    }

    // Karten mischen
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function startTimer() {
        timerInterval = setInterval(() => {
            timer++;
            document.getElementById("timer").textContent = timer;
        }, 1000);
    }

    document.getElementById("back-to-selection").addEventListener("click", function () {
        window.location.reload(); 
    });
});
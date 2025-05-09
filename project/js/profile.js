document.addEventListener("DOMContentLoaded", function () {
    const body = document.getElementById("profile");

    body.innerHTML = `
        <div class="profile-container">
            <header class="navbar">
                <button class="nav-button">DISCOVER</button>
                <button class="nav-button">SHOWS</button>
                <button class="nav-button">ACTORS</button>
                <button class="nav-button">GAMES</button>
                <div class="user-icon">
                    <img src="../media/UserIcon.png" alt="User Icon">
                </div>
            </header>

            <div class="profile-content">
                <header class="profile-header">
                    <div class="profile-avatar">
                        <img src="../media/UserIcon.png" alt="Profilbild">
                    </div>
                    <h1 class="profile-name">Willkommen, <span id="usernameDisplay"></span>!</h1>
                    <p class="profile-description">Hier findest du deine Daten, Statistiken und Erfolge.</p>
                </header>

                <section class="profile-stats">
                    <div class="stat">
                        <span class="stat-value" id="quiz-count">0</span>
                        <span class="stat-label">Quiz abgeschlossen</span>
                    </div>
                    <div class="stat">
                        <span class="stat-value" id="memory-count">0</span>
                        <span class="stat-label">Memory-Spiele gewonnen</span>
                    </div>
                    <div class="stat">
                        <span class="stat-value" id="points-count">0</span>
                        <span class="stat-label">Gesammelte Punkte</span>
                    </div>
                </section>

                <section class="profile-actions">
                    <button id="logoutBtn" class="logout-button">Logout</button>
                </section>
            </div>
        </div>
    `;

    const usernameDisplay = document.getElementById("usernameDisplay");
    const quizCount = document.getElementById("quiz-count");
    const memoryCount = document.getElementById("memory-count");
    const pointsCount = document.getElementById("points-count");

    // Check if user is logged in
    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) {
        alert("Du bist nicht eingeloggt.");
        window.location.href = "../pages/startscreen.html";
        return;
    }
    usernameDisplay.textContent = currentUser;

    // Load or initialize user stats in localStorage
    let userStats = JSON.parse(localStorage.getItem("userStats"));
    if (!userStats) {
        // Initialize default stats if not found
        userStats = {
            quizzes: 0,
            memoryWins: 0,
            points: 0,
        };
        localStorage.setItem("userStats", JSON.stringify(userStats));
    }

    // Update stats in the profile
    function updateProfileStats() {
        quizCount.textContent = userStats.quizzes;
        memoryCount.textContent = userStats.memoryWins;
        pointsCount.textContent = userStats.points;
    }
    updateProfileStats();

    // Functions to update stats
    function completeQuiz() {
        userStats.quizzes++;
        userStats.points += 10; // Each quiz gives 10 points
        saveStats();
    }

    function completeMemory() {
        userStats.memoryWins++;
        userStats.points += 50; // Each memory game gives 50 points
        saveStats();
    }

    // Save updated stats to localStorage
    function saveStats() {
        localStorage.setItem("userStats", JSON.stringify(userStats));
        updateProfileStats();
    }

    // Logout button functionality
    document.getElementById("logoutBtn").addEventListener("click", () => {
        localStorage.removeItem("currentUser");
        localStorage.removeItem("userStats"); // Optional: Clear stats on logout
        window.location.href = "../pages/startscreen.html";
    });

    // Debug buttons for testing (optional, remove in production)
    const debugArea = document.createElement("div");
    debugArea.innerHTML = `
        <button id="debugCompleteQuiz" class="debug-button">Quiz abschließen</button>
        <button id="debugCompleteMemory" class="debug-button">Memory abschließen</button>
    `;
    body.appendChild(debugArea);

    document.getElementById("debugCompleteQuiz").addEventListener("click", completeQuiz);
    document.getElementById("debugCompleteMemory").addEventListener("click", completeMemory);
});
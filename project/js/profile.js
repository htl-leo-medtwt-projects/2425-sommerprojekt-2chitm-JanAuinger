document.addEventListener("DOMContentLoaded", function () {
    const body = document.getElementById("profile");
    const currentUser = localStorage.getItem("currentUser") || "gast";
    
    let userRatings = JSON.parse(localStorage.getItem(currentUser + "_ratings")) || {
        shows: {},
        actors: {}
    };

    body.innerHTML = `
        <div class="profile-container">
            <header class="navbar">
                <button class="nav-button">DISCOVER</button>
                <button class="nav-button">SHOWS</button>
                <button class="nav-button">ACTORS</button>
                <button class="nav-button">GAMES</button>
                <div class="user-icon">
                    <img id="navbarAvatarImg" src="../media/UserIcon.png" alt="User Icon">
                </div>
            </header>

            <div class="profile-content">
                <header class="profile-header">
                    <div class="profile-avatar">
                        <img id="profileAvatarImg" src="../media/UserIcon.png" alt="Profilbild">
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

                <!-- Bewertungsübersicht -->
                <section class="ratings-section">
                    <div class="section-toggle" id="ratings-toggle">
                        <h3>Deine Bewertungen</h3>
                        <span class="toggle-icon">▼</span>
                    </div>
                    <div class="section-content hidden" id="ratings-content">
                        <div class="ratings-tabs">
                            <button class="tab-btn active" data-tab="shows">Shows</button>
                            <button class="tab-btn" data-tab="actors">Schauspieler</button>
                        </div>
                        <div class="ratings-tab-content" id="shows-ratings">
                            <!-- Shows-Bewertungen werden hier geladen -->
                        </div>
                        <div class="ratings-tab-content hidden" id="actors-ratings">
                            <!-- Actors-Bewertungen werden hier geladen -->
                        </div>
                    </div>
                </section>

                <!-- Avatarshop -->
                <section class="shop-section">
                    <div class="section-toggle" id="shop-toggle">
                        <h3>Avatar Shop</h3>
                        <span class="toggle-icon">▼</span>
                    </div>
                    <div class="section-content hidden" id="avatar-shop-section">
                        <div id="avatar-shop" class="shop-avatars"></div>
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
    const profileAvatarImg = document.getElementById("profileAvatarImg");
    const navbarAvatarImg = document.getElementById("navbarAvatarImg");
    const shopDiv = document.getElementById("avatar-shop");

    if (!currentUser || currentUser === "gast") {
        alert("Du bist nicht eingeloggt.");
        window.location.href = "../pages/startscreen.html";
        return;
    }
    usernameDisplay.textContent = currentUser;

    let userData = JSON.parse(localStorage.getItem(currentUser));
    if (!userData) {
        userData = {
            username: currentUser,
            stats: {
                quizzes: 0,
                memoryWins: 0,
                points: 0,
            },
            ownedAvatars: ["default"],
            currentAvatar: "default"
        };
    } else {
        if (!userData.ownedAvatars) userData.ownedAvatars = ["default"];
        if (!userData.currentAvatar) userData.currentAvatar = "default";
        if (!userData.stats) userData.stats = { quizzes: 0, memoryWins: 0, points: 0 };
    }

    function updateProfileStatsFromUserData() {
        quizCount.textContent = userData.stats.quizzes;
        memoryCount.textContent = userData.stats.memoryWins;
        pointsCount.textContent = userData.stats.points;
    }

    updateProfileStatsFromUserData();

    const avatars = [
        {
            id: "default",
            name: "Standard",
            img: "../media/UserIcon.png",
            price: 0,
            minPoints: 0
        },
        {
            id: "walterwhite",
            name: "Walter White",
            img: "../media/icons/avatar_walterwhite.png",
            price: 50,
            minPoints: 50
        },
        {
            id: "mcnulty",
            name: "Jimmy McNulty",
            img: "../media/icons/avatar_mcnulty.png",
            price: 100,
            minPoints: 100
        },
        {
            id: "escobar",
            name: "Pablo Escobar",
            img: "../media/icons/avatar_escobar.png",
            price: 200,
            minPoints: 200
        },
        {
            id: "dextermorgan",
            name: "Dexter Morgan",
            img: "../media/icons/avatar_dextermorgan.png",
            price: 300,
            minPoints: 300
        },
        {
            id: "rustcohle",
            name: "Rust Cohle",
            img: "../media/icons/avatar_rustcohle.png",
            price: 400,
            minPoints: 400
        },
        {
            id: "tommyshelby",
            name: "Tommy Shelby",
            img: "../media/icons/avatar_tommyshelby.png",
            price: 500,
            minPoints: 500
        },
        {
            id: "martybyrde",
            name: "Marty Byrde",
            img: "../media/icons/avatar_martybyrde.png",
            price: 600,
            minPoints: 600
        },
        {
            id: "johnluther",
            name: "John Luther",
            img: "../media/icons/avatar_johnluther.png",
            price: 700,
            minPoints: 700
        }
    ];

    function updateAvatars() {
        const currentAvatarObj = avatars.find(a => a.id === userData.currentAvatar) || avatars[0];
        profileAvatarImg.src = currentAvatarObj.img;
        navbarAvatarImg.src = currentAvatarObj.img;
    }

    function renderAvatarShop() {
        shopDiv.innerHTML = avatars.map(a => `
            <div class="shop-avatar">
                <img src="${a.img}" alt="${a.name}">
                <div>${a.name}</div>
                <div>${a.price} Punkte</div>
                <button
                    ${userData.ownedAvatars.includes(a.id) ? 'disabled' : ''}
                    ${userData.stats.points < a.price || userData.stats.points < a.minPoints ? 'disabled' : ''}
                    onclick="buyAvatar('${a.id}')"
                >${userData.ownedAvatars.includes(a.id) ? 'Besitzt' : 'Kaufen'}</button>
                <button
                    ${userData.ownedAvatars.includes(a.id) && userData.currentAvatar !== a.id ? '' : 'disabled'}
                    onclick="selectAvatar('${a.id}')"
                >Auswählen</button>
            </div>
        `).join("");
    }

    // Bewertungen anzeigen
    function renderRatings() {
        const showsRatings = document.getElementById("shows-ratings");
        const showsEntries = Object.entries(userRatings.shows);
        
        if (showsEntries.length === 0) {
            showsRatings.innerHTML = "<p class='no-ratings'>Du hast noch keine Shows bewertet.</p>";
        } else {
            showsRatings.innerHTML = showsEntries.map(([title, rating]) => `
                <div class="rating-item">
                    <div class="rating-title">${title}</div>
                    <div class="rating-stars">${renderStars(rating)}</div>
                </div>
            `).join("");
        }
        
        // Actors-Bewertungen anzeigen
        const actorsRatings = document.getElementById("actors-ratings");
        const actorsEntries = Object.entries(userRatings.actors);
        
        if (actorsEntries.length === 0) {
            actorsRatings.innerHTML = "<p class='no-ratings'>Du hast noch keine Schauspieler bewertet.</p>";
        } else {
            actorsRatings.innerHTML = actorsEntries.map(([name, rating]) => `
                <div class="rating-item">
                    <div class="rating-title">${name}</div>
                    <div class="rating-stars">${renderStars(rating)}</div>
                </div>
            `).join("");
        }
    }

    // Hilfsfunktion zum Rendern der Sterne als HTML
    function renderStars(rating) {
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            stars += `<span class="profile-star ${i <= rating ? 'active' : ''}" data-value="${i}">★</span>`;
        }
        return stars;
    }

    // Auf/Zuklappen der Abschnitte
    document.getElementById("ratings-toggle").addEventListener("click", function() {
        const content = document.getElementById("ratings-content");
        const icon = this.querySelector(".toggle-icon");
        content.classList.toggle("hidden");
        icon.textContent = content.classList.contains("hidden") ? "▼" : "▲";
        
        if (!content.classList.contains("hidden")) {
            renderRatings();
        }
    });

    document.getElementById("shop-toggle").addEventListener("click", function() {
        const content = document.getElementById("avatar-shop-section");
        const icon = this.querySelector(".toggle-icon");
        content.classList.toggle("hidden");
        icon.textContent = content.classList.contains("hidden") ? "▼" : "▲";
    });

    // Tabwechsel für Bewertungen
    const tabButtons = document.querySelectorAll(".tab-btn");
    tabButtons.forEach(button => {
        button.addEventListener("click", function() {
            tabButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
            
            const tabName = this.getAttribute("data-tab");
            document.getElementById("shows-ratings").classList.add("hidden");
            document.getElementById("actors-ratings").classList.add("hidden");
            document.getElementById(tabName + "-ratings").classList.remove("hidden");
        });
    });

    updateAvatars();
    renderAvatarShop();

    // Avatar-Kauf
    window.buyAvatar = function (avatarId) {
        const avatar = avatars.find(a => a.id === avatarId);
        if (!avatar) return;
        if (userData.ownedAvatars.includes(avatarId)) return;
        if (userData.stats.points >= avatar.price && userData.stats.points >= avatar.minPoints) {
            userData.stats.points -= avatar.price;
            userData.ownedAvatars.push(avatarId);
            localStorage.setItem(currentUser, JSON.stringify(userData));
            updateProfileStatsFromUserData();
            renderAvatarShop();
        } else {
            alert("Nicht genug Punkte!");
        }
    };

    // Avatar auswählen
    window.selectAvatar = function (avatarId) {
        if (!userData.ownedAvatars.includes(avatarId)) return;
        userData.currentAvatar = avatarId;
        localStorage.setItem(currentUser, JSON.stringify(userData));
        updateAvatars();
        renderAvatarShop();
    };

    // Logout
    document.getElementById("logoutBtn").addEventListener("click", () => {
        localStorage.removeItem("currentUser");
        window.location.href = "../pages/startscreen.html";
    });
});
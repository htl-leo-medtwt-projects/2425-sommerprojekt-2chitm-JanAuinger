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

                <section class="profile-actions">
                    <button id="logoutBtn" class="logout-button">Logout</button>
                </section>

                <section id="avatar-shop-section">
                    <h2>Avatar-Shop</h2>
                    <div id="avatar-shop" class="shop-avatars"></div>
                </section>
            </div>
        </div>
    `;

    const usernameDisplay = document.getElementById("usernameDisplay");
    const quizCount = document.getElementById("quiz-count");
    const memoryCount = document.getElementById("memory-count");
    const pointsCount = document.getElementById("points-count");

    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) {
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

    const profileAvatarImg = document.getElementById("profileAvatarImg");
    profileAvatarImg.src = avatars.find(a => a.id === userData.currentAvatar).img;

    const shopDiv = document.getElementById("avatar-shop");
    shopDiv.innerHTML = avatars.map(a => `
        <div class="shop-avatar" style="display:inline-block; margin:1rem; background:#222; padding:1rem; border-radius:10px; text-align:center; min-width:120px;">
            <img src="${a.img}" alt="${a.name}" style="width:70px;height:70px;border-radius:50%;border:2px solid #444;">
            <div style="margin-top:0.4rem;">${a.name}</div>
            <div style="font-size:0.9rem;margin-bottom:0.3rem;">${a.price} Punkte</div>
            <button
                ${userData.ownedAvatars.includes(a.id) ? 'disabled' : ''}
                ${userData.stats.points < a.price || userData.stats.points < a.minPoints ? 'disabled' : ''}
                onclick="buyAvatar('${a.id}')"
                style="margin:0.1rem 0.2rem; ${userData.ownedAvatars.includes(a.id) ? 'background:#444;cursor:not-allowed;' : ''}"
            >${userData.ownedAvatars.includes(a.id) ? 'Besitzt' : 'Kaufen'}</button>
            <button
                ${userData.ownedAvatars.includes(a.id) && userData.currentAvatar !== a.id ? '' : 'disabled'}
                onclick="selectAvatar('${a.id}')"
                style="margin:0.1rem 0.2rem;"
            >Auswählen</button>
        </div>
    `).join("");

    window.buyAvatar = function (avatarId) {
        const avatar = avatars.find(a => a.id === avatarId);
        if (!avatar) return;
        if (userData.ownedAvatars.includes(avatarId)) return;
        if (userData.stats.points >= avatar.price && userData.stats.points >= avatar.minPoints) {
            userData.stats.points -= avatar.price;
            userData.ownedAvatars.push(avatarId);
            localStorage.setItem(currentUser, JSON.stringify(userData));
            updateProfileStatsFromUserData();
            window.location.reload();
        } else {
            alert("Nicht genug Punkte!");
        }
    };

    window.selectAvatar = function (avatarId) {
        if (!userData.ownedAvatars.includes(avatarId)) return;
        userData.currentAvatar = avatarId;
        localStorage.setItem(currentUser, JSON.stringify(userData));
        window.location.reload();
    };

    document.getElementById("logoutBtn").addEventListener("click", () => {
        localStorage.removeItem("currentUser");
        window.location.href = "../pages/startscreen.html";
    });
});
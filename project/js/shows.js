document.addEventListener("DOMContentLoaded", function () {
    const body = document.getElementById("shows");



    body.innerHTML = `
        <div class="navbar">
            <button class="nav-button">DISCOVER</button>
            <button class="nav-button">SHOWS</button>
            <button class="nav-button">ACTORS</button>
            <button class="nav-button">GAMES</button>
            <div class="user-icon">
                <img src="../media/UserIcon.png" alt="User Icon">
            </div>
        </div>

        <h1>SHOWS</h1>
        <div class="recommendations">
        <h3>Empfehlungen für dich</h3>
        </div>

        
    `;

});

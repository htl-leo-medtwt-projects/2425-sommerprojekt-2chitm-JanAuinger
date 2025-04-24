/*Karusell von einem Youtube Tutorial nachgemacht und selbst angepasst*/

document.addEventListener("DOMContentLoaded", function () {
    const body = document.getElementById("actors");

    const actors = [
        { name: "Leonardo DiCaprio", image: "../media/actors/dicaprio.png", bio: "Bekannt aus Titanic, Inception und The Revenant." },
        { name: "Robert De Niro", image: "../media/actors/deniro.png", bio: "6-Fach nominiert für den Oscar und 2x Gewinner." },
        { name: "Michael C. Hall", image: "../media/actors/chall.png", bio: "Bekannt aus Dexter und Golden Globe Award Gewinner." },
        { name: "Damson Idris", image: "../media/actors/idris.png", bio: "Bekannt als Franklin Saint in Snowfall." },
        { name: "Alfredo James Pacino", image: "../media/actors/alpacino.png", bio: "Bekannt durch Der Pate und Oscar Gewinner" },
        { name: "Benicio Del Toro", image: "../media/actors/deltoro.png", bio: "Aus Puerto-Rica und bekannt der Traffic" },
        { name: "Johnny Depp", image: "../media/actors/depp.png", bio: "Bekannt durch Fluch der Karibik" },
        { name: "Idris Elba", image: "../media/actors/elba.png", bio: "Weltweit bekannt durch Luther und The Wire" },
        { name: "Giancarlo Esposito", image: "../media/actors/eposito.png", bio: "Wichtige Figur in Braking Bad und Better Call Saul" },
        { name: "Moura Wagner", image: "../media/actors/wagner.png", bio: "Spielt Pablo Escobar in Narcos" },
        { name: "Pedro Pascal", image: "../media/actors/pascal.png", bio: "Bekannt durch TheLastOfUs und Narcos" },
        { name: "Joe Pesci", image: "../media/actors/pesci.png", bio: "Weltweit bekannt durch GoodFellas" }
    ];

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

        <div id="carousel-section">
            <h1>ACTORS</h1>
            
            <div class="carousel-container">
                <button class="carousel-button left-button">&#10094;</button>
                <div class="carousel">
                </div>
                <button class="carousel-button right-button">&#10095;</button>
            </div>
            <h3>Auf einen Schauspieler klicken, um mehr Details zu sehen oder in der Übersicht alle sehen</h3>
            <button id="all-actors-button" class="all-actors-button">Alle Schauspieler anzeigen</button>
        </div>

        <div id="actors-overview" class="actors-overview hidden">
            <div class="actors-header">
                <h1>Alle Schauspieler</h1>
                <input type="text" id="search-bar" class="search-bar" placeholder="Schauspieler suchen...">
            </div>
            <div class="actors-grid">
            </div>
        </div>
    `;

    const carousel = document.querySelector(".carousel");
    actors.forEach(actor => {
        const actorDiv = document.createElement("div");
        actorDiv.className = "actor";
        actorDiv.innerHTML = `
            <img src="${actor.image}" alt="${actor.name}">
            <h3>${actor.name}</h3>
            <p>${actor.bio}</p>
        `;
        carousel.appendChild(actorDiv);
    });

    const leftButton = document.querySelector(".left-button");
    const rightButton = document.querySelector(".right-button");
    let currentIndex = 0;

    // Actor Karusell nach jedem Wechseln updaten
    function updateCarousel() {
        const actorElements = document.querySelectorAll(".actor");
        actorElements.forEach((actor, index) => {
            if (index === currentIndex) {
                actor.classList.add("active");
                actor.classList.remove("left", "right");
            } else if (index === (currentIndex - 1 + actors.length) % actors.length) {
                actor.classList.add("left");
                actor.classList.remove("active", "right");
            } else if (index === (currentIndex + 1) % actors.length) {
                actor.classList.add("right");
                actor.classList.remove("active", "left");
            } else {
                actor.classList.remove("active", "left", "right");
            }
        });
    }

    leftButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + actors.length) % actors.length;
        updateCarousel();
    });

    rightButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % actors.length;
        updateCarousel();
    });

    updateCarousel();

    const allActorsButton = document.getElementById("all-actors-button");
    const carouselSection = document.getElementById("carousel-section");
    const actorsOverview = document.getElementById("actors-overview");

    allActorsButton.addEventListener("click", function () {
        carouselSection.classList.add("hidden"); 
        actorsOverview.classList.remove("hidden"); 
        displayActors(actors);
    });

    function displayActors(filteredActors) {
        const actorsGrid = document.querySelector(".actors-grid");
        actorsGrid.innerHTML = ""; 
        filteredActors.forEach(actor => {
            const actorCard = document.createElement("div");
            actorCard.className = "actor-card";
            actorCard.innerHTML = `
                <img src="${actor.image}" alt="${actor.name}">
                <h3>${actor.name}</h3>
                <p>${actor.bio}</p>
            `;
            actorsGrid.appendChild(actorCard);
        });
    }

    const searchBar = document.getElementById("search-bar");
    searchBar.addEventListener("input", function () {
        const searchTerm = searchBar.value.toLowerCase();
        const filteredActors = actors.filter(actor => actor.name.toLowerCase().includes(searchTerm));
        displayActors(filteredActors);
    });
});
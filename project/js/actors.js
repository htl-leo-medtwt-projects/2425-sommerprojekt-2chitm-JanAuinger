/*Karusell von einem Youtube Tutorial nachgemacht und selbst angepasst*/

document.addEventListener("DOMContentLoaded", function () {
    const body = document.getElementById("actors");

    const actors = [
        {
            name: "Leonardo DiCaprio",
            image: "../media/actors/dicaprio.png",
            bio: "Bekannt aus Titanic, Inception und The Revenant.",
            age: 50,
            birthdate: "1974-11-11",
            popularSeries: "Titanic",
            awards: ["Oscar für The Revenant", "Golden Globe für The Wolf of Wall Street"],
        },
        {
            name: "Robert De Niro",
            image: "../media/actors/deniro.png",
            bio: "6-Fach nominiert für den Oscar und 2x Gewinner.",
            age: 81,
            birthdate: "1943-08-17",
            popularSeries: "Der Pate II",
            awards: ["2 Oscars", "Golden Globe für Wie ein wilder Stier"],
        },
        {
            name: "Michael C. Hall",
            image: "../media/actors/chall.png",
            bio: "Bekannt aus Dexter und Golden Globe Award Gewinner.",
            age: 54,
            birthdate: "1971-02-01",
            popularSeries: "Dexter",
            awards: ["Golden Globe für Dexter"],
        },
        {
            name: "Damson Idris",
            image: "../media/actors/idris.png",
            bio: "Bekannt als Franklin Saint in Snowfall.",
            age: 32,
            birthdate: "1991-09-02",
            popularSeries: "Snowfall",
            awards: ["NAACP Image Award Nominierung"],
        },
        {
            name: "Alfredo James Pacino",
            image: "../media/actors/alpacino.png",
            bio: "Bekannt durch Der Pate und Oscar Gewinner.",
            age: 85,
            birthdate: "1940-04-25",
            popularSeries: "Der Pate",
            awards: ["Oscar für Der Duft der Frauen", "Emmy für Angels in America"],
        },
        {
            name: "Benicio Del Toro",
            image: "../media/actors/deltoro.png",
            bio: "Aus Puerto-Rico und bekannt durch Traffic.",
            age: 58,
            birthdate: "1967-02-19",
            popularSeries: "Traffic",
            awards: ["Oscar für Traffic", "BAFTA"],
        },
        {
            name: "Johnny Depp",
            image: "../media/actors/depp.png",
            bio: "Bekannt durch Fluch der Karibik.",
            age: 61,
            birthdate: "1963-06-09",
            popularSeries: "Fluch der Karibik",
            awards: ["Golden Globe für Sweeney Todd"],
        },
        {
            name: "Idris Elba",
            image: "../media/actors/elba.png",
            bio: "Weltweit bekannt durch Luther und The Wire.",
            age: 52,
            birthdate: "1972-09-06",
            popularSeries: "Luther",
            awards: ["Golden Globe für Luther"],
        },
        {
            name: "Giancarlo Esposito",
            image: "../media/actors/eposito.png",
            bio: "Wichtige Figur in Breaking Bad und Better Call Saul.",
            age: 67,
            birthdate: "1958-04-26",
            popularSeries: "Breaking Bad",
            awards: ["Critics' Choice Television Award für Better Call Saul"],
        },
        {
            name: "Moura Wagner",
            image: "../media/actors/wagner.png",
            bio: "Spielt Pablo Escobar in Narcos.",
            age: 48,
            birthdate: "1976-06-27",
            popularSeries: "Narcos",
            awards: ["Golden Globe Nominierung für Narcos"],
        },
        {
            name: "Pedro Pascal",
            image: "../media/actors/pascal.png",
            bio: "Bekannt durch The Last of Us und Narcos.",
            age: 50,
            birthdate: "1975-04-02",
            popularSeries: "The Last of Us",
            awards: ["Critics' Choice Super Award für The Mandalorian"],
        },
        {
            name: "Joe Pesci",
            image: "../media/actors/pesci.png",
            bio: "Weltweit bekannt durch GoodFellas.",
            age: 82,
            birthdate: "1942-02-09",
            popularSeries: "GoodFellas",
            awards: ["Oscar für GoodFellas"],
        },
        {
            name: "Bryan Cranston",
            image: "../media/actors/cranston.png",
            bio: "Bekannt als Walter White in Breaking Bad.",
            age: 69,
            birthdate: "1956-03-07",
            popularSeries: "Breaking Bad",
            awards: ["6 Primetime Emmy Awards", "Golden Globe für Breaking Bad"],
        },
        {
            name: "Aaron Paul",
            image: "../media/actors/paul.png",
            bio: "Bekannt als Jesse Pinkman in Breaking Bad.",
            age: 45,
            birthdate: "1979-08-27",
            popularSeries: "Breaking Bad",
            awards: ["3 Primetime Emmy Awards für Breaking Bad"],
        },
        {
            name: "Anna Gunn",
            image: "../media/actors/gunn.png",
            bio: "Bekannt als Skyler White in Breaking Bad.",
            age: 56,
            birthdate: "1968-08-11",
            popularSeries: "Breaking Bad",
            awards: ["2 Primetime Emmy Awards für Breaking Bad"],
        },
        {
            name: "Bob Odenkirk",
            image: "../media/actors/odenkirk.png",
            bio: "Bekannt als Saul Goodman in Better Call Saul.",
            age: 62,
            birthdate: "1962-10-22",
            popularSeries: "Better Call Saul",
            awards: ["Critics' Choice Television Award für Better Call Saul"],
        },
        {
            name: "Cillian Murphy",
            image: "../media/actors/murphy.png",
            bio: "Bekannt als Tommy Shelby in Peaky Blinders.",
            age: 48,
            birthdate: "1976-05-25",
            popularSeries: "Peaky Blinders",
            awards: ["Irish Film & Television Award für Peaky Blinders"],
        },
        {
            name: "Tom Hardy",
            image: "../media/actors/hardy.png",
            bio: "Bekannt als Alfie Solomons in Peaky Blinders.",
            age: 47,
            birthdate: "1977-09-15",
            popularSeries: "Peaky Blinders",
            awards: ["BAFTA Rising Star Award"],
        },
        {
            name: "Matthew McConaughey",
            image: "../media/actors/mcconaughey.png",
            bio: "Bekannt als Detective Rust Cohle in True Detective.",
            age: 55,
            birthdate: "1969-11-04",
            popularSeries: "True Detective",
            awards: ["Oscar für Dallas Buyers Club"],
        },
        {
            name: "Woody Harrelson",
            image: "../media/actors/harrelson.png",
            bio: "Bekannt als Detective Marty Hart in True Detective.",
            age: 63,
            birthdate: "1961-07-23",
            popularSeries: "True Detective",
            awards: ["Primetime Emmy Award für Cheers"],
        },
        {
            name: "James Gandolfini",
            image: "../media/actors/gandolfini.png",
            bio: "Bekannt als Tony Soprano in The Sopranos.",
            age: 51, 
            birthdate: "1961-09-18",
            popularSeries: "The Sopranos",
            awards: ["3 Primetime Emmy Awards für The Sopranos"],
        },
        {
            name: "Edie Falco",
            image: "../media/actors/falco.png",
            bio: "Bekannt als Carmela Soprano in The Sopranos.",
            age: 61,
            birthdate: "1963-07-05",
            popularSeries: "The Sopranos",
            awards: ["4 Primetime Emmy Awards"],
        },
        {
            name: "Dominic West",
            image: "../media/actors/west.png",
            bio: "Bekannt als Jimmy McNulty in The Wire.",
            age: 55,
            birthdate: "1969-10-15",
            popularSeries: "The Wire",
            awards: ["BAFTA für Appropriate Adult"],
        },
        {
            name: "Jason Bateman",
            image: "../media/actors/bateman.png",
            bio: "Bekannt als Marty Byrde in Ozark.",
            age: 56,
            birthdate: "1969-01-14",
            popularSeries: "Ozark",
            awards: ["Primetime Emmy Award für Ozark"],
        },
        {
            name: "Laura Linney",
            image: "../media/actors/linney.png",
            bio: "Bekannt als Wendy Byrde in Ozark.",
            age: 61,
            birthdate: "1964-02-05",
            popularSeries: "Ozark",
            awards: ["3 Primetime Emmy Awards"],
        }
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

    // Actor Karussell nach jedem Wechseln updaten
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
        applyGsapAnimations();
    }

    const searchBar = document.getElementById("search-bar");
    searchBar.addEventListener("input", function () {
        const searchTerm = searchBar.value.toLowerCase();
        const filteredActors = actors.filter(actor => actor.name.toLowerCase().includes(searchTerm));
        displayActors(filteredActors);
    });

    // GSAP 
    function applyGsapAnimations() {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray(".actor-card").forEach((card, index) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 95%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
    }
});
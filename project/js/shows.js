document.addEventListener("DOMContentLoaded", function () {
    const body = document.getElementById("shows");

    const sliderShows = [
        { title: "Breaking Bad", image: "../media/shows/breakingbad.png" },
        { title: "The Sopranos", image: "../media/shows/sopranos.png" },
        { title: "Dexter", image: "../media/shows/dexter.png" },
        { title: "Sherlock", image: "../media/shows/sherlock.png" },
        { title: "True Detective", image: "../media/shows/truedetective.png" },
        { title: "Fargo", image: "../media/shows/fargo.png" },
        { title: "Mindhunter", image: "../media/shows/mindhunter.png" },
        { title: "Narcos", image: "../media/shows/narcos.png" }
    ];

    const dailyShows = [
        { 
            title: "Better Call Saul", 
            image: "../media/shows/bettercallsaul_big.png", 
            description: "Ein brillanter, aber moralisch fragwürdiger Anwalt kämpft sich durch die Unterwelt von Albuquerque." 
        },
        { 
            title: "The Wire", 
            image: "../media/shows/thewire_big.png", 
            description: "Ein realistischer Blick auf die Kriminalität in Baltimore und ihre Auswirkungen auf verschiedene Institutionen." 
        },
        { 
            title: "Peaky Blinders", 
            image: "../media/shows/peakyblinders_big.png", 
            description: "Die Geschichte der Shelby-Familie und ihres kriminellen Imperiums im Birmingham der 1920er Jahre." 
        },
        { 
            title: "Ozark", 
            image: "../media/shows/ozark_big.png", 
            description: "Ein Finanzberater wird in einen gefährlichen Geldwäscheplan für ein mexikanisches Kartell verwickelt." 
        }
    ];

    const randomDailyShow = dailyShows[Math.floor(Math.random() * dailyShows.length)];

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
            <div class="slider-container">
                <button class="slider-button left-button">&#10094;</button>
                <div class="slider">
                </div>
                <button class="slider-button right-button">&#10095;</button>
            </div>
        </div>

        <div class="series-of-the-day">
            <div class="series-title">
                <h2>SERIE</h2>
                <h2>DES</h2>
                <h2>TAGES</h2>
            </div>
            <div class="series-image">
                <img src="${randomDailyShow.image}" alt="${randomDailyShow.title}">
            </div>
            <div class="series-info">
                <h2>${randomDailyShow.title}</h2>
                <p>${randomDailyShow.description}</p>
            </div>
        </div>
    `;

    const slider = document.querySelector(".slider");
    sliderShows.forEach(show => {
        const showDiv = document.createElement("div");
        showDiv.className = "show";
        showDiv.style.backgroundImage = `url(${show.image})`;
        showDiv.innerHTML = `<p>${show.title}</p>`;
        slider.appendChild(showDiv);
    });

    const leftButton = document.querySelector(".left-button");
    const rightButton = document.querySelector(".right-button");

    leftButton.addEventListener("click", function () {
        slider.scrollBy({
            left: -450, 
            behavior: "smooth"
        });
    });

    rightButton.addEventListener("click", function () {
        slider.scrollBy({
            left: 450, 
            behavior: "smooth"
        });
    });
});
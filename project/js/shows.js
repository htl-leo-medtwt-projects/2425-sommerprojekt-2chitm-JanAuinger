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

        <!-- Empfehlungen -->
        <div class="recommendations">
            <h3>Empfehlungen für dich</h3>
            <div class="slider-container">
                <button class="slider-button left-button">&#10094;</button>
                <div class="slider">
                </div>
                <button class="slider-button right-button">&#10095;</button>
            </div>
        </div>

        <!-- Serie des Tages -->
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

        <!-- Zufällige Fakten -->
        <div class="random-facts">
            <h3>Zufällige Fakten</h3>
            <p id="random-fact">Klicke unten, um einen Fakt zu sehen.</p>
            <button id="fact-button">Neuen Fakt anzeigen</button>
        </div>

        <!-- Zufälliger Vorschlag -->
        <div class="random-suggestion">
            <h3>Bist du unschlüssig?</h3>
            <button id="suggestion-button">Was soll ich schauen?</button>
            <div id="suggestion-result" class="hidden">
                <img src="" alt="" id="suggestion-image">
                <h2 id="suggestion-title"></h2>
            </div>
        </div>
    `;

    // Slider
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

    // Zufällige Fakten
    const factButton = document.getElementById("fact-button");
    const randomFactElement = document.getElementById("random-fact");

    factButton.addEventListener("click", function () {
        const randomShow = sliderShows[Math.floor(Math.random() * sliderShows.length)].title;
        const facts = {
            "Breaking Bad": [
                "Die blaue Meth-Requisite in der Serie war eigentlich aus Zuckerkristallen hergestellt – perfekt essbar! Breaking Bad",
                "Bryan Cranston hat das ikonische 'Heisenberg'-Hut-Design selbst mitentwickelt. Breaking Bad",
                "Bob Odenkirk (Saul Goodman) improvisierte viele seiner Dialoge. Breaking Bad"
            ],
            "Better Call Saul": [
                "Rhea Seehorn (Kim Wexler) hat viele der emotionalen Szenen in nur einem Take gedreht. Better Call Saul",
                "Bob Odenkirk lernte das Gesetz, um juristische Szenen realistischer zu spielen. Better Call Saul",
                "Die Serie enthält visuelle Hinweise, die auf Schlüsselszenen in 'Breaking Bad' hinweisen. Better Call Saul"
            ],
            "The Sopranos": [
                "James Gandolfini bestand darauf, dass Tony Soprano trotz seiner Grausamkeit auch verletzlich wirkt. The Sopranos",
                "Der ikonische Vorspann der Serie wurde in nur einem Tag gedreht. The Sopranos",
                "Steve Van Zandt, der Silvio Dante spielt, ist eigentlich ein Mitglied der E-Street Band von Bruce Springsteen. The Sopranos"
            ],
            "The Wire": [
                "Dominic West nahm während der Dreharbeiten heimlich Sprachunterricht, um seinen britischen Akzent zu verbergen. The Wire",
                "Die Serie basiert teilweise auf realen Erfahrungen des Schöpfers David Simon, der als Kriminalreporter arbeitete. The Wire",
                "Viele der Nebendarsteller waren echte ehemalige Kriminelle oder Polizisten. The Wire"
            ],
            "Narcos": [
                "Wagner Moura nahm 20 Kilo zu, um Pablo Escobar glaubwürdig darzustellen. Narcos",
                "Die Serie wurde teilweise in Escobars echtem Anwesen gedreht. Narcos",
                "Pedro Pascal (Javier Peña) trug oft echte FBI-Ausrüstung, um sich auf seine Rolle vorzubereiten. Narcos"
            ],
            "Peaky Blinders": [
                "Cillian Murphy las über 300 Bücher zur britischen Geschichte, um sich auf die Rolle des Thomas Shelby vorzubereiten. Peaky Blinders",
                "Die echte Peaky Blinders-Bande existierte, war aber weniger glamourös als in der Serie dargestellt. Peaky Blinders",
                "Die Rauchszenen in der Serie verwenden Kräuterzigaretten, um die Gesundheit der Schauspieler zu schützen. Peaky Blinders"
            ],
            "Dexter": [
                "Michael C. Hall ist ein ausgebildeter Bühnenkünstler und hat vor 'Dexter' vor allem in Musicals gespielt. Dexter",
                "Die ikonische Anfangssequenz wurde von Fans oft als 'perfektes Intro' bezeichnet. Dexter",
                "Die Serie wurde für ihre genauen Darstellungen von forensischer Arbeit gelobt. Dexter"
            ],
            "True Detective": [
                "Die erste Staffel wurde in nur zwei Monaten geschrieben, eine Rekordzeit für eine so komplexe Serie. True Detective",
                "Matthew McConaughey war ursprünglich für die Rolle von Marty Hart vorgesehen, entschied sich aber für Rust Cohle. True Detective",
                "Die Serie enthält viele literarische und philosophische Referenzen. True Detective"
            ],
            "Fargo": [
                "Die Serie verwendet oft visuelle Symmetrien, inspiriert von Stanley Kubrick-Filmen. Fargo",
                "Jede Staffel enthält subtile Verweise auf den originalen 'Fargo'-Film von 1996. Fargo",
                "Die Schauspieler improvisierten viele ihrer Dialoge, um die Gespräche natürlicher wirken zu lassen. Fargo"
            ],
            "Mindhunter": [
                "Die Interviews mit Serienmördern basieren oft Wort für Wort auf realen FBI-Protokollen. Mindhunter",
                "David Fincher, der Produzent, ist bekannt für seine akribische Detailarbeit – manche Szenen wurden über 50 Mal gedreht. Mindhunter",
                "Die Serie war eine der ersten Netflix-Produktionen, die vollständig in 4K gedreht wurde. Mindhunter"
            ],
            "Ozark": [
                "Jason Bateman führte bei mehreren Episoden selbst Regie, darunter die erste und letzte der Serie. Ozark",
                "Julia Garner (Ruth Langmore) gewann mehrere Emmy Awards für ihre Rolle. Ozark",
                "Die Serie wurde an echten Flüssen und Seen in Georgia gedreht, nicht in den Ozarks. Ozark"
            ],
            "Sherlock": [
                "Benedict Cumberbatch lernte, wie man eine Geige spielt, um Sherlock authentisch darzustellen. Sherlock",
                "Die Serie verwendet oft Zeitlupenaufnahmen, um Sherlocks Denkprozesse darzustellen. Sherlock",
                "Martin Freeman (Watson) und Benedict Cumberbatch kannten sich bereits vor der Serie von gemeinsamen Projekten. Sherlock"
            ],
            "Luther": [
                "Idris Elba wurde für seine Darstellung von Detective Luther mit einem Emmy ausgezeichnet. Luther",
                "Der ikonische graue Mantel von Luther wurde von Fans so beliebt, dass er nach der Serie verkauft wurde. Luther",
                "Die Serie basiert lose auf klassischen Detektivgeschichten, kombiniert mit moderner Psychologie. Luther"
            ]
        };
        const randomFact = facts[randomShow]
            ? facts[randomShow][Math.floor(Math.random() * facts[randomShow].length)]
            : "Keine Fakten verfügbar.";
        randomFactElement.textContent = randomFact;
    });

    const suggestionButton = document.getElementById("suggestion-button");
    const suggestionResult = document.getElementById("suggestion-result");
    const suggestionImage = document.getElementById("suggestion-image");
    const suggestionTitle = document.getElementById("suggestion-title");

    suggestionButton.addEventListener("click", function () {
        const randomShow = sliderShows[Math.floor(Math.random() * sliderShows.length)];
        suggestionImage.src = randomShow.image;
        suggestionImage.alt = randomShow.title;
        suggestionTitle.textContent = randomShow.title;

        suggestionResult.classList.remove("hidden");
    });
});
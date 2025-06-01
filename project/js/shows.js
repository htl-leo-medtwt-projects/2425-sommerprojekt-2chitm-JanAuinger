document.addEventListener("DOMContentLoaded", function () {
    const body = document.getElementById("shows");

    const sliderShows = [
        { 
            title: "Breaking Bad", 
            image: "../media/shows/breakingbad.png",
            year: 2008,
            genres: ["Crime", "Drama", "Thriller"],
            description: "Ein Chemielehrer wird zum Drogenbaron – Spannung pur in Albuquerque.",
            awards: [
                "16 Emmy Awards, darunter 'Outstanding Drama Series'",
                "2 Golden Globe Awards",
                "Wurde von der Kritik als eine der besten Serien aller Zeiten gefeiert"
            ]
        },
        { 
            title: "The Sopranos", 
            image: "../media/shows/sopranos.png",
            year: 1999,
            genres: ["Crime", "Drama"],
            description: "Die Mafia, Familie und Therapie – das Leben von Tony Soprano.",
            awards: [
                "21 Emmy Awards",
                "5 Golden Globes",
                "Häufig als die Serie bezeichnet, die das goldene Zeitalter des Fernsehens einläutete"
            ]
        },
        { 
            title: "Dexter", 
            image: "../media/shows/dexter.png",
            year: 2006,
            genres: ["Crime", "Drama", "Mystery"],
            description: "Tagsüber Forensiker, nachts Serienkiller – Dexter Morgan jagt die Bösen.",
            awards: [
                "2 Golden Globe Awards",
                "4 Emmy Awards"
            ]
        },
        { 
            title: "Sherlock", 
            image: "../media/shows/sherlock.png",
            year: 2010,
            genres: ["Crime", "Drama", "Mystery"],
            description: "Sherlock Holmes und Dr. Watson lösen in London moderne Fälle.",
            awards: [
                "9 Emmy Awards",
                "BAFTA TV Award für Beste Dramaserie"
            ]
        },
        { 
            title: "True Detective", 
            image: "../media/shows/truedetective.png",
            year: 2014,
            genres: ["Crime", "Drama", "Mystery"],
            description: "Komplexe Ermittler und dunkle Geheimnisse – jede Staffel ein neues Verbrechen.",
            awards: [
                "5 Emmy Awards",
                "Critics' Choice Television Award"
            ]
        },
        { 
            title: "Fargo", 
            image: "../media/shows/fargo.png",
            year: 2014,
            genres: ["Crime", "Drama", "Thriller"],
            description: "Inspiriert vom Kultfilm – schwarzer Humor und skurrile Verbrechen in Minnesota.",
            awards: [
                "3 Golden Globe Awards",
                "6 Emmy Awards"
            ]
        },
        { 
            title: "Mindhunter", 
            image: "../media/shows/mindhunter.png",
            year: 2017,
            genres: ["Crime", "Drama", "Thriller"],
            description: "FBI-Agenten interviewen Serienmörder und revolutionieren das Profiling.",
            awards: [
                "Satellite Award for Best Television Series",
                "AFI Award"
            ]
        },
        { 
            title: "Narcos", 
            image: "../media/shows/narcos.png",
            year: 2015,
            genres: ["Crime", "Drama", "Biography"],
            description: "Der Aufstieg und Fall von Pablo Escobar und dem Medellín-Kartell.",
            awards: [
                "Emmy-Nominierung für Beste Dramaserie",
                "2 Golden Globe-Nominierungen"
            ]
        }
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
                <div class="slider"></div>
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

        <!-- Show-Detail-Modal (nutzt dieselben CSS-Klassen wie das Actor-Modal) -->
        <div id="show-modal" class="actor-modal hidden">
            <div class="actor-modal-content">
                <button id="modal-close" aria-label="Schließen">&times;</button>
                <img id="modal-img" src="" alt="" />
                <div id="modal-name"></div>
                <div class="modal-meta" id="modal-meta"></div>
                <div class="show-modal-genres" id="modal-genres"></div>
                <div id="modal-bio"></div>
                <div class="awards-title" id="modal-awards-title" style="display:none;">Auszeichnungen</div>
                <ul class="modal-awards-list" id="modal-awards-list"></ul>
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
        showDiv.style.cursor = "pointer";
        showDiv.onclick = () => openShowModal(show);
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

    function openShowModal(show) {
        document.getElementById("modal-img").src = show.image;
        document.getElementById("modal-img").alt = show.title;
        document.getElementById("modal-name").textContent = show.title;
        document.getElementById("modal-meta").textContent = show.year || "";
        const genresDiv = document.getElementById("modal-genres");
        genresDiv.innerHTML = "";
        (show.genres || []).forEach(g => {
            const span = document.createElement("span");
            span.className = "show-modal-genre";
            span.textContent = g;
            genresDiv.appendChild(span);
        });
        document.getElementById("modal-bio").textContent = show.description || "";
        const awardsTitle = document.getElementById("modal-awards-title");
        const awardsList = document.getElementById("modal-awards-list");
        if (show.awards && show.awards.length > 0) {
            awardsTitle.style.display = "";
            awardsList.innerHTML = show.awards.map(a => `<li>${a}</li>`).join("");
        } else {
            awardsTitle.style.display = "none";
            awardsList.innerHTML = "";
        }
        document.getElementById("show-modal").classList.remove("hidden");
    }
    document.getElementById("modal-close").onclick = function() {
        document.getElementById("show-modal").classList.add("hidden");
    };
    document.getElementById("show-modal").onclick = function(e) {
        if (e.target === this) document.getElementById("show-modal").classList.add("hidden");
    };
});
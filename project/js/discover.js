document.addEventListener("DOMContentLoaded", function () {
    const body = document.getElementById("discover");

    const actors = [
        { name: "Al Pacino", image: "alpacino.png" },
        { name: "Michael C. Hall", image: "chall.png" },
        { name: "Benicio del Toro", image: "deltoro.png" },
        { name: "Robert De Niro", image: "deniro.png" },
        { name: "Johnny Depp", image: "depp.png" },
        { name: "Leonardo DiCaprio", image: "dicaprio.png" },
        { name: "Idris Elba", image: "elba.png" },
        { name: "Giancarlo Esposito", image: "eposito.png" },
        { name: "Pedro Pascal", image: "pascal.png" },
        { name: "Joe Pesci", image: "pesci.png" },
        { name: "Robert Wagner", image: "wagner.png" },
        { name: "Damnson Idris", image: "idris.png" }
    ];

    const news = [
        { news: "The next season of Dexter will release in April!"},
        { news: "Actor dies at the age of 80."},
        { news: "The new cast of The Rookie got leaked!"},
        { news: "Reminder: Netflix will get more expensive soon!"},
        { news: "Movie X breaks box office records!"},
        { news: "Fan theories about Series Y are going viral!"},
        { news: "The director of Film Z announces a sequel."},
        { news: "Top 10 most anticipated movies of the year revealed."},
        { news: "Show A renewed for a second season."},
        { news: "Exclusive: Behind the scenes of the new Show B."}
    ]

    function getRandomActors(arr, num) {
        return arr.sort(() => 0.5 - Math.random()).slice(0, num);
    }

    function getRandomNews(){
        return Math.floor(Math.random() * 10);
    }

    const selectedActors = getRandomActors(actors, 4);

    body.innerHTML = `
        <div class="navbar">
            <button class="nav-button">DISCOVER</button>
            <button class="nav-button">SHOWS</button>
            <button class="nav-button">ACTORS</button>
            <button class="nav-button">GAMES</button>
            <div class="user-icon" onclick="navigateTo('../pages/profile.html')">
                <img src="../media/UserIcon.png" alt="User Icon">
            </div>
        </div>

        <h1>CrimeVerse</h1>
        <h3>Welcome back, User!</h3>

        <div class="discover-news">
            <h2>NEWS</h2>
            <div class="news1">${news[getRandomNews()].news}<br><br>Find out more</div>
            <div class="news2">${news[getRandomNews()].news}<br><br>Find out more</div>
            <div class="news3">${news[getRandomNews()].news}<br><br>Find out more</div>
            <div class="news4">${news[getRandomNews()].news}<br><br>Find out more</div>
        </div>

        <div class="discover-game">
            <h2>Ready to try out the Quiz?</h2>
            <p>Choose one of the categories you're best in and get the highscore!</p>
            <button class="discover_button">Go to the Games</button>
        </div>

        <div class="most-wanted-actors">
            <h2>MOST WANTED ACTORS</h2>
            <div class="actors1">${selectedActors[0].name}</div>
            <div class="actors2">${selectedActors[1].name}</div>
            <div class="actors3">${selectedActors[2].name}</div>
            <div class="actors4">${selectedActors[3].name}</div>
            <p>You can find some of the best actors on the actors page.</p>
            <button class="discover_button">Actors page</button>
        </div>
    `;

    document.querySelector(".actors1").style.backgroundImage = `url('../media/actors/${selectedActors[0].image}')`;
    document.querySelector(".actors2").style.backgroundImage = `url('../media/actors/${selectedActors[1].image}')`;
    document.querySelector(".actors3").style.backgroundImage = `url('../media/actors/${selectedActors[2].image}')`;
    document.querySelector(".actors4").style.backgroundImage = `url('../media/actors/${selectedActors[3].image}')`;
});
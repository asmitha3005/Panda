let heartsStarted = false;


/* CHANGE SCREEN */

function changeScreen(current, next) {

    document.getElementById(current).classList.remove("active");

    document.getElementById(next).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* START */

function startLove() {

    changeScreen("screen1", "screen2");

    startFloatingHearts();
}


/* SORRY */

function showSorry() {

    changeScreen("screen2", "screen3");

    createLoveExplosion();
}


/* LETTER */

function showLetter() {

    changeScreen("screen3", "screen4");

    createLoveExplosion();
}


/* LOVE */

function showLove() {

    changeScreen("screen4", "screen5");

    massiveHeartExplosion();
}


/* QUESTION */

function showChoice() {

    changeScreen("screen5", "screen6");

    createLoveExplosion();
}


/* YES */

function yesLove() {

    changeScreen("screen6", "screen7");

    massiveHeartExplosion();

    massiveHeartExplosion();
}


/* HUG */

function hugMe() {

    changeScreen("screen6", "screen7");

    massiveHeartExplosion();
}


/* FLOATING HEARTS */

function startFloatingHearts() {

    if (heartsStarted) return;

    heartsStarted = true;

    const container =
        document.querySelector(".floating-hearts");

    setInterval(() => {

        const heart =
            document.createElement("div");

        heart.className = "floating-heart";

        const hearts = [
            "❤️",
            "💕",
            "💗",
            "💖",
            "💘",
            "💓",
            "💞"
        ];

        heart.innerHTML =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.fontSize =
            (15 + Math.random() * 30) + "px";

        heart.style.animationDuration =
            (4 + Math.random() * 5) + "s";

        container.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 10000);

    }, 500);
}


/* LOVE EXPLOSION */

function createLoveExplosion() {

    const container =
        document.querySelector(".floating-hearts");

    for (let i = 0; i < 35; i++) {

        const heart =
            document.createElement("div");

        heart.className =
            "floating-heart";

        const hearts = [
            "❤️",
            "💗",
            "💕",
            "💖",
            "💘"
        ];

        heart.innerHTML =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.fontSize =
            (20 + Math.random() * 35) + "px";

        heart.style.animationDuration =
            (3 + Math.random() * 4) + "s";

        container.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 8000);
    }
}


/* MASSIVE LOVE EXPLOSION */

function massiveHeartExplosion() {

    const container =
        document.querySelector(".floating-hearts");

    const heartTypes = [
        "❤️",
        "💗",
        "💕",
        "💖",
        "💘",
        "💓",
        "💞",
        "🥹",
        "🫂"
    ];

    for (let i = 0; i < 120; i++) {

        const heart =
            document.createElement("div");

        heart.className =
            "floating-heart";

        heart.innerHTML =
            heartTypes[
                Math.floor(
                    Math.random() * heartTypes.length
                )
            ];

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.fontSize =
            (15 + Math.random() * 45) + "px";

        heart.style.animationDuration =
            (2 + Math.random() * 5) + "s";

        heart.style.animationDelay =
            Math.random() * 2 + "s";

        container.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 10000);
    }
}


console.log(
    "Tharun ❤️ You are loved more than you know."
);

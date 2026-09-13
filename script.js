/* ==========================================
   THARUN LOVE WEBSITE - VERSION 2
========================================== */


/* =========================
   SCREEN SWITCH
========================= */

function changeScreen(current, next) {

    document.getElementById(current).classList.remove("active");

    document.getElementById(next).classList.add("active");

}


/* =========================
   START WEBSITE
========================= */

function startLove() {

    changeScreen("screen1", "screen2");

    createFloatingHearts();

}


/* =========================
   SHOW SORRY
========================= */

function showSorry() {

    changeScreen("screen2", "screen3");

    createLoveExplosion();

}


/* =========================
   SHOW LOVE
========================= */

function showLove() {

    changeScreen("screen3", "screen4");

    createLoveExplosion();

}


/* =========================
   SHOW CHOICE
========================= */

function showChoice() {

    changeScreen("screen4", "screen5");

}


/* =========================
   YES BUTTON
========================= */

function yesLove() {

    changeScreen("screen5", "screen6");

    massiveHeartExplosion();

}


/* =========================
   HUG FIRST BUTTON
========================= */

function hugMe() {

    changeScreen("screen5", "screen7");

    createFloatingHearts();

}


/* =========================
   FLOATING HEARTS
========================= */

function createFloatingHearts() {

    const container =
        document.querySelector(".floating-hearts");

    setInterval(() => {

        const heart =
            document.createElement("div");

        heart.className =
            "floating-heart";

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
            hearts[
                Math.floor(
                    Math.random() * hearts.length
                )
            ];

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

    }, 450);

}


/* =========================
   LOVE EXPLOSION
========================= */

function createLoveExplosion() {

    const container =
        document.querySelector(".floating-hearts");

    for (let i = 0; i < 30; i++) {

        const heart =
            document.createElement("div");

        heart.className =
            "floating-heart";

        heart.innerHTML = "❤️";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.fontSize =
            (20 + Math.random() * 30) + "px";

        heart.style.animationDuration =
            (3 + Math.random() * 3) + "s";

        container.appendChild(heart);


        setTimeout(() => {

            heart.remove();

        }, 7000);

    }

}


/* =========================
   FINAL HEART EXPLOSION
========================= */

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
        "🥹"
    ];


    for (let i = 0; i < 120; i++) {

        const heart =
            document.createElement("div");

        heart.className =
            "floating-heart";

        heart.innerHTML =
            heartTypes[
                Math.floor(
                    Math.random() *
                    heartTypes.length
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

        }, 9000);

    }

}


/* =========================
   CONSOLE MESSAGE ❤️
========================= */

console.log(
    "Tharun ❤️ You are loved more than you know."
);

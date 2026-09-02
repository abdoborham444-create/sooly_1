let currentPage = 1;
const totalPages = 6;

// ===============================
// PAGE NAVIGATION
// ===============================

function showPage(pageNumber) {
    if (pageNumber < 1 || pageNumber > totalPages) return;

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById("page" + pageNumber);

    if (selectedPage) {
        selectedPage.classList.add("active");
        selectedPage.scrollTop = 0;
    }

    currentPage = pageNumber;

    // Show confetti on final page
    if (pageNumber === 6) {
        setTimeout(startConfetti, 300);
    }
}

function nextPage() {
    if (currentPage < totalPages) {
        showPage(currentPage + 1);
    }
}

function previousPage() {
    if (currentPage > 1) {
        showPage(currentPage - 1);
    }
}


// ===============================
// KEYBOARD NAVIGATION
// ===============================

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        nextPage();
    }

    if (event.key === "ArrowLeft") {
        previousPage();
    }
});


// ===============================
// MUSIC
// ===============================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let musicPlaying = false;

if (music && musicBtn) {

    musicBtn.addEventListener("click", function() {

        if (!musicPlaying) {

            music.play()
                .then(function() {
                    musicPlaying = true;
                    musicBtn.innerHTML = "♫ <span>Pause Our Song</span>";
                })
                .catch(function(error) {
                    console.log("Music error:", error);

                    alert(
                        "The song could not be played.\n\n" +
                        "Make sure the file is named exactly:\n" +
                        "our-song.mp3\n\n" +
                        "and is inside the music folder."
                    );
                });

        } else {

            music.pause();
            musicPlaying = false;

            musicBtn.innerHTML = "♫ <span>Play Our Song</span>";
        }
    });

}


// ===============================
// FLOATING HEARTS
// ===============================

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.innerHTML = Math.random() > 0.5 ? "♡" : "♥";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";

    heart.style.fontSize =
        (12 + Math.random() * 15) + "px";

    heart.style.color = "#d89aa8";

    heart.style.zIndex = "5";

    heart.style.pointerEvents = "none";

    heart.style.animation =
        "floatHeart " +
        (7 + Math.random() * 5) +
        "s linear forwards";

    document.body.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 13000);
}


// Create hearts every second
setInterval(createHeart, 1000);


// ===============================
// FLOATING HEART ANIMATION
// ===============================

const heartAnimation = document.createElement("style");

heartAnimation.innerHTML = `
@keyframes floatHeart {

    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 0;
    }

    15% {
        opacity: 0.45;
    }

    80% {
        opacity: 0.25;
    }

    100% {
        transform: translateY(-110vh) rotate(35deg);
        opacity: 0;
    }
}
`;

document.head.appendChild(heartAnimation);


// ===============================
// SPARKLES
// ===============================

function createSparkle() {

    const sparkle = document.createElement("div");

    sparkle.innerHTML = "✦";

    sparkle.style.position = "fixed";

    sparkle.style.left =
        Math.random() * 100 + "vw";

    sparkle.style.top =
        Math.random() * 100 + "vh";

    sparkle.style.color = "#c8a261";

    sparkle.style.fontSize =
        (7 + Math.random() * 9) + "px";

    sparkle.style.zIndex = "5";

    sparkle.style.pointerEvents = "none";

    sparkle.style.transition = "2s";

    sparkle.style.opacity = "0.8";

    document.body.appendChild(sparkle);

    requestAnimationFrame(function() {

        sparkle.style.opacity = "0";

        sparkle.style.transform =
            "scale(1.8) rotate(90deg)";
    });

    setTimeout(function() {
        sparkle.remove();
    }, 2000);
}

setInterval(createSparkle, 1300);


// ===============================
// CONFETTI
// ===============================

function startConfetti() {

    for (let i = 0; i < 100; i++) {

        setTimeout(function() {

            const piece = document.createElement("div");

            piece.style.position = "fixed";

            piece.style.top = "-15px";

            piece.style.left =
                Math.random() * 100 + "vw";

            piece.style.width = "7px";

            piece.style.height = "11px";

            piece.style.background = [
                "#d89aa8",
                "#c8a261",
                "#6b2d39",
                "#e2d5de",
                "#f8dce4"
            ][Math.floor(Math.random() * 5)];

            piece.style.zIndex = "2000";

            piece.style.pointerEvents = "none";

            piece.style.animation =
                "confettiFall " +
                (3 + Math.random() * 4) +
                "s linear forwards";

            document.body.appendChild(piece);

            setTimeout(function() {
                piece.remove();
            }, 7500);

        }, i * 20);
    }
}


// ===============================
// CONFETTI ANIMATION
// ===============================

const confettiAnimation = document.createElement("style");

confettiAnimation.innerHTML = `
@keyframes confettiFall {

    0% {
        transform: translateY(0) rotate(0deg);
    }

    100% {
        transform: translateY(110vh) rotate(720deg);
    }
}
`;

document.head.appendChild(confettiAnimation);


// ===============================
// START WEBSITE
// ===============================

showPage(1);
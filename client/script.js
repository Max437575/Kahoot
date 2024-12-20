const pfps = [
    "kim",
    "kohl",
    "obamna",
    "lindner",
    "marx",
    "pooh",
    "philipp",
    "antifa",
    "biden",
    "jan",
    "bert",
    "scott",
    "bob",
    "gaga",
    "gman",
    "kafka",
    "gun",
    "heisenberg",
    "pilz",
    "klaviatur",
    "dori",
    "mode",
    "ohair",
    "plankton",
    "sandy",
    "shocked",
    "shrek",
    "stitch",
];

const wrongTexts = [
    "Kann es sein, dass Du dumm bist?",
    "Heute Gehirn vergessen oder was?",
    "Traurig",
    "Interessante Theorie, aber falsch",
    "Hast Du überhaupt nachgedacht?",
    "Das ist echt peinlich",
    "Ach komm",
    "Da schreibt sich Pointe glatt von selbst",
    "Dein Ernst?💀💀",
    "Etwas Anstrengung bitte?",
];

const rightTexts = [
    "Glaube an Dich, Prinzessin👸",
    "Ich bin Stolz auf Dich🤗",
    "Gut gemacht :))))",
    "Yass, gurl💅",
    "Richtig gepickt🥺👉👈",
    "Dafür verdienst Du ein Fleißsternchen🤩",
    "Unübertrefflich🥶",
    "très bien🥖🇫🇷",
    "Ein wahrer PoWi-Student🧑‍🎓",
    "Phänomenal❗❗",
];

function setIntermission(status) {
    let text = "Du musst schon eine Antwort abgeben??";
    let emoji = "❓❓";

    if (status === "right") {
        text = rightTexts[Math.floor(Math.random() * rightTexts.length)];
        emoji = "✅";
    } else if (status === "wrong") {
        text = wrongTexts[Math.floor(Math.random() * wrongTexts.length)];
        emoji = "❌";
    } else if (status === "look") {
        text = "Vorne spielt die Musik!";
        emoji = "😲";
    }

    $(".intermission-text").innerText = text;
    $(".intermission-emoji").innerText = emoji;
}

/*const pfps = [
    "bert",
    "scott",
    "bob",
    "gaga",
    "gman",
    "gun",
    "heisenberg",
    "jan",
    "pilz",
    "kim",
    "kohl",
    "klaviatur",
    "lindner",
    "marx",
    "pooh",
    "dori",
    "mode",
    "ohair",
    "biden",
    "philipp",
    "antifa",
    "plankton",
    "sandy",
    "kafka",
    "shocked",
    "obamna",
    "shrek",
    "stitch",
];*/

const $ = (q) => {
    return document.querySelector(q);
};

let socket;
let countdown = 0;
let currentCorrect = -1;
let optionsLocked = true;
let chosenOption = -1;

function doCountdown() {
    countdown = 9;
    let timer = setInterval(() => {
        countdown -= 0.1;
        // console.log(countdown);
        if (countdown <= 0) {
            countdown = 0;
            clearInterval(timer);
        }
    }, 100);
}

function lightup(number) {
    for (let i = 0; i < 3; i++) {
        if (i == number) {
            $("#option" + i).style.filter = "brightness(1.0)";
        } else {
            $("#option" + i).style.filter = "brightness(0.3)";
        }
    }
}

function resetLights() {
    for (let i = 0; i < 3; i++) {
        $("#option" + i).style.filter = "brightness(1.0)";
    }
}

for (let i = 0; i < 3; i++) {
    $("#option" + i).addEventListener("click", async (e) => {
        if (optionsLocked) return;
        if (chosenOption == i) return; //nicht doppelt senden
        chosenOption = i;
        socket.emit("client/answer", {
            option: i,
            username: localStorage.getItem("username"),
            time: countdown,
        });
        setIntermission(currentCorrect == i ? "right" : "wrong");
        lightup(i);
    });
}

function login() {
    socket = io();
    socket.on("connect", async () => {
        socket.emit("client/login", {
            username: localStorage.getItem("username"),
            pfp: localStorage.getItem("pfp"),
        });
    });
    socket.on("host/235", async () => {
        optionsLocked = false;
        setIntermission();
        doCountdown();
        resetLights();
        $(".intermission-container").style.display = "none";
        $(".option-container").style.display = "flex";
    });
    socket.on("host/235prefetch", async (data) => {
        setIntermission("look");
        chosenOption = -1;
        currentCorrect = data.correct;
        for (let i = 0; i < 3; i++) {
            $("#option" + i + "Text").innerText = data.options[i];
            $("#option" + i + "Img").src =
                "/assets/img/" + data.images[i] + ".png";
        }
    });
    socket.on("host/place", async (data) => {
        const numbers = [
            "0️⃣",
            "1️⃣",
            "2️⃣",
            "3️⃣",
            "4️⃣",
            "5️⃣",
            "6️⃣",
            "7️⃣",
            "8️⃣",
            "9️⃣",
            "1️⃣0️⃣",
            "1️⃣1️⃣",
            "1️⃣2️⃣",
            "1️⃣3️⃣",
            "1️⃣4️⃣",
            "1️⃣5️⃣",
            "1️⃣6️⃣",
            "1️⃣7️⃣",
            "1️⃣8️⃣",
            "1️⃣9️⃣",
            "2️⃣0️⃣",
            "2️⃣1️⃣",
            "2️⃣2️⃣",
            "2️⃣3️⃣",
            "2️⃣4️⃣",
            "2️⃣5️⃣",
            "2️⃣6️⃣",
            "2️⃣7️⃣",
            "2️⃣8️⃣",
            "2️⃣9️⃣",
            "3️⃣0️⃣",
            "3️⃣1️⃣",
            "3️⃣2️⃣",
            "3️⃣3️⃣",
            "3️⃣4️⃣",
            "3️⃣5️⃣",
            "3️⃣6️⃣",
            "3️⃣7️⃣",
            "3️⃣8️⃣",
            "3️⃣9️⃣",
        ];
        console.log("received place");
        data.players.forEach((player) => {
            if (player.username == localStorage.getItem("username")) {
                $(".intermission-emoji").innerText = numbers[player.place];
                $(".intermission-text").innerText = `Du wurdest mit ${player.points.toLocaleString("de")} Punkten ${player.place}. von ${data.players.length}. Glückwunsch!`;
            }
        });
    });
    socket.on("host/ran", async () => {
        optionsLocked = true;
    });
    socket.on("host/revealed", async () => {
        $(".option-container").style.display = "none";
        $(".intermission-container").style.display = "flex";
    });
}

function forceFullscreen() {
    document.body.requestFullscreen();
    try {
        screen.orientation.lock("landscape");
    } catch {
        alert("Wäre echt nett wenn du mal Querformat machen könntest");
    }
}

document.addEventListener("DOMContentLoaded", (e) => {
    if (localStorage.getItem("username")) {
        $(".username-input").value = localStorage.getItem("username");
    }

    /*if (localStorage.getItem("username") && localStorage.getItem("pfp")) {
        $(".login-container").style.display = "none";
        $(".intermission-container").style.display = "flex";

        screen.orientation.addEventListener("change", forceFullscreen);
        forceFullscreen();
        login();
    }*/

    const pfpInput = $(".pfp-input");
    for (let i = 0; i < pfps.length; i++) {
        const elem = document.createElement("img");
        elem.src = `/assets/pfp/${pfps[i]}.png`;
        elem.className = "pfp-img";
        elem.addEventListener("click", (e) => {
            let pfpImages = document.getElementsByClassName("pfp-img");
            for (let j = 0; j < pfpImages.length; j++) {
                delete pfpImages[j].dataset.selected;
            }
            elem.dataset.selected = "true";
            localStorage.setItem("pfp", pfps[i]);
        });
        if (localStorage.getItem("pfp") == pfps[i]) {
            elem.dataset.selected = "true";
        }
        pfpInput.appendChild(elem);
    }
});

$(".username-input").addEventListener("input", (e) => {
    $(".username-input").value = $(".username-input").value.trim();
    if($(".username-input").value.length > 18) {
        $(".username-input").value = $(".username-input").value.slice(0, 18);
    }
    let username = $(".username-input").value;
    if (!username || username == "") return;
    localStorage.setItem("username", username);
});

$(".login-button").addEventListener("click", (e) => {
    if (!localStorage.getItem("pfp")) return;
    if (!localStorage.getItem("username")) return;
    $(".login-container").style.display = "none";
    $(".intermission-container").style.display = "flex";

    screen.orientation.addEventListener("change", forceFullscreen);
    document.addEventListener("click", forceFullscreen);
    forceFullscreen();
    login();
});

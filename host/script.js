const $ = (q) => {
    return document.querySelector(q);
};

const QUESTIONS = [
    {
        task: "Question 0!!!",
        options: ["ERROR", "Q0", "Falsche Frage!!!"],
        images: ["himmler", "krah", "hocke"],
        hint: "Frage 0",
        correct: 1,
        solution: "000000000"
    },
    {
        task: "Fangen wir mal einfach an - und rot. Welche politische Theorie betrachtet den Staat als Instrument der herrschenden Klasse zur Ausbeutung der Arbeiterschaft?",
        options: ["Marxismus", "Elitismus", "Konstruktivismus"],
        images: ["2", "3", "5"],
        hint: "Arbeiter, Bauern nehmt die Gewehre, nehmt die Gewehre zur Hand",
        correct: 0,
        solution: "MAAARRXXX Elitismus heißt nur Herrschaft durch eine Elite."
    },
    {
        task: "Bei der Politik geht es oft auch um knappe Mittel. Es gibt eben nur eine begrenzte Anzahl Steuerzahler, die eine begrenzte Anzahl Steuern zahlen also steht nicht unendlich viel Kapital zur Verfügung. Daher muss weise Entschieden werden, wer dieses am dringensten benötigt. Daher: Welches Bundesministerium erhielt im Jahr 2022 den größten Anteil des Bundeshaushalts?",
        options: [
            "Ministerium für Verteidigung",
            "Ministerium für Arbeit und Soziales",
            "Ministerium für Gesundheit",
        ],
        images: ["bmvg", "bmas", "bmg"],
        hint: "Ich würde Digitales und Verkehr nehmen",
        solution:
            "Das BMAS mit 168.508.107.000 (168 Mia. 508 Mio). Das sind 35% des gesamten Haushalts. Das finanziert v.a. Rente und Bürgergeld. Generell soziale Leistungen",
        correct: 1,
    },
    {
        task: "In einem kapitalistisch geprägtem Land wird das Bruttoinlandsprodukt insgesamt betrachtet immer weiter steigen. Jedoch erfährt man zwischendrin auch Gefälle. Das BIP verhält sich wie eine steigende Sinuskurve. Wie nennt man dieses Verhalten?",
        options: ["»Kollaturzyklus«", "»Konjekturzyklus«", "»Konjunkturzyklus«"],
        images: ["2", "3", "5"],
        hint: "GRW-Stoff 9./10. Klasse",
        solution:
            "Kollatur wäre das Recht zur Verleihung eines Kirchenamtes <br> Konjektur ist ein Verfahren der Textkritik",
        correct: 2,
    },
    {
        task: "In den Sozialwissenschaften unterteilt man das politische Geschehen auf drei Ebenen. Auf welcher befinden sich Parteien, Parlamente und Regierungen?",
        options: ["Mikroebene", "Mesoebene", "Makroebene"],
        images: ["mikro", "meso", "makro"],
        hint: "Es fängt mit M an und hört mit Ebene auf",
        correct: 1,
        solution: "Der Präfix Meso kommt aus dem griechischen und heißt Mittig. Makro wäre für politische Systeme. Mikro wäre für Individuen/Akteure."
    },
    {
        task: "Wenn wir schon einmal bei altem Stoff sind: das magische Viereck. Diese stellt die Beziehung wirtschaftpolitischer Ziele dar. Generell sollte man alle 4 erfüllen sonst geht es der Wirtschaft und sommit den Bürgern nicht gut. Welches der folgenden Zeile gehört NICHT zum magischen Viereck?",
        options: ["stabiles Preisniveau", "gerechte Einkommensverteilung", "hoher Beschäftigungsgrad"],
        images: ["2", "3", "5"],
        hint: "Die Welt ist ungerecht",
        solution: "stabiles Preisniveau, hoher Beschäftigungsgrad, außenwirtschaftliches Gleichgewicht und stetiges und angemessenes Wirtschaftswachstum. Es geht hier eben um das Gesamtwohl und nicht unbedingt das des Einzelnen!",
        correct: 1
    },
    {
        task: "Die EU ist eine echt geile Sache. Sicherheit, wirtschaftliche Zusammenarbeit, einfaches Reisen, etc. etc. Danke an die Leute die es möglich gemacht haben. Nun aber Frage: Wer hat es nicht möglich gemacht? Welches der folgenden Länder war kein EU-Gründungsmitglied?",
        options: ["Italien", "Luxemburg", "Spanien"],
        images: ["italien", "luxemburg", "spanien"],
        hint: "Das gesuchte Land liegt in Europa",
        solution: "Deutschland, Frankreich, Italien und die Beneluxstaaten haben sich 1952 zusammengeschlossen.",
        correct: 2,
    },
    {
        task: "Ui noch eine Frage zur EU: Zu was haben diese Länder sich eigentlich zusammengeschlossen? Weil es hieß damals noch nicht EU. Zwischendrin gab es ein kleines Rebranding. Mit welchem Akronym fing die EU an?",
        options: ["»E.G.K.S.«", "»O.O.C.A.«", "»K.S.B.E.«"],
        images: ["2", "3", "5"],
        hint: "Es ging original um Kohle und Stahl",
        solution: "Natürlich die E.G.K.S, die Europäische Gemeinde für Kohle und Stahl. Damals noch kriegswichtige Sektoren. Es machte also Sinn sich nach dem 2. WK. dort gegenseitig zu kontrollieren.",
        correct: 0
    },
    {
        task: "Ich lese euch mal etwas vor, ja? Einen inneren Monolog <br> Uncle Sam denkt sich: Woher soll ich wissen, was der Kommunist wirklich treibt? So hinter verschlossenen Türen, hinter vorgehaltener Hand? Dem ist doch nicht zu trauen. Besonders sein ganzes Aufrüsten, was er defensiv begründet macht mich ja ganz argwöhnisch. Er meint er hätte kein größeres Militär als ich und würde nur auf Nummer Sicher gehen. Na dann werde ich halt stärker sicher gehen. Und wenn es heißt, dass ich zuerst den roten Knopf drücken muss. <br> Welcher Denkschule der internationalen Beziehung folgt Uncle Sam hier?",
        options: ["Liberalismus","Realismus",  "Kollektivismus"],
        images: ["money", "eyebrow", "hugging"],
        hint: "Emojis",
        correct: 1,
        solution: "Der Realismus geht davon aus, dass sich Nationen nicht gegenseitig vertrauen können und daher immer vom Worst-Case (Krieg) ausgehen müssen. Das ist der klassische Wahn des kalten Krieges. Frieden gibt nicht bzw. kann nur kurzzeitig erscheinen."
    },
    {
        task: "Trivia. Im Bundestag sitzen verdammt viele Leute. Wie viele genau? Das dürft ihr mir sagen :)",
        options: ["734 Abgeordnete", "630 Abgeordnete", "709 Abgeordnete"],
        images: ["2", "3", "5"],
        hint: "Ratet einfach lol",
        correct: 0,
        solution: "709 war des 19. Bundestag, 630 der 18. Bundestag"
    },
    {
        task: "Wo wir nun einmal beim kalten Krieg sind: Der Eiserne Vorhang ist eigentlich eine echt treffende Metapher für die dt. dt. Grenze. Frage: wer prägte den Begriff?",
        options: ["Winston Churchill", "Dwight Eisenhower", "Helmut Schmidt"],
        images: ["churchill", "eisenhower", "schmidt"],
        hint: "Raucht wie ein Schlot",
        correct: 0,
        solution: "Am 5. März 1946 im Westminster College hieß es: From Stettin in the Baltic, to Trieste in the Adriatic, an iron curtain has descended across the continent."
    },
    {
        task: "Manchmal will man einfach mal einen Putsch durchziehen. Nach einem erfolgreichen Putsch sieht es mit der Regierung nicht so gut aus. Wie nennt man eine meist provisorische Regierung, bei der Herrschaft in der Hand einer kleinen Gruppe Leuten aus dem Militär liegt?",
        options: ["Plutokratie", "Oligarchie", "Junta"],
        images: ["2", "3", "5"],
        hint: "Marskratie / Venuskratie",
        correct: 2,
        solution: "Plutokratie nach Aristoteles ist Herrschaft durch eine kleine Gruppe - Herkunft nicht angegeben. Plutokratie ist die Herrschaft durch Reiche."
    },
    {
        task: "Trivia. Die 1950er waren richtig arschgeil für die deutsche Wirtschaft (also die Westdeutsche). Da kannst du die Konjunkturkurve von vorhin vergessen. Da gab es keine Depression, es ging rasant aufwärts. So rasant, dass die Arbeiter im eigenen Land nicht reichten. Deshalb holte man sich Gastarbeiter heran. So viele, dass man mit Armando Rodrigues de Sá die eine millionen Marke knackte. Nun zur Frage: Was hat man Armando zur Ankunft geschenkt?",
        options: ["VW Käfer", "Philips Farbfernseher", "Zündapp Roller"],
        images: ["kafer", "fernseher", "zundapp", ],
        hint: "Überlegen, wie viel man für den eine Millionsten Gastarbeiter ausgibt",
        correct: 2,
        solution: "Zündapp Sport Combinette. Ein VW Käfer wäre viel zu teuer gewesen und Farbfernsehen gab es noch gar nicht. Das Spektakel geschah erst 1967 mit Willy Brand vor der Kamera. Armando ist 1964 eingereist."
    },
    {
        task: "Manchmal ist es interessant zu wissen, was die Nachbarn so machen. Liechtenstein bspw. Das ist eine demokratisch-parlamentarische konstitutionelle Erbmonarchie. Zu Deutsch: etwas veraltet. Da wundert man sich schon wann die z.B. das Wahlrecht für Frauen einführten. Ich hoffe ihr habt ZDF Magazin Royale geschaut",
        options: ["1929", "1957", "1984"],
        images: ["meh", "frown", "angry"],
        hint: "Keiner. Rateaufgabe",
        correct: 2,
        solution: "George Orwell bist du das? Es ist davor sogar schonmal 2x gescheitert. 1971 und 1973 durften Männer wählen, ob Frauen wählen dürfen😬. 1992 wurde dann auch endlich mal die Gleichstellung der Geschlechter in der Verfassung festgeschrieben. Wir schafften das übrigens 1957. Frauenwahlrecht 1918. Und wir haben keine Monarchie mehr. Und Neuseeland hatte Wahlrecht schon im 19. Jhd."
    },
    {
        task: "Der Strommarkt ist etwas anders als normale Märkte. Jeder steckt im selben Boot. Am Ende landet es im selben Kabel. Daher: Wie wird bestimmt wie viel Stromerzeuger pro MWh bekommen?",
        options: ["Versteigerung", "Teuerster Erzeuger", "Durchschnitt aller Erzeuger"],
        images: ["2", "3", "5"],
        hint: "Es ist nicht Angebot und Nachfrage",
        correct: 1,
        solution: "Auch Merit-Order-Prinzip genannt -> Gaspreis Explosion, mehr verdienst an grünem strom, Laufkosten vs Installation"
    },
    {
        task: "Lasst uns über Leon reden. Leon weiß von einem Kleinbauern, der am Straßenrand Äpfel für nur 50ct pro kg verkauft - günstiger als im Supermarkt. Da Leon ein Performer ist, sieht er hier eine Möglichkeit den alten Herren mal so richtig gut auszunehmen: Er kauft eine große Menge Äpfel vom dummen Bauern ab und verkauft sie dirkekt weiter, und zwar auf dem Wochenmarkt für 3 Euro pro kg. Omg, eine Gewinnmarge. Dabei redet sich Leon ein, er würde durch den Transport und die Vermarktung den höheren Preis rechtfertigen und kann somit Nachts schlafen. Wie nennt man die Sünde, die Leon hier begeht?",
        options: ["Ponzi-Wirtschaft", "Upselling", "Arbitrage"],
        images: ["winged", "stonk", "bag"],
        hint: "Ich würde Dropshipping nehmen",
        correct: 2,
        solution: "Ponzi-Wirtschaft gibt es nicht. Wenn dann Ponzischema (Arbitrage mit Briefmarken war aber ein Teil der Operation). Beim Upselling überredet man den Kunden ein teureres Modell zu kaufen. Arbitrage ist im Endeffekt Aktienmarkt, Metallhandel und Dropshipping. Eigentlich eher mit Marktgut und keine Äpfel."   
    },
    {
        task: "Wow mal eine Frage vom Handout. Ich hoffe ihr habt es gelesen. Keine Sorge, ist keine ernste Frage. Protest kommt in vielen Formen. Die spannenste ist wenn es physisch wird. Welche Jugendorganisation hat 1991 Kanzler Dr. Helmut Kohl mit Eiern beworfen und getroffen?",
        options: ["Junge Union", "Jusos", "Jungle Liberale"],
        images: ["union", "jusos", "liberale"],
        hint: "Es war glaube ein Jugendorganisation",
        correct: 1,
        solution: "Junge Liberale Website generator.<br>Seht ihr die Rose? Das steht für rot. Jusos, das steht für Jungsozialisten. Palimm, Palimm, die sind aus der SPD. Kanzler Kohl war auch SPD. Mehr aus den eigenen reihen kann es nicht kommen. Es geschah übrigens auf einer Reise nach Halle (siehe Wiedervereinigung). Die Sache mit den Eiern ist schon mehrfach passiert aber hier wurde getroffen. Und natürlich hat Jan Böhmermann ein ganzes Musical drüber gemacht."
    },
    {
        task: 'Zitate können die Welt verändern. Z.B. "Deine Mudda" von Sigmund Freud. Es gibt aber einige da denkt man sich nur 😬. Ich lese einfach mal vor. Und bitte, ich zitiere, d.h. es hat jemand anderes gesagt. <br> Aber Sie sind die Mehrheit, für die wir Politik machen. Wenn ich hier in den Raum schaue, ist es nicht bunt und vielfältig, das ist das Schöne an Freital. Sie alle sind deutsch, sächsisch, weiß. <br> Kleiner Tipp: es war ein Nazi. Naja, wer war es?',
        options: ["Hackfresse Himmler", "Ku-Klux-Krah", "Hi Ha Höcke"],
        images: ["himmler", "krah", "hocke"],
        hint: "Tipp gibt es nicht. Es könnte jeder von denen sein.",
        correct: 1,
        solution: "Spitzenreiter Europawahlkandidat AfD. Und seit Jab Böhmermann sollte jeder Wissen auch TikTok-Star der jungen Rechten."
    }
];

let socket;
let lastRevealedOption = 6;
let currentQuestion = 0;
let lastTeam = 0;
let podiumState = -1;
let hasStarted = false;
let topPlayers;
let players = new Map();
/*
for (let i = 0; i < 12; i++) {
    let player = { pfp: "gman" };
    player.team = lastTeam++ % 3;
    // player.points = Math.round(Math.random() * 1000);
    player.points = 0;
    player.deltaPoints = 0;
    player.wasRight = Math.random() > 0.5 ? true : false;
    players.set("player " + i, player);
}*/

function showScoreboard() {
    for (let i = 0; i < 3; i++) {
        $("#team" + i + "players").innerHTML = "";
    }
    let points = [0, 0, 0];
    players.forEach((player, username) => {
        player.points += player.deltaPoints || 0;
        player.deltaPoints = 0;
        players.set(username, player);
        let color = player.wasRight ? "lime" : "red";

        $("#team" + player.team + "players").innerHTML += `
        <div class="teammate">
            <img src="/assets/pfp/${player.pfp}.png" />
            <span style="color: ${color}">${username}</span>
        </div>`;

        points[player.team] += player.points;
        player.wasRight = false;
    });

    $(".team-container").scrollIntoView({ behavior: "smooth" });

    for (let i = 0; i < 3; i++) {
        $("#team" + i + "points").style.animation = "none";
        setTimeout(() => {
            $("#team" + i + "points").style.animation =
                "grow ease-in-out 1s forwards";
            setTimeout(() => {
                $("#team" + i + "points").innerText =
                    points[i].toLocaleString("de");
            }, 400);
        }, (i + 1) * 1100);
    }
}

function joinScoreboard() {
    for (let i = 0; i < 3; i++) {
        $("#team" + i + "players").innerHTML = "";
    }
    players.forEach((player, username) => {
        $("#team" + player.team + "players").innerHTML += `
        <div class="teammate">
            <img src="/assets/pfp/${player.pfp}.png" />
            <span>${username}</span>
        </div>`;
    });
}

let joinSound = new Audio("/assets/join.mp3");
let option0Sound = new Audio("/assets/option0.mp3");
let option1Sound = new Audio("/assets/option1.mp3");
let option2Sound = new Audio("/assets/option2.mp3");
let runningSound = new Audio("/assets/running.mp3");
let winSound = new Audio("/assets/win.mp3");
let applauseSound = new Audio("/assets/applause.wav");

function stopAllSounds() {
    joinSound.pause();
    option0Sound.pause();
    option1Sound.pause();
    option2Sound.pause();
    runningSound.pause();
    winSound.pause();
    applauseSound.pause();
}

document.addEventListener("keydown", (e) => {
    if (e.key == "a") {
        if (applauseSound.paused) {
            applauseSound.currentTime = 0;
            applauseSound.play();
        } else {
            applauseSound.pause();
        }
    }
    if(e.key == "p") {
        podiumState = 0;
        topPlayers = Array.from(players, ([username, data]) => ({ username, points: data.points, pfp: data.pfp }));
        topPlayers.sort((a, b) => b.points - a.points);
        for(let i = 0; i < 5; i++) {
            $(`#place-${i}-p`).innerHTML = `${topPlayers[i].username}<br>${topPlayers[i].points.toLocaleString("de")} Punkte`;
            $(`#place-${i}-img`).src = `/assets/pfp/${topPlayers[i].pfp}.png`;
        }
        for(let i = 0; i < topPlayers.length; i++) {
            topPlayers[i].place = i+1;
        }
        console.log(topPlayers);
        $(".podium-container").scrollIntoView({behavior: "smooth"});
    }
    if(e.key == "s") {
        hasStarted = true;
    }
});

function update235() {
    let what = QUESTIONS[currentQuestion];

    for (let i = 0; i < 3; i++) {
        $("#option" + i).style.transform = "translateY(-150%)";
        $("#option" + i).style.filter = "none";
        $("#option" + i + "img").src = `/assets/img/${what.images[i]}.png`;
        $("#option" + i + "q").innerText = what.options[i];
    }

    let colors = ["#d71128", "#ffcb00", "#324f8a"];
    $(".answer").style.background = colors[what.correct];
    $(".answer-img").src = `/assets/img/${what.images[what.correct]}.png`;
    $(".answer-text").innerText = what.options[what.correct];
    prefetchAllImages();
    $(".option-container").scrollIntoView({ behavior: "smooth" });
}

function addPlayer(username, pfp) {
    if (players.has(username)) {
        console.log("Spieler bereits vorhanden: ", username);
        return;
    }
    let player = {
        username: username,
        pfp: pfp,
        points: 0,
        deltaPoints: 0,
        wasRight: false,
        team: lastTeam++ % 3,
    };
    players.set(username, player);
}

document.addEventListener("DOMContentLoaded", (e) => {
    socket = io();
    socket.on("connect", async () => {
        socket.emit("host/iamhost");
    });
    socket.on("client/login", async (data) => {
        joinSound.currentTime = 0;
        joinSound.play();
        addPlayer(data.username, data.pfp);
        console.log("login", data.username);
        joinScoreboard();
    });
    socket.on("client/answer", async (data) => {
        if (!players.has(data.username)) {
            addPlayer(data.username, "kohl");
            return;
        }
        let wasRight = false;
        if (data.option == QUESTIONS[currentQuestion].correct) {
            wasRight = true;
        } else {
            wasRight = false;
        }
        let player = players.get(data.username);
        player.deltaPoints = wasRight ? Math.round(5 * data.time + 50) : 0;
        player.wasRight = wasRight;
        players.set(data.username, player);
    });
});

document.addEventListener("click", (e) => {
    if(!hasStarted) {
        return;
    }

    if(podiumState > -1) {
        let elem = document.createElement("p");
        if(podiumState == 0) {
            elem = $(".place-5th");
        }
        if(podiumState == 1) {
            elem = $(".place-4th");
        }
        if(podiumState == 2) {
            elem = $(".place-3rd");
        }
        if(podiumState == 3) {
            elem = $(".place-2nd");
        }
        if(podiumState == 4) {
            elem = $(".place-1st");
        }
        if(podiumState == 5) {
            socket.emit("host/place", {players: topPlayers});
        }
        podiumState++;

        elem.style.animation = "fly-in-bottom 1.5s forwards";
        setTimeout(() => {
            elem.style.animation = "podium 2s ease-in-out infinite";
        }, 1500 + Math.random() * 1);

        return;
    }

    if(!QUESTIONS[currentQuestion]) {
        return;
    }

    if (lastRevealedOption == 0) {
        $("#option0").style.animation = "fly-in-top 1.25s forwards";
        stopAllSounds();
        option0Sound.currentTime = 0;
        option0Sound.play();
        lastRevealedOption++;
        return;
    }
    if (lastRevealedOption == 1) {
        $("#option1").style.animation = "fly-in-top 1.25s forwards";
        stopAllSounds();
        option1Sound.currentTime = 0;
        option1Sound.play();
        lastRevealedOption++;
        return;
    }
    if (lastRevealedOption == 2) {
        $("#option2").style.animation = "fly-in-top 1.25s forwards";
        stopAllSounds();
        option2Sound.currentTime = 0;
        option2Sound.play();
        lastRevealedOption++;
        return;
    }
    if (lastRevealedOption == 3) {
        socket.emit("host/running");
        stopAllSounds();
        runningSound.currentTime = 0;
        runningSound.play();

        $("#option0").style.transform = "none";
        $("#option0").style.animation = "glow 0.5s infinite";

        $("#option1").style.transform = "none";
        $("#option1").style.animation = "glow 0.5s infinite";
        $("#option1").style.animationDelay = "0.16s";

        $("#option2").style.transform = "none";
        $("#option2").style.animation = "glow 0.5s infinite";
        $("#option2").style.animationDelay = "0.33s";

        setTimeout(() => {
            for (let i = 0; i < 3; i++) {
                $("#option" + i).style.animation = "none";
                $("#option" + i).style.filter = "brightness(0.5)";
            }
            socket.emit("host/ran");
        }, 8250);

        lastRevealedOption++;
        return;
    }

    if (lastRevealedOption == 4) {
        socket.emit("host/revealed");
        $("#jumpImg").style.animation = "none";
        setTimeout(() => {
            $(".answer-container").scrollIntoView({ behavior: "smooth" });
            $("#jumpImg").style.animation = "jump 1s infinite";
        }, 200);
        stopAllSounds();
        winSound.currentTime = 0;
        winSound.play();

        lastRevealedOption++;
        return;
    }

    if (lastRevealedOption == 5) {
        $("#jumpImg").style.animation = "none";
        showScoreboard();
        lastRevealedOption++;
        return;
    }

    if (lastRevealedOption == 6) {
        $(".option-container").scrollIntoView({ behavior: "instant" });
        for (let i = 0; i < 3; i++) {
            $("#option" + i).style.filter = "none";
            $("#option" + i).style.transform = "translateY(-150%)";
        }
        lastRevealedOption = 0;
        currentQuestion++;
        update235();

        let question = QUESTIONS[currentQuestion];
        question.index = currentQuestion;
        socket.emit("host/235prefetch", question);
        return;
    }
});

function prefetchAllImages() {
    let images = document.querySelectorAll("img");
    images.forEach(function (img) {
        img.src = img.getAttribute("src");
        let display = img.style.display;
        // Temporarily set display to 'block' to ensure image loading
        img.style.display = "block";
        // Trigger image loading by accessing its dimensions
        let width = img.clientWidth;
        let height = img.clientHeight;
        // Revert display property to its original state
        img.style.display = display;
    });
} 

$(".team-container").scrollIntoView();

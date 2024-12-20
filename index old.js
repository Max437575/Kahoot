const { createServer } = require("http");
const { Server } = require("socket.io");
const fs = require("fs/promises");
const { read } = require("fs");
const readline = require("node:readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const QUESTIONS = [
    {
        task: "Das ist aufgabe Nr. 1",
        option1: "Nr. 1 - 1",
        option2: "Nr. 1 - 2",
        option3: "Nr. 1 - 3",
    },
    {
        task: "Das ist aufgabe Nr. 2",
        options: ["Björn Höcke", "Maximilian Krah", "Joseph Goebbels"],
        images: ["2", "3", "5"],
        correct: 1,
    },
    {
        task: "Am 9. April 2009 hat Satiriker/Komiker Kurt Krömer die Pornodarstellerin Vivian Schmitt zu seiner internationalen Show eingeladen. Welches bekannte Spiel hat er dort mit ihr gespielt und mit welcher Begründung?",
        options: ["Twister", "Lotti Karotti", "Monopoly"],
        images: ["twister", "lotti", "monopoly"],
        correct: 0,
    },
];

const httpServer = createServer((req, res) => {
    fs.readFile(__dirname + req.url)
        .then((contents) => {
            res.writeHead(200);
            res.end(contents);
        })
        .catch((err) => {
            res.writeHead(500);
            res.end("Error?");
            return;
        });
});

let players = [];
let lastTeam = 0;
let currentQuestion = 0;

function insertPlayer(username) {
    let alreadyExists = false;
    players.forEach((player) => {
        if (player.username === username) {
            console.log(`\tplayer ${username} already exists`);
            alreadyExists = true;
        }
    });
    if (alreadyExists) return;
    players.push({
        username: username,
        points: 0,
        team: lastTeam++ % 3,
        addPoints: 0
    });
    io.emit("host/newbie", players[players.length]);
}

function givePoints(username, time) {
    players.forEach((player) => {
        if (player.username === username) {
            player.addPoints = Math.round(10 * time);
            console.log("Should add points: ", player.usename, player.addPoints);
        }
    });
}

const io = new Server(httpServer, {});
io.on("connection", (socket) => {
    socket.on("login", async (data) => {
        console.log("\tnew connection:", data.username);
        insertPlayer(data.username, data.pfp);
    });
    socket.on("answer", (data) => {
        if (data.option === QUESTIONS[currentQuestion].correct) {
            givePoints(data.username, data.time);
        }
    });
    socket.on("disconnect", () => {
        console.log("\tconnection lost");
    });
    socket.on("cmd/running", () => {
        io.emit("235");
    });
    socket.on("cmd/revealed", () => {
        io.emit("revealed");
    });
});

async function getplayerInput() {
    return new Promise((resolve, reject) => {
        readline.question("", (answer) => {
            resolve(answer);
        });
    });
}

async function main() {
    console.log("Listening...");
    httpServer.listen(8080);

    while (true) {
        const input = await getplayerInput();

        if (input.startsWith("exit")) {
            throw new Error("\tuser requested exit");
        }
        if (input.startsWith("players")) {
            players.forEach((player) => {
                let teams = ["red", "yellow", "blue"];
                console.log(
                    `\t<${player.username}><${teams[player.team]}> ${
                        player.points
                    }`
                );
            });
        }
        if (input.startsWith("cleanse")) {
            players = [];
            console.log("\tcleansed");
        }
        if (input.startsWith("235")) {
            let i = input.split(" ")[1];
            if (!i) {
                console.log("\tKeine Zahl");
                continue;
            }
            console.log(QUESTIONS[i].task);
            io.emit("host/235", QUESTIONS[i]);
            io.emit("235prefetch", QUESTIONS[i]);
            currentQuestion = i;
        }
        if(input.startsWith("scoreboard")) {
            io.emit("host/scoreboard", players);
        }
        if(input.startsWith("add")) {
            io.emit("host/newbie", {
                username: Math.random().toString(),
                team: 0,
                pfp: "gman"
            });
        }
    }
}

main()
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        readline.close();
    });

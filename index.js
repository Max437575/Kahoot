const { createServer } = require("http");
const { Server } = require("socket.io");
const fs = require("fs/promises");
const { read } = require("fs");
const readline = require("node:readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

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

let hostSocket = null;
let mobileSocket = null;
const io = new Server(httpServer, {});
io.on("connection", (socket) => {
    socket.on("client/login", async (data) => {
        hostSocket.emit("client/login", data);
    });
    socket.on("host/iamhost", async() => {
        console.log("host registered");
        hostSocket = socket;
    });
    socket.on("mobile/iammobile", async() => {
        console.log("mobile registered");
        mobileSocket = socket;
    });
    socket.on("disconnect", () => {
        console.log("\tconnection lost");
    });
    socket.on("host/235prefetch", async (data) => {
        io.emit("host/235prefetch", data);
    });
    socket.on("host/running", async () => {
        io.emit("host/235");
    });
    socket.on("host/ran", async () => {
        io.emit("host/ran");
    })
    socket.on("host/revealed", async () => {
        io.emit("host/revealed");
    });
    socket.on("client/answer", async (data) => {
        console.log("answer from: ", data.username, data.time);
        hostSocket.emit("client/answer", data);
    });
    socket.on("host/place", async (data) => {
        io.emit("host/place", data);
    });
});

console.log("Listening...");
httpServer.listen(8080);

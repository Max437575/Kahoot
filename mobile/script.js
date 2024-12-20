const $ = (q) => {
    return document.querySelector(q);
};

function login() {
    socket = io();
    socket.on("connect", async () => {
        socket.emit("mobile/iammobile");
    });
    socket.on("host/235prefetch", async (data) => {
        $(".intermission-text").innerHTML = "";
        $(".intermission-text").innerHTML += `<p>${data.index}. ${data.task}</p>`;
        $(".intermission-text").innerHTML += `<ul>
        <li>2) ${data.options[0]}</li>
        <li>3) ${data.options[1]}</li>
        <li>5) ${data.options[2]}</li>
        </ul>`;
        $(".intermission-text").innerHTML += `<p>🤫${data.hint}</p>`;
        $(".intermission-text").innerHTML += `<p>✅${data.options[data.correct]}</p>`;
        $(".intermission-text").innerHTML += `<p>💡${data.solution}</p>`;
    });
    socket.on("host/place", async (data) => {
        data.players.forEach((player) => {
            $(".intermission-text").innerHTML = "";
            $(".intermission-text").innerHTML += `<p>${player.username}: ${player.place}. mit ${player.score.toLocaleString("de")} Punkten</p>`;
        });
    });
}

login();
const http = require('http');
const path = require('path');
const express = require('express');
const { Server } = require('socket.io');

const app = express();

app.use(express.static(path.resolve("./public")));

app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname,'public','index.html'));
    res.sendFile("./public/index.html");
})

const server = http.createServer(app);
const io = new Server(server);

// Socket.io
io.on('connection', (socket) => {
    socket.on('user-message', message => {
        // console.log("A ne user has connected ", message);
        io.emit('message',message);
    })

})

server.listen(3000, () => console.log("Server started at PORT:3000")
)
## Socket.IO

- Socket.IO is a library that enables low-latency, bidirectional and event-based communication between a client and a server.


```javascript
const http = require('http');
const path = require('path');
const express = require('express');
const { Server } = require('socket.io');

const app = express();

app.use(express.static(path.resolve("./public")));

app.get('/', (req, res) => {
    res.sendFile("./public/index.html");
})

const server = http.createServer(app);
const io = new Server(server);

// Socket.io
io.on('connection', (socket) => {
    socket.on('user-message', message => {
        io.emit('message',message);
    })

})

server.listen(3000, () => console.log("Server started at PORT:3000")
)

```
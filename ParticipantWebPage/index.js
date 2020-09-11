var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

var connectCounter = 0;

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
    });

io.on('connection', (socket) => {
        console.log('a user connected');
        connectCounter++;
        // Send number of users
	socket.on('disconnect', () => {
	    console.log('user disconnected');
	    connectCounter--;
	    // Send number of uers
	    });
        socket.on('chat message', (msg) => {
	    console.log('message: ' + connectCounter); // Replace with <user> clapped
	    io.emit('chat message', connectCounter); // Replace with <user> clapped
	    console.log('total num clients: ' + connectCounter); // Remove
	    });
    });


http.listen(3000, () => {
	console.log('listening on *:3000');
    });

const { connect } = require('http2');

var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

var connectCounter = 0;

app.get('/', (req, res) => {
  // http://localhost:4000
  res.sendFile(__dirname + '/index.html');
});

app.get('/max', (req, res) => {
  // http://localhost:4000/max
  res.sendFile(__dirname + '/indexmax.html');
})

io.on('connection', (socket) => {
  console.log('a user connected');
  connectCounter++;
  console.log("inside connection: " + connectCounter);
  // Send number of users

  io.sockets.emit('onConnect', connectCounter);

	socket.on('disconnect', () => {
    console.log('user disconnected');
    connectCounter--;
    io.sockets.emit('onConnect', connectCounter);
    console.log("inside disconnect: " + connectCounter);
    // Send number of uers
  });

  socket.on('chat message', (msg) => {
    console.log('message: ' + connectCounter); // Replace with <user> clapped
    io.emit('chat message', connectCounter); // Replace with <user> clapped
    console.log('total num clients: ' + connectCounter); // Remove
  });
});


http.listen(4000, () => {
	console.log('listening on *:4000');
    });

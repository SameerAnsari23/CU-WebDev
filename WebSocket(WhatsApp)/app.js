const express = require('express')
const app = express();
const path = require('path');
const http = require('http');
const server = http.createServer(app);
const socketio = require('socket.io')
const io = socketio(server);
const PORT = 3000;

let user = {}
app.use('/', express.static(path.join(__dirname, 'public')))

io.on("connection", (socket) => {
  // classic users
  // console.log(io.engine.clientsCount)
  // console.log(io.sockets.sockets)
  console.log('connection is established')
  socket.on('login', async ({ username, socketId }) => {
    user[socket.id] = username;
    let clients = [];
    //  io.sockets.sockets.forEach(c => {
    //   clients.push(c.id);
    //  });

    let sockets = await io.fetchSockets();
    sockets.forEach(socket => {
      if (user[socket.id]) {
        clients.push({ id: socket.id, name: user[socket.id] })
      }
    })

    console.log(clients)
    socket.emit('useradded', {
      msg: "User Added successfully",
      username: user[socket.id],
      clients,
      clientsCount: clients.length
    });
    socket.broadcast.emit('updatedetails', {
      msg: "New User Added!",
      clients,
      clientsCount: clients.length
    })
  })

  socket.on('newmessage', ({ message, socketId }) => {
    let clients = [];
    
    io.sockets.sockets.forEach(c => clients.push({
      "name": user[c.id],
      "id": c.id,
      clientsCount: io.engine.clientsCount
    }))

    // Server broadcasts message to ALL users
    io.emit('messagerecieved', {
      message,
      username: user[socketId],
      socketId: socket.id,
      clients,
      clientsCount: io.engine.clientsCount
    })
  })
  socket.on('disconnect', async() => {
    let sockets = await io.fetchSockets();
    let newUser = {};
    let clients = [];
    sockets.forEach(socket => {
      if(user[socket.id]) {
        newUser[socket.id] = user[socket.id];
        clients.push({id: socket.id, name: user[socket.id]});
      }
    })
    user = newUser;
    io.emit('updatedetails', {
      msg: "user left the chat",
      clients,
      clientsCount: clients.length
    })
  })
});

server.listen(PORT, () => {
  console.log(`http://localhost:` + PORT);
})
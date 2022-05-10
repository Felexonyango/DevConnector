const express = require("express");
const connectDB = require("./db");
const path = require("path");
const bodyParser = require('body-parser');

const app = express();

const server = require('http').createServer(app)

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

const cors = require('cors');

require('events').EventEmitter.prototype._maxListeners = 0;

app.use(bodyParser.json());

app.use(cors())



connectDB();
app.use(express.json({ extended: false }));



app.use("/api/users",require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));
app.use('/api/jobs',require("./routes/api/jobs"))
app.use('/api/meet',require("./routes/api/Meetups"))


// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const socketList = [];
io.on("connection", (socket) => {
  socket.on("disconnect", () => {
    console.log("disconnected");
  });

  socket.on("checkUserExsist", ({ roomId, userName }) => {
    let error = false;
    const clients = io.sockets.adapter.rooms.get(roomId);
    clients &&
      clients.forEach((client) => {
        if (socketList[client].userName === userName) error = true;
      });
    socket.emit("userExsist", { error });
  });

  socket.on("joningRoom", ({ roomId, myName }) => {
    socket.join(roomId);
    socketList[socket.id] = { userName: myName, video: true, audio: true };
    const users = [];
    const clients = io.sockets.adapter.rooms.get(roomId);
    clients.forEach((client) => {
      users.push({ userId: client, info: socketList[client] });
    });
    socket.broadcast.to(roomId).emit("userjoinedRoom", users);
  });

  socket.on("callUser", ({ usertoCall, from, signal }) => {
    socket
      .to(usertoCall)
      .emit("reciveCall", { signal, from, info: socketList[socket.id] });
  });

  socket.on("acceptCall", ({ signal, to }) => {
    socket
      .to(to)
      .emit("callAccepted", {
        signal,
        answerId: socket.id,
        userName: socketList[socket.id].userName,
      });
  });

  socket.on("switchVideoAudio", ({ roomId, target }) => {
    if (target === "video")
      socketList[socket.id].video = !socketList[socket.id].video;
    else socketList[socket.id].audio = !socketList[socket.id].audio;
    socket
      .to(roomId)
      .emit("switched", { userName: socketList[socket.id].userName, target });
  });

  socket.on("sendMessage", ({ name, message, roomId }) => {
    console.log(message);
    socket.broadcast.to(roomId).emit("reciveMessage", { name, message });
  });

  socket.on("leaveRoom", ({ roomId }) => {
    const name = socketList[socket.id].userName;
    delete socketList[socket.id];
    socket.broadcast.to(roomId).emit("leaveCall", { userId: socket.id, name });
    socket.leave(roomId);
  });
});


const PORT = process.env.PORT || 5000;




server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
module.exports=app
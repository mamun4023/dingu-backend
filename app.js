const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
const server = http.createServer(app)
const {Server} = require('socket.io');

app.use(cors());

const io = new Server(server, {
    cors : {
        origin : "http://localhost:3000",
        methods : ['get', 'post']
    }
})

io.on('connection', (socket)=>{
    console.log( "new user connected ID "+ socket.id)


    socket.on("join_room", (data)=>{
        socket.join(data);
        console.log(`User with Id : ${socket.id} joined room ${data}` )
    })



    socket.on("send_message", (data)=>{
        socket.to(data.room).emit('receive_message', data)
    })

    socket.on('disconnect', ()=>{
        console.log("user Disconnected", socket.id);
    })
})


server.listen(4000, ()=>{
    console.log("server is running...")
})
import app from "./src/app";
import {createServer} from "http";
import {Server} from "socket.io";

const httpServer = createServer(app)
const io = new Server(httpServer)


io.on("connection", (socket) => {
    console.log("New connection created")

    socket.on("message", (msg)=>{
        console.log('user fired message event')

        console.log(msg)
        io.emit("message", msg)
    })
})


httpServer.listen(3000, ()=>{
    console.log("server is running on port 3000")
})
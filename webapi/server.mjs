import http from "node:http"
import app from "./app.mjs"
import dotenv from "dotenv"
import connect from "./config/db.mjs"


dotenv.config()

const PORT = process.env.PORT || 5000

connect();

const server = http.createServer(app);

server.listen(PORT,()=>{
    console.log(`Server listening on htt://localhost:${PORT}`)
})
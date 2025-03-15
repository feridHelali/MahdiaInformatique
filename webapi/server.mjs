import http from "node:http"
import app from "./app.mjs"

const server = http.createServer(app);

server.listen(3000)
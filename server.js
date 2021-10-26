const express = require("express");
const config = require("./config/app");
const cors = require("cors");
const router = require("./router");
const http = require("http");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/uploads"));
app.use(router);

const server = http.createServer(app);
const SocketServer = require("./socket");
SocketServer(server);

server.listen(config.appPort, () => {
  console.log("server running on port http://localhost:4000");
});

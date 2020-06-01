const dotenv = require("dotenv");
dotenv.config(); // Use .env variables

// Frameworks
const express = require("express");
const app = express();
const morgan = require("morgan"); // Print req info on terminal
const bodyParser = require("body-parser"); // Parsers body data
const cors = require("cors"); // Enable cors on application

// Application
const models = require("./src/database/models");

// Server
const server = require("http").createServer(app);

// Socket.io
const socket = require("socket.io");
const io = socket(server, { pingInterval: 10000, pingTimeout: 5000 });
app.io = io;

io.on("connection", () => {
    console.log("connected");
    io.on("disconnect", () => {
        console.log("disconnected");
    });
});

app.use(morgan("dev")); // Morgan req info style
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(cors());

// Routes
app.use(require("./src/routes"));

// Sequelize
models.sequelize
    .sync()
    .then(() => {
        server.listen(process.env.PORT);
    })
    .catch((err) => {
        throw new Error(err);
    });

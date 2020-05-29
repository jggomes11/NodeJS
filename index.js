const dotenv = require("dotenv");
dotenv.config(); // Use .env variables

// Frameworks
const express = require("express");
const app = express();
const morgan = require("morgan"); // Print req info on terminal
const bodyParser = require("body-parser"); // Parsers body data

// Application
const models = require("./src/database/models");

// Server
const server = require("http").createServer(app);

app.use(morgan("dev")); // Morgan req info style
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

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

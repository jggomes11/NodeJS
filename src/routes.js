// Framework
const express = require("express");
const routes = express.Router();

// Application
const { UsersService } = require("./services");

routes.get("/users", UsersService.get);
routes.post("/users", UsersService.create);
routes.put("/users", UsersService.update);
routes.delete("/users/:id", UsersService.delete);

module.exports = routes;

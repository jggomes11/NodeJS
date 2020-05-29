// Framework
const express = require("express");
const routes = express.Router();

// Application
const { UsersService, ThreadService } = require("./services");

// CRUD routes
routes.get("/users", UsersService.get);
routes.post("/users", UsersService.create);
routes.put("/users", UsersService.update);
routes.delete("/users/:id", UsersService.delete);

// Worker_Threads example routes
routes.get("/standard", ThreadService.standard);
routes.get("/threaded", ThreadService.threaded);

module.exports = routes;

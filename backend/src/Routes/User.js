import Logger from "../Utils/Logger.js";
import { Route, METHOD } from "./Route.js";
import { models } from "../Models/Models.js";
import User from "../Controllers/User.js";


new Route("get Users", METHOD.GET, "/users", (req, res, next) => {
    try {
        User.getUsers().then((users) => {
            res.status(200).json(users);
        })
    } catch (error) {
        Logger.error("Erreur sur GET /users");
        next(error);
    }
});

new Route("create User", METHOD.POST, "/users", (req, res, next) => {
    try {
        User.createUser(req.body).then((user) => {
            res.status(200).json(user);
        })
    } catch (error) {
        Logger.error("Erreur sur POST /users");
        next(error);
    }
});

new Route("update User", METHOD.PUT, "/users", (req, res, next) => {
    try {
        User.updateUser(req.body).then((user) => {
            res.status(200).json(user);
        })
    } catch (error) {
        Logger.error("Erreur sur PUT /users");
        next(error);
    }
});

new Route("delete User", METHOD.DELETE, "/users", (req, res, next) => {
    try {
        User.deleteUser(req.body).then((user) => {
            res.status(200).json(user);
        })
    } catch (error) {
        Logger.error("Erreur sur DELETE /users");
        next(error);
    }
});


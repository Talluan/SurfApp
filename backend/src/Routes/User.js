import Logger from "../Utils/Logger.js";
import { Route, METHOD } from "./Route.js";
import User from "../Controllers/User.js";


new Route("get Users", METHOD.GET, "/users", async (req, res, next) => {
    try {
        Logger.info("GET /users");
        const users = await User.getUsers()
        res.status(200).json(users);
    } catch (error) {
        Logger.error("Erreur sur GET /users");
        next(error);
    }
});

new Route("create User", METHOD.POST, "/users", async (req, res, next) => {
    try {
        Logger.info("POST /users");
        const user = await User.createUser(req.body);
        res.status(200).json(user);
    } catch (error) {
        Logger.error("Erreur sur POST /users");
        next(error);
    }
});

new Route("update User", METHOD.PUT, "/users", async (req, res, next) => {
    try {
        Logger.info("PUT /users");
        const user = await User.updateUser(req.body)
        res.status(200).json(user);
    } catch (error) {
        Logger.error("Erreur sur PUT /users");
        next(error);
    }
});

new Route("delete User", METHOD.DELETE, "/users", async (req, res, next) => {
    try {
        Logger.info("DELETE /users");
        const user = User.deleteUser(req.body);
        res.status(200).json(user);
    } catch (error) {
        Logger.error("Erreur sur DELETE /users");
        next(error);
    }
});

new Route("login User", METHOD.POST, "/users/login", async (req, res, next) => {
    try {
        Logger.info("POST /users/login");
        console.log(req.body);
        const user = await User.login(req.body)
        res.status(200).json(user);
    } catch (error) {
        Logger.error("Erreur sur POST /users/login");
        next(error);
    }
});
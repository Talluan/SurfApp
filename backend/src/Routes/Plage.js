import Logger from "../Utils/Logger.js";
import { Route, METHOD } from "./Route.js";
import Plage from "../Controllers/Plage.js";
import User from "../Controllers/User.js";


new Route("get Plages", METHOD.GET, "/plages", async (req, res, next) => {
    try {
        Logger.info("GET /plages");
        const plages = await Plage.getPlages()
        res.status(200).json(plages);
    } catch (error) {
        Logger.error("Erreur sur GET /plages");
        next(error);
    }
});

new Route("create Plage", METHOD.POST, "/plages", async (req, res, next) => {
    try {
        Logger.info("POST /plages");
        const plage = await Plage.createPlage(req.body);
        res.status(200).json(plage);
    } catch (error) {
        Logger.error("Erreur sur POST /plages");
        next(error);
    }
});

new Route("update Plage", METHOD.PUT, "/plages", async (req, res, next) => {
    try {
        Logger.info("PUT /plages");
        const plage = await Plage.updatePlage(req.body)
        res.status(200).json(plage);
    } catch (error) {
        Logger.error("Erreur sur PUT /plages");
        next(error);
    }
});

new Route("delete Plage", METHOD.DELETE, "/plages", async (req, res, next) => {
    try {
        Logger.info("DELETE /plages");
        const plage = Plage.deletePlage(req.body);
        res.status(200).json(plage);
    } catch (error) {
        Logger.error("Erreur sur DELETE /plages");
        next(error);
    }
});

new Route("like Plage", METHOD.POST, "/plages/like/:id", async (req, res, next) => {
    try {
        Logger.info("POST /plages/like");
        const userData = User.verifyToken(req.headers.authorization);
        console.log(userData);
        const plage = await Plage.likePlage(req.params.id, userData);
        res.status(200).json(plage);
    } catch (error) {
        Logger.error("Erreur sur POST /plages/like");
        next(error);
    }
});
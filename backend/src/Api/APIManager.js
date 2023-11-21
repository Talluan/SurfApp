import { API, APIConfig } from "./API.js";
import Logger from "../Utils/Logger.js";
import { Route } from "../Routes/Routes.js";



class APIManager {



    static #createAPI() {
        return new Promise((resolve, reject) => {
            Logger.info("Creating API Configuration ...");
            const port = process.env.API_PORT;
            console.log("port" + port);
            const apiConfig = new APIConfig(port);
            Logger.success("DONE");

            try {
                Logger.info("Creating API Instance ...");
                const api = new API(apiConfig);
                Logger.success("DONE");
                Logger.success("API is listening on port " + port);
                resolve();
            } catch (err) {
                const error = "API Creation failed: " + err;
                Logger.error(error);
                reject(error);
            }
        });
    };
    

    static #registerRoutes() {
        if (API.Instance == null) throw new Error("API not initialized");
        Route.defineAllRoutes(API.Instance.app);
    }

    static #initErrorHandler() {
        if (API.Instance == null) throw new Error("API not initialized");
        API.Instance.app.use(this.#errorHandler);
    }

    static #errorHandler(err, req, res, next) { // this method must have 4 parameters to be recognized as an error handler
        Logger.error("Error Handling Middleware called");
        Logger.error("Path: " + req.path);
        if (err.statusCode != 500) {
            Logger.error("ErrorType : " + err.name + " : " + err.message);
        }
        else {
            Logger.error("Server Error");
        }
        res.header("Content-Type", 'application/json');
        res.status(err.statusCode).send(JSON.stringify(err, null, 4));
    }

    static init() {
        return new Promise((resolve, reject) => {
            APIManager.#createAPI().then(() => {
                APIManager.#registerRoutes();
                APIManager.#initErrorHandler();
                resolve();
            }).catch(reject);
        });
    }
}

export default APIManager;
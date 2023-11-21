import express from "express";
import cors from "cors";

class APIConfig {
    static fromJSON(json) {
        const properties = Object.keys(new APIConfig());
        properties.forEach(property => {
            if (json[property] == undefined)
                throw new Error("Invalid JSON : Property " + property + " is missing");
        });
        
        return new APIConfig(json.port);
    }

    port = null;

    constructor(port) {
        this.port = port;
    }

    isValid() {
        return this.port != undefined;
    }
}

class API {
    static #api = null;
    static get Instance() { return API.#api; }

    config = null;
    app = null;

    constructor(config=new APIConfig()) {
        if (!config.isValid) throw new Error("Invalid configuration file");

        API.#api = this;
        this.config = config;
        this.app = express();       
        this.app.use(cors( { origin: "*" } ));
        this.app.use(express.json());
        this.app.listen(config.port);
    }

    static registerRoute(method, path, callback) {
        this.app[method.toLowerCase()](path, callback);
    }
}

export {
    API,
    APIConfig
};
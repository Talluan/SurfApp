const METHOD = {
    GET : "GET",
    POST : "POST",
    PUT : "PUT",
    DELETE : "DELETE"
};

class Route {
    static #routes = {};
    static register(name, route) {
        Route.#routes[name] = route;
    }
    static getRoute(name) {
        const val = Route.#routes[name];
        if (val === undefined) {
            throw new Error("Route not found: "+name);
        }
        return val;
    }

    static defineAllRoutes(app) {
        const names = Object.keys(Route.#routes);
        names.forEach(name => {
            const route = Route.#routes[name];
            app[route.getMethod().toLowerCase()](route.getPath(), route.getCallback());
        });
    }

    #name = "";
    #method = "";
    #path = "";
    #callback = () => {};

    constructor(name, method, path, callback) {
        this.#name = name;
        this.#method = method;
        this.#path = path;
        this.#callback = callback;
        Route.register(name, this);
    }

    getName() {
        return this.#name;
    }
        
    getMethod() {
        return this.#method;
    }
    getPath() {
        return this.#path;
    }
    getCallback() {
        return this.#callback;
    }
}

export {
    Route,
    METHOD
};
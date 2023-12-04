import Sequelize from "sequelize";


class DBConfig {
    static fromJSON(json) {
        const properties = Object.keys(new DBConfig());
        properties.forEach(property => {
            if (json[property] == undefined)
                throw new Error("Invalid JSON : Property " + property + " is missing");
        });
        
        return new DBConfig(json.host, json.port, json.database, json.username, json.password);
    }

    host = null;
    port = null;
    database = null;
    username = null;
    password = null;

    constructor(host, port, database, username, password) {
        this.host = host;
        this.port = port;
        this.database = database;
        this.username = username;
        this.password = password;
    }

    isValid() {
        return this.host && this.port && this.name && this.login && this.password;
    }
}

class DB {
    /**@type {DB} current DB instance */
    static #db = null;
    static get Instance() { return this.#db; }

    /**@type {DBConfig} database configuration */
    config = null;

    /**@type {Sequelize.Sequelize} sequelize instance */
    db = null;

    /**
     * Creates a new database connection using the given configuration
     * @param {DBConfig} config configuration used for database connection
     */
    constructor(config=new DBConfig()) {
        this.config = config;
        if (!this.config.isValid) {
            throw new Error("Invalid configuration");
        }

        DB.#db = this;
        this.init();
    }

    init() {
        this.db = new Sequelize(this.config.database, this.config.username, this.config.password, {
            dialect: "sqlite",
            storage: "./database.sqlite",
            logging: false,
            force: false
        });
    }

    async connect() {
        try {
            await this.db.authenticate();
        } catch (e) {
            throw new Error("Connection error : "+e)
        }
    }
}

export { DB, DBConfig };
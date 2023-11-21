import * as url from "url";
import fs from "fs";

import { DB, DBConfig } from "./DB.js";
import Logger from "../Utils/Logger.js";
import Model from "../Models/Model.js";
import { models } from "../Models/Models.js";
import "dotenv/config";

class DBManager {
    
    static getConfig() {
        const dbConfig = new DBConfig(
            process.env.DB_HOST,
            process.env.DB_PORT,
            process.env.DB_NAME,
            process.env.DB_USERNAME,
            process.env.DB_PASSWORD
        );
        return dbConfig;
    }

    static #createDatabase() {
        return new Promise((resolve, reject) => {
            try {
                const dbConfig = this.getConfig();
                Logger.success("DONE");

                Logger.info("Creating DB Instance ...")
                try {
                    let db = new DB(dbConfig);
                    Logger.success("DONE")
                    resolve();
                } catch (err) {
                    const error = "DB Instance creation failed: "+err;
                    Logger.error(error);
                    reject(error);
                }

            } catch (err) {
                const error = "Configuration file creation failed: "+err;
                Logger.error(error);
                reject(error);
            }
        });
    }

    static #connectDatabase() {
        return new Promise((resolve, reject) => {
            if (DB.Instance != null) {
                Logger.info("Connecting database ...");
                DB.Instance.connect().then(() => {
                    Logger.success("Connected !");
                    resolve();
                }).catch(err => {
                    const error = "Connection to database failed : "+err;
                    Logger.error(error);
                    reject(error);
                });
            } else {
                const error = "Database is null";
                Logger.error(error);
                reject(error);
            }
        });
    }

    static #initModels() {
        return new Promise((resolve, reject) => {
            Logger.info("Creating models ...");
            console.log(Model);
            Model.defineAllModels(DB.Instance.db);
            Logger.success("DONE");
            resolve();
        });
    }

    static initData() {
        const usr = Model.getModel('User');

    }

    static init() {
        return new Promise((resolve, reject) => {
            DBManager.#createDatabase().then(() => {
                DBManager.#connectDatabase().then(() => {
                    DBManager.#initModels().then(() => {
                        resolve();
                    }).catch(reject);
                }).catch(reject);
            }).catch(reject);
        });
    }
}

export default DBManager;
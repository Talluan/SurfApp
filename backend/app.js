import DBManager from "./src/Db/DBManager.js";
import Logger from "./src/Utils/Logger.js";
import APIManager from "./src/Api/APIManager.js";

DBManager.init().then(() => {
    Logger.success("DBManager successfully initialized");
    //sleeping 5 seconds to let the DBManager initialize
    return new Promise(resolve => setTimeout(resolve, 5000)).then(() => {
        DBManager.initData();
        Logger.success("Data successfully initialized");
    });
}).catch(err => {
    Logger.error("DBManager Initialization failed : "+err);
});

APIManager.init().then(() => {
    Logger.success("APIManager successfully initialized");
}).catch(err => {
    Logger.error("APIManager Initialization failed : "+err);
});
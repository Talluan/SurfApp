export default class Model {
    static #registrations = {};
    static #models = {};

    static register(name, model) {
        console.log("Registering model: {" + model.toString() + "}");
        Model.#registrations[name.toLowerCase()] = model;
    }

    static getModel(name) {
        const val = Model.#models[name.toLowerCase()];
        if (val === undefined) {
            throw new Error("Model not found: "+name);
        }
        return val;
    }

    static async defineAllModels(db) {
        const names = Object.keys(Model.#registrations);
        // create all the models based on the objects in the #registrations attribute
        for(const modelName of names){
            const model = Model.#registrations[modelName];
            Model.#models[modelName] = await db.define(model.getName(), model.getData(), {
                tableName: model.getTableName()   
            });
        }
            
        // call all associations methods on the models
        names.forEach(name => {
            Model.#registrations[name].#associationsCallback();
            Model.#models[name].sync();
        });
    }

    #name = "";
    #tableName = "";
    #data = {};
    #associationsCallback = () => {};

    constructor(name, tableName, data, associationsCallback) {
        this.#name = name;
        this.#tableName = tableName;
        this.#data = data;
        this.#associationsCallback = associationsCallback??(() => {});
        Model.register(name, this);
    }

    getName() {
        return this.#name;
    }
    getTableName() {
        return this.#tableName;
    }
    getData() {
        return this.#data;
    }

    create(data) {
        return Model.getModel(this.#name).create(data);
    }

    toString() {
        return "Model: "+this.#name + "," +this.#tableName+","+Object.keys(this.#data)+","+this.#associationsCallback;
    }

}

import Model from "./Model.js";
import { DataTypes } from "sequelize";

const user = new Model("User", "user", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, () => {
        Model.getModel("User").belongsToMany(Model.getModel("Plage"), {through:"UserPlage", foreignKey: "userId", otherKey: "plageId"});
    }
);

user.getByUsername = (username) => {
    return new Promise((resolve, reject) => {
        Model.getModel("User").findOne({where: {username: username}}).then(resolve).catch(reject);
    });
}

user.getById = (id) => {
    return new Promise((resolve, reject) => {
        Model.getModel("User").findOne({where: {id: id}}).then(resolve).catch(reject);
    });
}

user.create = (data) => {
    return new Promise((resolve, reject) => {
        Model.getModel("User").create(data).then(resolve).catch(reject);
    });
};

user.update = (data) => {
    return new Promise((resolve, reject) => {
        Model.getModel("User").update({password: data.password}, {where: {id: data.id}}).then(resolve).catch(reject);
    });
}

user.delete = (data) => {
    return new Promise((resolve, reject) => {
        Model.getModel("User").destroy({where: {id: data.id}}).then(resolve).catch(reject);
    });
}

export default user;
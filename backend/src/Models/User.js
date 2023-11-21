import Model from "./Model.js";
import { DataTypes } from "sequelize";

const user = new Model("User", "users", {
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

    }
);


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
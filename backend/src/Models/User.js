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

const create = async (data) => {
    

}

export default user;
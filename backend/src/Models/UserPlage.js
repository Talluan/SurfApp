import Model from "./Model.js";
import Plage from "./Plage.js";
import User from "./User.js";
import { DataTypes } from "sequelize";

const userPlage = new Model("UserPlage", "userPlage", {
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: User,
            key: "id"
        }
    },
    plageId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Plage,
            key: "id"
        }}
        
}, () => {
    Model.getModel("UserPlage").belongsTo(Model.getModel("User"), {foreignKey: "userId", targetKey: "id"});
    Model.getModel("UserPlage").belongsTo(Model.getModel("Plage"), {foreignKey: "plageId", targetKey: "id"});
});


userPlage.create = (data) => {
    return new Promise((resolve, reject) => {
        Model.getModel("UserPlage").create(data).then(resolve).catch(reject);
    });
}

export default userPlage;
import Model from "./Model.js";
import { DataTypes } from "sequelize";


const plage = new Model("Plage", "plage", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        latitude: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        longitude: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, () => {

    }
);

plage.getByNom = (nom) => {
    return new Promise((resolve, reject) => {
        Model.getModel("Plage").findOne({where: {nom: nom}}).then(resolve).catch(reject);
    });
}

plage.create = (data) => {
    return new Promise((resolve, reject) => {
        Model.getModel("Plage").create(data).then(resolve).catch(reject);
    });
};

plage.update = (data) => {
    return new Promise((resolve, reject) => {
        Model.getModel("Plage").update({nom: data.nom}, {where: {id: data.id}}).then(resolve).catch(reject);
    });
}

plage.delete = (data) => {
    return new Promise((resolve, reject) => {
        Model.getModel("Plage").destroy({where: {id: data.id}}).then(resolve).catch(reject);
    });
}

export default plage;

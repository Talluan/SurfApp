import Model from "../Models/Model.js";
import UserModel from "../Models/User.js";
import { verifyBodyParams } from "../Helper/Request.js";
import { MissingParam } from "../Utils/Error.js";

class User {

    static createUser = (data) => {
        const requiredParams =  ["username", "password"];
        if(!verifyBodyParams(data, requiredParams)) {
            throw new MissingParam("User", requiredParams);
        }
        return new Promise((resolve, reject) => {
            UserModel.create(data).then(resolve).catch(reject);
        });
    }

    static getUsers = (data) => {
        return new Promise((resolve, reject) => {
            UserModel.get().then(resolve).catch(reject);
        });
    }

    static updateUser = (data) => {
        const requiredParams =  ["id", "password"];
        if(!verifyBodyParams(data, requiredParams)) {
            throw new MissingParam("User", requiredParams);
        }
        return new Promise((resolve, reject) => {
            UserModel.update(data).then(resolve).catch(reject);
        });
    }

    static deleteUser = (data) => {
        const requiredParams =  ["id"];
        if(!verifyBodyParams(data, requiredParams)) {
            throw new MissingParam("User", requiredParams);
        }
        return new Promise((resolve, reject) => {
            UserModel.delete(data).then(resolve).catch(reject);
        });
    }



}

export default User;
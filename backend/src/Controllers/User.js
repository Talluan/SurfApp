import UserModel from "../Models/User.js";
import { verifyBodyParams } from "../Helper/Request.js";
import { DataNotFound, MissingParam, WrongCredentials } from "../Utils/Error.js";
import bcrypt from "bcrypt";
import { UserAlreadyExists } from "../Utils/Error.js";
import { isNullOrUndefined, generateToken } from "../Helper/Tools.js";
import jwt from "jsonwebtoken";

/**
 * Represents a User controller.
 * @class
 */
class User {
    
    /**
     * Creates a new user.
     * @param {Object} data - The user data.
     * @returns {Promise} A promise that resolves with the created user or rejects with an error.
     * @throws {MissingParam} If required parameters are missing.
     */
    static createUser = async (data) => {
        const requiredParams =  ["username", "password"];
        if(!verifyBodyParams(data, requiredParams)) {
            throw new MissingParam("User", requiredParams);
        }
        const user = await UserModel.getByUsername(data.username);
        if (user) {
            throw new UserAlreadyExists("username", data.username);
        }
        const newPassword = await User.hashPassword(data.password);
        data.password = newPassword;
        const newUser = await UserModel.create(data);
        return newUser;
    }

    /**
     * Retrieves all users.
     * @returns {Promise} A promise that resolves with the retrieved users or rejects with an error.
     */
    static getUsers = () => {
        return new Promise((resolve, reject) => {
            UserModel.get().then(resolve).catch(reject);
        });
    }

    /**
     * Updates a user.
     * @param {Object} data - The updated user data.
     * @returns {Promise} A promise that resolves with the updated user or rejects with an error.
     * @throws {MissingParam} If required parameters are missing.
     */
    static updateUser = async (data) => {
        const requiredParams =  ["id", "password"];
        if(!verifyBodyParams(data, requiredParams)) {
            throw new MissingParam("User", requiredParams);
        }
        return await UserModel.update(data);;
    }

    /**
     * Deletes a user.
     * @param {Object} data - The user data to be deleted.
     * @returns {Promise} A promise that resolves when the user is deleted or rejects with an error.
     * @throws {MissingParam} If required parameters are missing.
     */
    static deleteUser = async (data) => {
        const requiredParams =  ["id"];
        if(!verifyBodyParams(data, requiredParams)) {
            throw new MissingParam("User", requiredParams);
        }
        return await UserModel.delete(data); 
    }

    
    /**
     * Logs in a user.
     * @param {Object} data - The user login data.
     * @returns {Promise} A promise that resolves with the logged-in user or rejects with an error.
     * @throws {MissingParam, WrongCredentials} If required parameters are missing.
     */
    static login = async (data) => {
        const requiredParams =  ["username", "password"];
        if(!verifyBodyParams(data, requiredParams)) {
            throw new MissingParam("User", requiredParams);
        }
        const user = await UserModel.getByUsername(data.username);
        if (isNullOrUndefined(user)) {
            throw new DataNotFound("User", data.username);
        }
        const isSimilar = await bcrypt.compare(data.password, user.password);
        if (!isSimilar) {
            throw new WrongCredentials("User", data.username);
        }
        const token = generateToken({id: user.id, username: user.username}, 24);

        return {
            id: user.id,
            username: user.username,
            token: token
        };
    }

    /**
     * Hashes a password.
     * @param {string} password - The password to be hashed.
     * @returns {Promise} A promise that resolves with the hashed password.
     */
    static hashPassword = async (password) => {
        return await bcrypt.hash(password, 10);
    }

    static verifyToken = async (token) => {
        return await jwt.verify(token, process.env.JWT_SECRET);
    }
}

export default User;
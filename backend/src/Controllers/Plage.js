import PlageModel from '../Models/Plage.js';
import { verifyBodyParams } from "../Helper/Request.js";

/**
 * Represents a Plage controller.
 * @class
 */
class Plage {
    
    /**
    * Creates a new plage.
    * @param {Object} data - The plage data.
    * @returns {Promise} A promise that resolves with the created plage or rejects with an error.
    * @throws {MissingParam} If required parameters are missing.
    */
    static createPlage = async (data) => {
        const requiredParams =  ["nom", "latitude", "longitude"];
        if(!verifyBodyParams(data, requiredParams)) {
            throw new MissingParam("Plage", requiredParams);
        }
        const plage = await PlageModel.getByNom(data.nom);
        if (plage) {
            throw new PlageAlreadyExists("nom", data.nom);
        }
        const newPlage = await PlageModel.create(data);
        return newPlage;
    }

    /**
     * Retrieves all plages.
     * @returns {Promise} A promise that resolves with the retrieved plages or rejects with an error.
     */
    static getPlages = () => {
        return new Promise((resolve, reject) => {
            PlageModel.get().then(resolve).catch(reject);
        });
    }

    /**
     * Updates a plage.
     * @param {Object} data - The updated plage data.
     * @returns {Promise} A promise that resolves with the updated plage or rejects with an error.
     * @throws {MissingParam} If required parameters are missing.
     */

    static updatePlage = async (data) => {
        const requiredParams =  ["id", "nom"];
        if(!verifyBodyParams(data, requiredParams)) {
            throw new MissingParam("Plage", requiredParams);
        }
        return await PlageModel.update(data);;
    }

    /**
     * Deletes a plage.
     * @param {Object} data - The deleted plage data.
     * @returns {Promise} A promise that resolves with the deleted plage or rejects with an error.
     * @throws {MissingParam} If required parameters are missing.
     */

    static deletePlage = async (data) => {
        const requiredParams =  ["id"];
        if(!verifyBodyParams(data, requiredParams)) {
            throw new MissingParam("Plage", requiredParams);
        }
        return await PlageModel.delete(data);
    }
}

export default Plage;
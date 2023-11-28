import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();


/**
 * Fonction qui génnère un token jwt avec la data passée en paramètre
 * @param {Object} Data à mettre dans le token 
 * @param {number} Durée de validité du token en heures
 * @returns token contenant les informations encodées
 */
const generateToken = (data, hours) => {
    const timeValidity = hours + "h";
    return jwt.sign(data, process.env.JWT_SECRET, {expiresIn: timeValidity});
}

const isNullOrUndefined = (value) => {
    return value === null || value === undefined;
};

export {
    isNullOrUndefined,
    generateToken
}
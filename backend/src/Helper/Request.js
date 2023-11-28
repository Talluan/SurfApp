

/**
 * Function that verify if the body params contains all the required fields
 * @param {Object} bodyParams
 * @param {Array} requiredFields
 * @returns {boolean}
 */
const verifyBodyParams = (bodyParams, requiredFields) => {
    let isValid = true;
    requiredFields.forEach(field => {
        if (!bodyParams.hasOwnProperty(field)) {
            isValid = false;
        }
    });
    return isValid;
}


export {
    verifyBodyParams
}
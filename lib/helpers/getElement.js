/**
 * Searches an array of Caasy elements for a specific element.
 * @param elements {array} array of Caasy elements
 * @param id {string} the ID of the desired element
 * @param key {string} the property that must equal the given ID
 * @returns {null|*} a Caasy element that matches the criteria or null
 */
const find = (elements, id, key) => {
    if (!elements || !Array.isArray(elements)) {
        throw new Error('[CAASY]: you need to provide an array of Caasy elements');
    }
    
    if (!id || typeof id !== 'string') {
        throw new Error('[CAASY]: you need to provide an element ID of type string');
    }
    
    for (let i = 0; i < elements.length; i++) {
        if (elements[i][key] === id) {
            return elements[i];
        }
    }
    
    return null;
};

/**
 * Searches an array of Caasy elements for an element that has a given ID.
 * @param elements {array} an array of Caasy elements
 * @param id {string} the ID the element
 * @returns {null|*} a Caasy element with the given ID or null
 */
export const getElementById = (elements, id) => find(elements, id, 'id');

/**
 * Searches an array of Caasy element for elements that have a given custom ID
 * @param elements {array} an array of Caasy elements
 * @param customId {string} the custom ID of the elements
 * @returns {null|*} a Caasy element with the given custom ID or null
 */
export const getElementByCustomId = (elements, customId) => find(elements, customId, 'customId');
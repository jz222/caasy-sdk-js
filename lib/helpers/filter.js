/**
 * Filters an array of Caasy elements by the given criteria.
 * @param elements {array} array of Caasy elements
 * @param targetValue {string} the desired value the elements should be filtered by
 * @param key {string} the property that should equal the given target value
 * @returns {[]} an array of Caasy elements that match the criteria
 */
const filter = (elements, targetValue, key) => {
    if (!elements || !Array.isArray(elements)) {
        throw new Error('[CAASY]: you need to provide an array of Caasy elements');
    }
    
    if (!targetValue || typeof targetValue !== 'string') {
        throw new Error('[CAASY]: you need to provide a ' + key + ' of type string');
    }
    
    const filtered = [];
    
    // Using a plain for loop for better compatibility
    for (let i = 0; i < elements.length; i++) {
        if (elements[i][key] === targetValue) {
            filtered.push(elements[i]);
        }
    }
    
    return filtered;
};

/**
 * Filters an array of Caasy elements by a given custom ID.
 * @param elements {array} array of Caasy elements
 * @param customId {string} the custom ID the array should be filtered by
 * @returns {*[]} an array of Caasy elements that have the custom ID assigned
 */
export const filterElementsByCustomId = (elements, customId) => filter(elements, customId, 'customId');
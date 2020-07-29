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
 * Filters an array of Caasy elements by the given criteria.
 * @param elements {array} array of Caasy elements to filter
 * @returns {*|*[]} an array with all elements that match the filter
 */
export const filterElementsById = (elements, id) => filter(elements, id, 'id');

export const filterElementsByCustomId = (elements, customId) => filter(elements, customId, 'customId');
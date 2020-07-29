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

export const getElementById = (elements, id) => find(elements, id, 'id');

export const getElementByCustomId = (elements, customId) => find(elements, customId, 'customId');
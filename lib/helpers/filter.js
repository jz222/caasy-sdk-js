/**
 * Filters an array of Caasy elements by the given criteria.
 * @param elements {array} array of Caasy elements to filter
 * @param opts {object} filter options
 * @returns {*|*[]} an array with all elements that match the filter
 */
const filterElements = (elements, opts) => {
    if (!elements || Array.isArray(elements)) {
        throw new Error('[CAASY]: you need to provide an array of Caasy elements');
    }
    
    if (!opts) {
        throw new Error('[CAASY]: you need to provide an options object to filter elements');
    }
    
    if (!opts.property || typeof opts.property !== 'string') {
        throw new Error('[CAASY]: you need to define a property as string to filter the elements by');
    }
    
    if (!opts.value || typeof opts.value !== 'string') {
        throw new Error('[CAASY]: you need to provide a value that you expect ' + opts.property + ' to have');
    }
    
    return elements.filter(element => element[opts.property] === opts.value) || [];
};

export default filterElements;
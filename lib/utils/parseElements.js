/**
 * Generates the image urls for all available sizes.
 * @param fileName {string} name of the image
 * @returns {{larger: string, smaller: string, original: string, large: string, medium: string}}
 */
const generateImageUrls = (fileName) => ({
    original: 'https://storage.googleapis.com/caasy-media/' + fileName,
    large: 'https://storage.googleapis.com/caasy-media-thumbnails/1500x1500_' + fileName,
    larger: 'https://storage.googleapis.com/caasy-media-thumbnails/1200x1200_' + fileName,
    medium: 'https://storage.googleapis.com/caasy-media-thumbnails/800x800_' + fileName,
    smaller: 'https://storage.googleapis.com/caasy-media-thumbnails/400x400_' + fileName
});

/**
 * Parses an elements array recursively.
 * @param elements {array} an array of elements
 * @returns {*[]|*} the modified elements array with added image URLs for the respective elements
 */
const parseElements = (elements) => {
    if (!elements) {
        return [];
    }
    
    for (let i = 0; i < elements.length; i++) {
        // Add image URLs for image and card elements
        if (elements[i].type === 'image' || elements[i].type === 'card') {
            elements[i].imageUrls = generateImageUrls(elements[i].imageName);
        }
        
        // Add image URLs for nested image and card elements in containers
        if (elements[i].type === 'container') {
            elements[i].elements = parseElements(elements[i].elements);
        }
    }
    
    return elements;
};

export default parseElements;
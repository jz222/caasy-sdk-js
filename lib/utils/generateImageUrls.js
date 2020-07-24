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

export default generateImageUrls;
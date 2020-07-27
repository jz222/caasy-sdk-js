import parseElements from '../utils/parseElements';
import validatePage from '../utils/pageValidator';
import instance from '../instance/index';
import http from '../http/index';

/**
 * Fetches all posts.
 * @param page {number} page of posts. Defaults to page 1
 * @returns {Promise<object>}
 */
const getAll = async (page = 1) => {
    validatePage(page);
    
    const data = await http.get('/' + instance.get().siteId + '/posts?page=' + page);
    
    if ('ok' in data && !data.ok) {
        throw new Error('[CAASY]: ' + data.message);
    }
    
    return data;
};


/**
 * Fetches a post with a given ID.
 * @param postId {string} ID of the post
 * @returns {Promise<object>}
 */
const getById = async (postId) => {
    const data = await http.get('/' + instance.get().siteId + '/posts/' + postId);
    
    if ('ok' in data && !data.ok) {
        throw new Error('[CAASY]: ' + data.message);
    }
    
    data.elements = parseElements(data.elements);
    
    return data;
};


/**
 * Fetches all blog post IDs.
 * @returns {Promise<object>}
 */
const getAllIds = async () => {
    const data = await http.get('/' + instance.get().siteId + '/post-ids');
    
    if ('ok' in data && !data.ok) {
        throw new Error('[CAASY]: ' + data.message);
    }
    
    return data;
};


/**
 * Fetches all blog post authors with their posts.
 * @param page {number} page of authors. Defaults to page 1
 * @returns {Promise<object>}
 */
const getAllAuthors = async (page = 1) => {
    validatePage(page);
    
    const data = await http.get('/' + instance.get().siteId + '/authors?page=' + page);
    
    if ('ok' in data && !data.ok) {
        throw new Error('[CAASY]: ' + data.message);
    }
    
    return data;
};


/**
 * Fetches all blog posts written by the author with the given ID.
 * @param authorId {string} ID of the author
 * @param page {number} page of posts. Defaults to page 1
 * @returns {Promise<object>}
 */
const getAllByAuthor = async (authorId, page = 1) => {
    validatePage(page);
    
    if (!authorId || typeof authorId !== 'string') {
        throw new Error('[CAASY]: the provided author ID is mandatory but was not provided or is not of type string');
    }
    
    const data = await http.get('/' + instance.get().siteId + '/posts-by-author/' + authorId + '?page=' + page);
    
    if ('ok' in data && !data.ok) {
        throw new Error('[CAASY]: ' + data.message);
    }
    
    return data;
};

export default { getAll, getById, getAllIds, getAllAuthors, getAllByAuthor };
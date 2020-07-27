import parseElements from '../utils/parseElements';
import validatePage from '../utils/pageValidator';
import instance from '../instance/index';
import http from '../http/index';

/**
 * Fetches all published pages.
 * @param page {number} page of pages. Defaults to page 1
 * @returns {Promise<Object>}
 */
const getAll = async (page = 1) => {
    validatePage(page);
    
    const data = await http.get('/' + instance.get().siteId + '/pages?page=' + page);
    
    if ('ok' in data && !data.ok) {
        throw new Error('[CAASY]: ' + data.message);
    }
    
    return data;
};

/**
 * Fetches a page with a given ID.
 * @param pageId {string} ID of the page
 * @returns {Promise<Object>}
 */
const getById = async (pageId) => {
    const data = await http.get('/' + instance.get().siteId + '/pages/' + pageId);
    
    if ('ok' in data && !data.ok) {
        throw new Error('[CAASY]: ' + data.message);
    }
    
    data.elements = parseElements(data.elements);
    
    return data;
};

export default { getAll, getById };
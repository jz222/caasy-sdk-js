import validatePage from '../utils/pageValidator';
import instance from '../instance/index';
import http from '../http/index';

const getAll = async (page = 1) => {
    validatePage(page);
    return await http.get('/' + instance.get().siteId + '/posts?page=' + page);
};

const getById = async (postId) => {
    return await http.get('/' + instance.get().siteId + '/posts/' + postId);
};

const getAllIds = async () => {
    return await http.get('/' + instance.get().siteId + '/post-ids');
};

const getAllAuthors = async (page = 1) => {
    validatePage(page);
    return await http.get('/' + instance.get().siteId + '/authors?page=' + page);
};

const getAllByAuthor = async (authorId, page = 1) => {
    validatePage(page);
    
    if (!authorId || typeof authorId !== 'string') {
        throw new Error('[CAASY]: the provided author ID is mandatory but was not provided or is not of type string');
    }
    
    return await http.get('/' + instance.get().siteId + '/posts-by-author/' + authorId + '?page=' + page);
};

export default { getAll, getById, getAllIds, getAllAuthors, getAllByAuthor };
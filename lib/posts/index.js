import instance from '../instance/index';
import http from '../http/index';

const getAll = async (page = 1) => {
    return await http.get('/' + instance.get().siteId + '/posts?page=' + page);
};

const getById = async (postId) => {
    return await http.get('/' + instance.get().siteId + '/posts/' + postId);
};

export default { getAll, getById };
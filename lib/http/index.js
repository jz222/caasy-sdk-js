import axios from 'axios';

import constants from '../constants/index';
import instance from '../instance/index';

/**
 * Sends a GET request to the Caasy API.
 * @param postfix {string} the HTTP route the request should be sent too
 * @returns {Promise<object>}
 */
const get = async (postfix) => {
    const url = constants.endpoint[instance.get().mode];
    
    return (await axios(url + postfix)).data;
};

export default { get };
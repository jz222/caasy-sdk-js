import p from 'phin';

import constants from '../constants/index';
import instance from '../instance/index';

/**
 * Sends a GET request to the Caasy API.
 * @param postfix {string} the HTTP route the request should be sent too
 * @returns {Promise<string>}
 */
const get = async (postfix) => {
    const url = constants.endpoint[instance.get().mode];
    
    const res = await p({
        url: url + postfix,
        parse: 'json'
    });
    
    return res.body;
};

export default { get };
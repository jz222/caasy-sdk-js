import p from 'phin';

import constants from '../constants/index';
import instance from '../instance/index';

const get = async (postfix) => {
    const url = constants.endpoint[instance.get().mode];
    
    const res = await p({
        url: url + postfix,
        parse: 'json'
    });
    
    return res.body;
};

export default { get };
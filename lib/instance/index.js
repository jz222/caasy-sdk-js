const instance = () => {
    let _config = {
        siteId: '',
        mode: 'prod'
    };
    
    const set = (config) => {
        if (!config.siteId || typeof config.siteId !== 'string' || config.siteId.length !== 24) {
            throw new Error('[CAASY]: the provided site ID is missing or invalid');
        }
        
        _config = { ..._config, ...config };
    };
    
    const get = () => _config;
    
    return { set, get };
};

export default instance();
const instance = () => {
    let _config = {
        siteId: '',
        mode: 'prod',
        isInitialized: false
    };
    
    const set = (config) => {
        if (!config.siteId || typeof config.siteId !== 'string' || config.siteId.length !== 24) {
            throw new Error('[CAASY]: the provided site ID is missing or invalid');
        }
        
        _config = { ..._config, ...config, isInitialized: true };
    };
    
    const get = () => {
        if (!_config.isInitialized) {
            throw new Error('[CAASY]: before you use the Caasy SDK you need to initialize it by calling the "init()" function and provide the "siteId"');
        }
        
        return _config;
    };
    
    return { set, get };
};

export default instance();
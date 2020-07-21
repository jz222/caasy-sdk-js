/**
 * Sets and returns the user's configuration.
 * @returns {{set: set, get: (function(): {mode: string, isInitialized: boolean, siteId: string})}}
 */
const instance = () => {
    let _config = {
        siteId: '',
        mode: 'prod',
        isInitialized: false
    };
    
    /**
     * Sets the user's config to the local config object.
     * @param config {object} the user's configuration
     */
    const set = (config) => {
        if (!config.siteId || typeof config.siteId !== 'string' || config.siteId.length !== 24) {
            throw new Error('[CAASY]: the provided site ID is missing or invalid');
        }
        
        _config = { ..._config, ...config, isInitialized: true };
    };
    
    /**
     * Returns the currently active configuration.
     * @returns {{mode: string, isInitialized: boolean, siteId: string}}
     */
    const get = () => {
        if (!_config.isInitialized) {
            throw new Error('[CAASY]: before you use the Caasy SDK you need to initialize it by calling the "init()" function and provide the "siteId"');
        }
        
        return _config;
    };
    
    return { set, get };
};

export default instance();
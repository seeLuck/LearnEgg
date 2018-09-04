'use strict';

module.exports = appInfo => {
    const config = exports = {};

    config.security = {
        xframe: {
            enable: false,
        },
        csrf: false
    };

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1536041907894_9196';

    // 全局配置中间件
    config.middleware = ['gzip'];
    config.gzip = {
        threshold: 1024,
        match: '/users', // 筛选路径
    };

    config.logger = {
        dir: './logs/2.project',
    };

    return config;
};

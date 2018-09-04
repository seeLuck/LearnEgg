'use strict';

module.exports = appInfo => {
    const config = exports = {};

    config.security = {
        xframe: {
            enable: false,
        },
        csrf: {
            // 判断是否需要 ignore 的方法，请求上下文 context 作为第一个参数
            ignore: function () {
                return true
            },
        },
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
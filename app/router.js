'use strict';

module.exports = app => {
    const {router, controller} = app;
    router.get('/', controller.home.index);
    router.post('/', controller.home.index);

    router.get('/users', controller.user.getUsers);

    //对路由使用中间件
    router.get('/usersGzip', app.middleware.gzip({ threshold: 1024 }), controller.user.testGzip);
};

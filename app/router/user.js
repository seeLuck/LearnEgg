module.exports = app => {
    const {router, controller} = app;
    router.get('/users', controller.user.getUsers);
    //对路由使用中间件
    router.get('/usersGzip', app.middleware.gzip({ threshold: 1024 }), controller.user.testGzip);
    router.get('/getUser/:userId/:name', app.middleware.uppercase(), controller.user.getUser);
    router.post('/addUser', controller.user.addUser);
    router.get('/testPlugin', controller.user.testPlugin);
    //router.redirect('/', '/users', 302);
};
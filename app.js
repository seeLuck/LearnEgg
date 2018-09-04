//这个是启动时执行的脚本
module.exports = app => {
    //app的事件
    app.once('server', server => {
        //console.log('server')
    });
    app.on('error', (err, ctx) => {
        //console.log('error')
    });
    app.on('request', ctx => {
        //console.log('request');
        //console.log(ctx.query);
        //这里取不到post的参数
    });
    app.on('response', ctx => {
        const used = Date.now() - ctx.starttime;
        //console.log('response', used);
        //console.log(ctx.request.body);
    });

    app.validator.addRule('json', (rule, value) => {
        try {
            JSON.parse(value);
        } catch (err) {
            return 'must be json string';
        }
    });
};

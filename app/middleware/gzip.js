const isJSON = require('koa-is-json');
const zlib = require('zlib');

//自定义中间件的方式
module.exports = (options, ...arg) => {
    return async function gzip(ctx, next) {
        await next();

        // 后续中间件执行完成后将响应体转换成 gzip
        let body = ctx.body;
        if (!body) return;

        //这里取到config.gzip里的配置，也可以作为参数传入。
        //console.log(options.threshold);
        // 支持 options.threshold
        if (options.threshold && ctx.length < options.threshold) return;

        if (isJSON(body)) body = JSON.stringify(body);

        // 设置 gzip body，修正响应头
        const stream = zlib.createGzip();
        stream.end(body);
        ctx.body = stream;
        ctx.set('Content-Encoding', 'gzip');
    };
};

module.exports = () => {
    return async function uppercase(ctx, next) {
        //console.log(ctx.params.name)
        ctx.params.name = ctx.params.name && ctx.params.name.toUpperCase();
        await next();
    };
};
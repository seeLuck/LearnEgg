module.exports = {
    foo(param) {
        console.log(`ctx.ctxfoo`)
    },
    get isXHR() {
        return this.get('X-Requested-With') === 'XMLHttpRequest';
    }
};

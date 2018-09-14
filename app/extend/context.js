module.exports = {
    foo(param) {
        console.log(`ctx.foo`)
    },
    get isXHR() {
        return this.get('X-Requested-With') === 'XMLHttpRequest';
    }
};

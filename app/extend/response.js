module.exports = {
    foo(param) {
        console.log(`response.foo`)
    },

    get isSuccess() {
        return this.status === 200;
    }
};

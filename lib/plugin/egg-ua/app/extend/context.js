module.exports = {
    foo(param) {
        console.log(`ctx.pluginfoo`)
    },
    get isIOS() {
        const iosReg = /iphone|ipad|ipod/i;
        return iosReg.test(this.get('user-agent'));
    }
};

module.exports = {
    getHelper(user) {
        return `IamHelper`;
    },
    money(val) {
        const lang = this.ctx.get('Accept-Language');
        if (lang.includes('zh-CN')) {
            return `￥ ${val}`;
        }
        return `$ ${val}`;
    }
};

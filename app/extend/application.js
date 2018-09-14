const LRU = Symbol('Application#lru');
const LRUCache = require('ylru');

module.exports = {
    foo(param) {
        console.log(`app.foo`)
    },

    get lru() {
        if (!this[LRU]) {
            this[LRU] = new LRUCache(1000);
        }
        return this[LRU];
    }
};

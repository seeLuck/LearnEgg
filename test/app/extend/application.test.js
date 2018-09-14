const { app, mock, assert } = require('egg-mock/bootstrap');

describe('get LRU', () => {
    it('should set lru and works', async () => {
        app.lru.set('foo', 'bar');
        // 读取缓存
        assert(app.lru.get('foo') === 'bar');
    });
});
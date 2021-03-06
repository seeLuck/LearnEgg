const { app, mock, assert } = require('egg-mock/bootstrap');

describe('user service', () => {
    it('should get exists user', async () => {
        // 创建 ctx
        const ctx = app.mockContext();
        // 通过 ctx 访问到 service.user
        const user = await ctx.service.user.getUsers();
        assert(user === 'IamHelper');
    });
});
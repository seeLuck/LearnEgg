const { app, mock, assert } = require('egg-mock/bootstrap');

describe('test/controller/user.test.js', () => {
    describe('get ctx', () => {
        "use strict";
        it('should get a ctx', () => {
            const ctx = app.mockContext();
            assert(ctx.method === 'GET');
            assert(ctx.url === '/');
        });

        it('should mock ctx.user', () => {
            const ctx = app.mockContext({
                user: {
                    name: 'fengmk2',
                },
            });
            assert(ctx.user);
            assert(ctx.user.name === 'fengmk2');
        });
    });

    describe('GET /', () => {
        it('should status 200 and get the body', () => {
            // 对 app 发起 `GET /` 请求
            return app.httpRequest()
                    .get('/getUser/1/aa')
                    .expect(200) // 期望返回 status 200
                    .expect('{"name":"I am user 1 name AA"}');
        });

        it('should send multi requests', async () => {
            // 使用 generator function 方式写测试用例，可以在一个用例中串行发起多次请求
            await app.httpRequest()
                    .get('/users')
                    .expect(200) // 期望返回 status 200
                    .expect("IamHelper");

            // 再请求一次
            const result = await app.httpRequest()
                    .get('/')
                    .expect(200)
                    .expect("hi, egg");

            // 也可以这样验证
            assert(result.status === 200);
        });

        it('plugin OK', () => {
            // 对 app 发起 `GET /` 请求
            return app.httpRequest()
                    .get('/testPlugin')
                    .expect(200) // 期望返回 status 200
        });
    });

    describe('POST /', ()=>{
        it('should status 200 and get the body', async() =>{
            await app.httpRequest()
                    .post('/addUser')
                    .type('form')
                    .send({
                        name: 1,
                    })
                    .expect(200)
                    .expect({
                        success: true,
                        data: 666
                    });
        })
    })
});
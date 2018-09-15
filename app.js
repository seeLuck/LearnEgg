// //这个是启动时执行的脚本
// module.exports = app => {
//     //app的事件
//     app.once('server', server => {
//         //console.log('server')
//     });
//     app.on('error', (err, ctx) => {
//         //console.log('error')
//     });
//     app.on('request', ctx => {
//         //console.log('request');
//         //console.log(ctx.query);
//         //这里取不到post的参数
//     });
//     app.on('response', ctx => {
//         const used = Date.now() - ctx.starttime;
//         //console.log('response', used);
//         //console.log(ctx.request.body);
//     });
//
//     app.validator.addRule('json', (rule, value) => {
//         try {
//             JSON.parse(value);
//         } catch (err) {
//             return 'must be json string';
//         }
//     });
//
//     app.beforeStart(async () => {
//         // 保证应用启动监听端口前数据已经准备好了
//         // 后续数据的更新由定时任务自动触发
//         //await app.runSchedule('update_cache');
//     });
//
//     //agent消息
//     app.messenger.on('xxx_action', data => {
//         console.log('get xxx_action')
//     });
//
//     app.messenger.once('egg-ready', () => {
//         app.messenger.sendToAgent('agent-event', { foo: 'bar' });
//         app.messenger.sendToApp('app-event', { foo: 'bar' }); //这个是给workers群发消息，包括自己
//     });
//
//     app.messenger.on('app-event', () => {
//         console.log('get app-event')
//     });
// };

class AppBootHook {
    constructor(app) {
        //agent消息
        this.app = app;
        app.messenger.on('xxx_action', data => {
            console.log('get xxx_action')
        });

        app.messenger.once('egg-ready', () => {
            app.messenger.sendToAgent('agent-event', {foo: 'bar'});
            app.messenger.sendToApp('app-event', {foo: 'bar'}); //这个是给workers群发消息，包括自己
        });

        app.messenger.on('app-event', () => {
            console.log('get app-event')
        });

        app.once('server', server => {
            //console.log('server')
        });
        app.on('error', (err, ctx) => {
            //console.log('error')
        });
        app.on('request', ctx => {
            //console.log('request');
            //console.log(ctx.query);
            //这里取不到post的参数
        });
        app.on('response', ctx => {
            const used = Date.now() - ctx.starttime;
            //console.log('response', used);
            //console.log(ctx.request.body);
        });

    }

    configDidLoad() {
        console.log(123)
        // Config, plugin files have loaded.
    }

    async didLoad() {
        // All files have loaded, start plugin here.
    }

    async willReady() {
        // All plugins have started, can do some thing before app ready
        //这里是插件方法，所以不能放在constructor里
        await this.app.runSchedule('update_cache');
    }

    async didReady() {
        // Worker is ready, can do some things
        // don't need to block the app boot.
    }

    async serverDidReady() {
        // Server is listening.

        this.app.validator.addRule('json', (rule, value) => {
            try {
                JSON.parse(value);
            } catch (err) {
                return 'must be json string';
            }
        });
    }

    async beforeClose() {
        // Do some thing before app close.
    }
}

module.exports = AppBootHook;

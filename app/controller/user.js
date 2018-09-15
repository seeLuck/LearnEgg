'use strict';
const BaseController = require('./base_controller');
let userAdapter = require('./adapter/userAdapter');

class UserController extends BaseController {
    async getUsers() {
        //this.ctx.response.body的简写
        this.ctx.body = await this.service.user.getUsers();
    }

    async testGzip() {
        this.ctx.body = `gzip`;
    }

    async getUser() {
        console.log(this.ctx.query);
        //queries 捕获重复的key，所有key的值都存在数组中
        this.ctx.body = {
            name: `I am user ${this.ctx.params.userId} name ${this.ctx.params.name}`
        }
    }

    async addUser() {
        //内置了bodyParser
        console.log(this.ctx.request.body);
        try{
            this.ctx.validate(userAdapter.addUser);
        }catch (e){
            console.log(e.errors)
        }

        let data1 = 666;
        this.success(data1);
    }

    async testPlugin(){
        this.ctx.foo()
        this.ctx.nfoo()
        this.ctx.body = 123
        //this.ctx.ua.foo();
        //console.log()
    }
    //上传文件
    //https://eggjs.org/zh-cn/basics/controller.html#获取上传的文件
}

module.exports = UserController;

'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        //post提交，自动解析json和form-encoded
        //console.log(this.ctx.request.body);

        //get的参数
        //console.log(this.ctx.query);

        //输出，和post区分
        this.ctx.body = 'hi, egg';
    }
}

module.exports = HomeController;

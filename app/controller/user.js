'use strict';
const Controller = require('egg').Controller;
let userAdapter = require('./adapter/userAdapter');

class UserController extends Controller {
    async getUsers() {
        this.ctx.body = await this.service.user.getUsers();
    }

    async testGzip() {
        this.ctx.body = `gzip`;
    }

    async getUser() {
        console.log(this.ctx.query);
        this.ctx.body = {
            name: `I am user ${this.ctx.params.userId} name ${this.ctx.params.name}`
        }
    }

    async addUser() {
        console.log(this.ctx.request.body);
        //this.ctx.validate(userAdapter.addUser);
        this.ctx.body = {
            data: `success`
        }
    }
}

module.exports = UserController;

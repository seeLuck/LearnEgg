'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async getUsers() {
        this.ctx.body = await this.service.user.getUsers();
    }

    async testGzip() {
        this.ctx.body = `gzip`;
    }
}

module.exports = UserController;

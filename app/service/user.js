'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    async getUsers() {
        return this.ctx.helper.getHelper();
    }
}

module.exports = UserService;

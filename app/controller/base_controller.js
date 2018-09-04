'use strict';
const Controller = require('egg').Controller;

class BaseController extends Controller {
    success(data) {
        this.ctx.body = {
            success: true,
            data,
        };
    }
}

module.exports = BaseController;

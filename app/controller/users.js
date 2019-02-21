'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }

  async register(){
    if(!ctx.request.body.email || ctx.request.body.password){
      return {
        code: 403,
        message: '没有获取到有效的账号信息'
      }
    }
    const userData = {
      email: ctx.request.body.email,
      password: ctx.request.body.password
    }
    const token = ctx.app.jwt.sign(userData, )
    this.ctx.body = 'Success response register api.'
  }
}

module.exports = UserController;

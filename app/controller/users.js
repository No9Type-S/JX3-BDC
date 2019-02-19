'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }

  async register(){
    this.ctx.body = 'Success response register api.'
  }
}

module.exports = UserController;

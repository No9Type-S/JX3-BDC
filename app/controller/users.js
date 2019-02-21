'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }

  async register(){
    const ctx = this.ctx
    if(!ctx.request.body.email && !ctx.request.body.password){
      return ctx.body = {
        code: 403,
        message: 'Get none data.'
      }
    }
    const userData = {
      email: ctx.request.body.email,
      password: await ctx.genHash(ctx.request.body.password)
    }
    const user = await ctx.model.User.create(userData)
    const token = await ctx.app.jwt.sign(userData, ctx.app.config.jwt.secret, {
      expiresIn: '1h'
    })
    ctx.body = {
      code: 200,
      message: 'Account created.',
      token: token
    }
  }
}

module.exports = UserController;

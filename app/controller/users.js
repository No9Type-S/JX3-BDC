'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }

  async register(){
    const ctx = this.ctx
    const { email, password } = ctx.request.body
    if(!email && !password){
      let msg = '账号或密码不能为空'
      ctx.throw(401, msg)
    }

    const userData = {
      email: email,
      password: await ctx.genHash(password)
    }

    const has = await ctx.model.User.find({
      where: {
        email: email
      }
    })

    if(has){
      let msg = '邮箱已经存在'
      ctx.throw(403, msg)
    }

    const user = await ctx.model.User.create(userData)

    const tokenData = {
      email: user.email,
      id: user.id
    }

    const token = await ctx.app.jwt.sign(tokenData, ctx.app.config.jwt.secret,{
      expiresIn: 60 * 60
    })

    ctx.status = 201;
    ctx.body = {
      message: '创建成功。',
      token: token
    }
  }

  async login() {
    const ctx = this.ctx
    const { email, password } = ctx.request.body
    if(!email && !password){
      let msg = '请填写账号信息'
      ctx.throw(400, msg)
    }
    const user = await ctx.model.User.find({
      where: {
        email: email
      }
    })

    let passVerify = false

    if (user.id) {
      passVerify = await ctx.compare(password, user.password) // verify passowrd
    }

    if ( !passVerify ) {
      let msg = '账号或者密码错误'
      ctx.throw( 400, msg )
    }

    const tokenData = {
      email: user.email,
      id: user.id
    }
    const token = await ctx.app.jwt.sign(tokenData, ctx.app.config.jwt.secret, {
      expiresIn: 60 * 60
    })

    ctx.status = 201;
    ctx.body = {
      message: '登录成功!',
      token: token
    }
  }
}

module.exports = UserController;

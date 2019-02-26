module.exports = () => {
  return async function auth(ctx, next) {
    const oldToken = ctx.cookies.get('token', { signed: false }) || ''
    if(oldToken){
      await next();
    }else{
      ctx.body = {
        message: '登录信息过期需要重新登录.'
      }
      ctx.status = 403;
      return
    }
  }
}
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  router.get('/', controller.home.index);
  router.post('/register', controller.users.register);
  router.post('/login', controller.users.login);
  router.post('/verify', middleware.auth(), controller.users.verify)
  // router.post('/verify', controller.users.verify)
  router.post('/invalid', controller.users.invalid)
};

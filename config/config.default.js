'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1550028316907_3010';

  // add your config here
  config.middleware = [];

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3300,
    database: 'jx3todo',
    username: 'root',
    password: 'secret'
  };

  config.security = {
    csrf: {
      enable: false,
    },
    domianWhiteList: ['http://127.0.0.1:2233','http://127.0.0.1']
  }

  return config;
};

'use strict';

exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};

exports.cors = {
  enable: true,
  package: 'egg-cors'
}

exports.jwt = {
  enable: true,
  package: 'egg-jwt'
}

exports.bcrypt = {
  enable: true,
  package: 'egg-bcrypt'
}

// had enabled by egg
// exports.static = true;

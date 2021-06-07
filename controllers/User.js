'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.usersLoginPOST = function usersLoginPOST (req, res, next, body) {
  User.usersLoginPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersPOST = function usersPOST (req, res, next, body) {
  User.usersPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

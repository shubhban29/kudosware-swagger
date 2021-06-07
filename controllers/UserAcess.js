'use strict';

var utils = require('../utils/writer.js');
var UserAcess = require('../service/UserAcessService');

module.exports.getIdGET = function getIdGET (req, res, next, id) {
  UserAcess.getIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getallGET = function getallGET (req, res, next) {
  UserAcess.getallGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

'use strict';

var utils = require('../utils/writer.js');
var AdminAcess = require('../service/AdminAcessService');

module.exports.createIdPOST = function createIdPOST (req, res, next, body, id) {
  AdminAcess.createIdPOST(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteIdDELETE = function deleteIdDELETE (req, res, next, id) {
  AdminAcess.deleteIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getIdGET = function getIdGET (req, res, next, id) {
  AdminAcess.getIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getallGET = function getallGET (req, res, next) {
  AdminAcess.getallGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putIdPUT = function putIdPUT (req, res, next, body, id) {
  AdminAcess.putIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

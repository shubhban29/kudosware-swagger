'use strict';

var utils = require('../utils/writer.js');
var ToDo = require('../service/ToDoService');

module.exports.createIdPOST = function createIdPOST (req, res, next, body, id) {
  ToDo.createIdPOST(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteIdDELETE = function deleteIdDELETE (req, res, next, id) {
  ToDo.deleteIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getIdGET = function getIdGET (req, res, next, id) {
  ToDo.getIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getallGET = function getallGET (req, res, next) {
  ToDo.getallGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putIdPUT = function putIdPUT (req, res, next, body, id) {
  ToDo.putIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

'use strict';


/**
 * To create new todo Item.
 *
 * body Todo  (optional)
 * id Integer it can be any number
 * returns todo
 **/
exports.createIdPOST = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "sub_title" : "sub_title",
  "due_date" : "2000-01-23",
  "title" : "title"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a todo item.
 *
 * id Integer id is primary key of the todo item
 * no response value expected for this operation
 **/
exports.deleteIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * get single ToDo item
 *
 * id Integer primary key of activity
 * returns todo
 **/
exports.getIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "sub_title" : "sub_title",
  "due_date" : "2000-01-23",
  "title" : "title"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get single ToDo item
 *
 * returns List
 **/
exports.getallGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "sub_title" : "sub_title",
  "due_date" : "2000-01-23",
  "title" : "title"
}, {
  "sub_title" : "sub_title",
  "due_date" : "2000-01-23",
  "title" : "title"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update single ToDo item
 *
 * body Todo  (optional)
 * id Integer id is primary key of todo item
 * returns todo
 **/
exports.putIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "sub_title" : "sub_title",
  "due_date" : "2000-01-23",
  "title" : "title"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


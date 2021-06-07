'use strict';


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


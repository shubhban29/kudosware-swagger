'use strict';


/**
 * to login
 *
 * body Users_login_body  (optional)
 * returns user
 **/
exports.usersLoginPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "modified_on" : "2000-01-23T04:56:07.000+00:00",
  "password" : "",
  "is_superuser" : true,
  "created_on" : "2000-01-23T04:56:07.000+00:00",
  "modified_by" : 0,
  "last_name" : "last_name",
  "first_name" : "first_name",
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * To create new user or admin
 *
 * body Users_body  (optional)
 * returns user
 **/
exports.usersPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "modified_on" : "2000-01-23T04:56:07.000+00:00",
  "password" : "",
  "is_superuser" : true,
  "created_on" : "2000-01-23T04:56:07.000+00:00",
  "modified_by" : 0,
  "last_name" : "last_name",
  "first_name" : "first_name",
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


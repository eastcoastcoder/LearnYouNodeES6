'use strict';

const request = require('request');
const async = require('async');

const arr = [];
let i = 2;

// Whilst with helper methods (global vars)
function getReq(callback) {
  request.get({
    'uri': process.argv[i++],
  }, (err, response, body) => {
    if (err) return callback(err);
    arr.push(body);
    return callback(null, arr);
  });
}

// .whilst(): test, iteratee, [callback]
async.whilst(
  () => i < 5,
  callback => getReq(callback),
  (err, results) => {
    if (err) return console.error(err);
    return results.map(item => console.log(item));
  }
);

/*
// Waterfall with helper methods (local variables)
function getReq(arr, i, callback) {
  request.get({
    'uri': process.argv[i++],
  }, (err, response, body) => {
    if (err) return callback(err);
    arr.push(body);
    return callback(null, arr, i);
  });
}

async.waterfall([
  callback => getReq([], 2, callback),
  (arr, i, callback) => getReq(arr, i, callback),
  (arr, i, callback) => getReq(arr, i, callback),
  (arr, callback) => callback(null, arr.map(item => console.log(item)))
], err => console.error(err));


// Waterfall with helper methods (global vars)
async.waterfall([
  getData,
  getData,
  getData,
  printData,
]);

function getData(callback) {
  request.get({
    'uri': process.argv[i++],
  }, (err, response, body) => {
    if (err) return console.error(err);
    results.push(body);
    callback();
  });
}

function printData(callback) {
  for (const i in results) {
    console.log(results[i]);
  }
}

// .whilst(): test, iteratee, [callback]
async.whilst(
  () => i < 5,
  (callback) => {
    request.get({
      'uri': process.argv[i++]
    }, (err, response, body) => {
      if (err) return callback(err);
      arr.push(body);
      return callback(null, arr);
    });
  },
  (err, results) => {
    if (err) return console.error(err);
    return results.map(item => console.log(item));
  }
);

// http.get and bl Method
var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++) {
    console.log(results[i])
  }
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }

      results[index] = data.toString()
      count++

      if (count === 3) {
        printResults()
      }
    }))
  })
}

for (var i = 0; i < 3; i++) {
  httpGet(i)
}
*/

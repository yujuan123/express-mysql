/**
 * Created by yujuan on 17-6-1.
 */
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'hhxx',
  database: 'ttms'
});

module.exports = connection;


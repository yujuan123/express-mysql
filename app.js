var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(path.resolve('./public/index.html'));
});
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'hhxx',
  database: 'db'
});
//连接数据库
connection.connect(function (err) {
  if (err) {
    console.log("err" + err.stack);
    return;
  }
  console.log("connection id" + connection.threadId);
});
//进行CRUD
// https://github.com/mysqljs/mysql#performing-queries

/*//向 myClass表中插入一条数据
var myAddSql = 'insert into myClass values(4,?,?,?)';
var addSql_params = ['Sarah', 0, 80.45];

//查
var myGetSql = 'select *from `myClass` where `sex` = ?';
var getSql_params = [0];

//删

var myDelSql = 'delete from `myClass` where `name` like ?';
var delSql_params = ['Sarah'];

//改
var myUpdateSql = 'update `myClass` set `name` ="Wang" where `name` = ?';
var update_params = ['Sam'];*/

/*connection.query(myAddSql, addSql_params, function (error, results, fields) {
 if (error) throw error;
 console.log('result is: ', results);
 });*/
//结合app.post更新数据库
app.post('/insert-user', function (req, res) {
  console.log(req.body);
  connection.query('insert into `users` set ?',req.body,
      function (err, result) {
        if (err) throw err;
        res.send('User added to database with ID: ' + result.insertId);
      }
  );
});


app.listen(3000, function () {
  console.log("app is listening");
});
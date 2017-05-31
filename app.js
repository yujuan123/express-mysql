var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//加载public下面的静态资源:
app.use(express.static('public'));

app.use('*', function (req, res) {
  res.sendFile(path.resolve('./public'));
});

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'hhxx',
  database: 'ttms'
});
//连接数据库
connection.connect(function (err) {
  if (err) {
    console.log("err" + err.stack);
    return;
  }
  console.log("connection id" + connection.threadId);
});
app.get('/get-movies',function(req,res){
  console.log("fjdkfd");
  console.log(req.body);
  connection.query('select *from `MovieTable`', function (err, results, fields) {
    if (err) throw err;
    console.log("result is:" + results);
    res.send(results);
  });
});

//查询所有

/*//增：插入一条
connection.query('insert into `MovieTable` set ?', {
  movieName: 'Running',
  movieType: '言情',
  movieLanguage: '国语',
  movieDescribe: 'good movie',
  movieStarTime: '8:00',
  movieEndTime: '9:00'
},function(err,results){
  if(err){
    throw err;
  }
  console.log("results is" + results);
});
//改
connection.query('update `MovieTable` set `movieName`=? where `movieName`= ?', ['One night', 'One day'], function (err, results) {
  if (err) {
    throw err;
  }
  console.log("result is :" + results);
});
//删
connection.query('delete from `MovieTable` where `movieLanguage` = ?', ['国语'], function (err, results) {
  if (err) {
    throw(err);
  }
  console.log("result is" + results);
});*/

app.listen(3000, function () {
  console.log("app is listening");
});
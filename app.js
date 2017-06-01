var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var regRouter = require('./routers/router');
var connection = require('./setSql');

var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//加载public下面的静态资源:
app.use(express.static('public'));

regRouter(app);


//连接数据库
connection.connect(function (err) {
  if (err) {
    console.log("err" + err.stack);
    return;
  }
  console.log("connection id" + connection.threadId);
});


app.listen(3000, function () {
  console.log("app is listening");
});
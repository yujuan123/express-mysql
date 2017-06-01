/**
 * Created by yujuan on 17-6-1.
 */
var express = require('express');
var router = express.Router();
var connection = require('../setSql');

//此处用router
router.get('/get-movies', function (req, res) {
  console.log("fjdkfd");
  connection.query('select *from `MovieTable`', function (err, results, fields) {
    if (err) throw err;
    console.log("result is:" + results);
    res.send(results);
  });
});

module.exports = router;
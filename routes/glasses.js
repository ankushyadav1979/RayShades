var express = require('express');
var router = express.Router();
var db=require('../database');
// another routes also appear here
// this script to fetch data from MySQL databse table
router.get('/homepage', function(req, res, next) {
    var sql='select glass.glass_name,glass.price,glass.discount,glass.rating,category.category_name from glass inner join category on glass.category_id=category.category_id;';
    console.log('in here line 8 controller');
    db.query(sql, function (err, data, fields) {
      console.log('in here line  controller');
    if (err) throw err;
    res.render('homepage', { title: 'Glasses List', userData: data});
  });
});
module.exports = router;

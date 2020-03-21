var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('client/index');
});

router.get('/cart', function (req, res, next) {
  res.render('client/cart');
});
router.get('/product', function (req, res, next) {
  res.render('client/single_product');
});


module.exports = router;

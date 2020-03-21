var mongoose = require("mongoose")
//var userModel = require("./../models/user.model");
var express = require("express")
var router = express.Router();

/* GET users listing. */
router.get('/login', function (req, res, next) {
    res.render('client/login');
});
router.post('/login', function (req, res, next) {
    console.log(req.body.email)
});
router.get('/register', function (req, res, next) {
    res.render('client/register');
});
router.post('/register', function (req, res, next) {
    console.log(req.body.FullName);
    //   res.send(req.body.FullName)
});

module.exports = router;
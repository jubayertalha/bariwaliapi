var express = require('express');
var bodyParser = require('body-parser');

var db = require('./db');

var login = express.Router();

login.post('/login',bodyParser.json(),(req,res)=>{
    const email = req.body.email;
    const pass = req.body.pass;
    const type = req.body.type;

    var response = {code:1,msg:'Login Succesfull!',name:'null',email: email,userName:'null',phone:'null'};

    res.send(response);

});

module.exports = login;
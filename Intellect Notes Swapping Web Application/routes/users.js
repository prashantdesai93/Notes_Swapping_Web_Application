var express = require('express');
var router = express.Router();
var session = require('express-session');
const userschema = require('../model/User');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const { check, validationResult } = require('express-validator/check');

/* GET users listing. */
router.get('/login', function(req, res, next) {
    //res.send('respond with a resource');
    res.render('login',{data:{}, title:'signIn'});
});

router.get('/signup', function(req, res, next) {
    //res.send('respond with a resource');
    res.render('signup',{data:{},title:'signIn'});
});

router.post('/loginUser',urlencodedParser, [check('uname').isEmail(), check('psw').isAlphanumeric().isLength({min:8, max: 16})], function(req, res, next) {
    //res.send('respond with a resource');
    let data = {};
    var userParameters = req.body;
    console.log("userParameters: ",userParameters);

    var loginQuery = userschema.findOne({email:userParameters.uname, password: userParameters.psw});
    data.message="";
    loginQuery.exec(function (err, docs) {
        if(docs != null) {
            console.log("************************* ", docs);
            req.session.theUser = docs;

            res.redirect('/myItems');
        } else{
            data.message="Please enter valid Username or Password"
            res.render('login', {data:data});
        }

    });

});

router.post('/signupUser', function(req, res, next) {
    var signUpUserParameters = req.body;
    let data = {};
    console.log("signUpUserParameters: ",signUpUserParameters);

    var newUser = new userschema({
        firstName: signUpUserParameters.fname,
        lastName: signUpUserParameters.lname,
        email: signUpUserParameters.email,
        address1: signUpUserParameters.addr,
        address2: signUpUserParameters.addr2,
        city: signUpUserParameters.city,
        state: signUpUserParameters.state,
        postCode: signUpUserParameters.zip,
        country: signUpUserParameters.country,
        password: signUpUserParameters.psw[0]
    });

    newUser.save().then((docs) => {
        console.log(docs);
        req.session.theUser = docs;
        req.session.loginFlag = true;
        data.docs = req.session.theUser;
        data.title = 'Home';
        data.loginFlag = req.session.loginFlag;
        data.theUser = req.session.theUser;
        res.render('login', {data: data});
    }).catch((err) => {
        console.log(err);
        console.log('Login failed!');
        // data.message = 'Invalid Password';
        data.title = 'Home';
        data.loginFlag = false;
        res.render('/', {data: data});
    });
    //res.render('signup',{title:'signIn'});
});

module.exports = router;

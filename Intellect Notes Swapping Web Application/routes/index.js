var express = require('express');
var router = express.Router();

var UserDb = require('../public/javascripts/UserDb');

//var items = itemDb.getAllItems();

/* GET home page. */
router.get('/', async function(req, res, next) {

    // var user = await UserDb.getUserById(101);
    //
    //     console.log("req.session.theUser ",req.session.theUser);
    var data={};
    if(req.session.theUser){
        data.user = req.session.theUser;
    }
    res.render('index', { title: 'Express', data: data });
});

router.get('/logout', async function(req, res, next) {

    // var user = await UserDb.getUserById(101);
    //
    //     console.log("req.session.theUser ",req.session.theUser);
    req.session.destroy(function (err) {
        if (err) {
            return next(err);
        } else {

            res.render('index', { title: 'Express', data:{}});
        }
    });
});

module.exports = router;

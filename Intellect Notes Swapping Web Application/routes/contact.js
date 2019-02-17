var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var data={};
    if(req.session.theUser){
        data.user = req.session.theUser;
    }
    res.render('contact', { title: 'Express', data: data });
});

module.exports = router;

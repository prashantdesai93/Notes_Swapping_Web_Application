var express = require('express');
var router = express.Router();
var categoryDB = require('../public/javascripts/categoryDB');
var itemDB = require('../public/javascripts/itemDB');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('swap', { title: 'Express' });
});

router.get('/:itemCode', async function(req, res, next) {
    var itemCode = req.params.itemCode;

    console.log("item code for swap page",itemCode)
    var item = await categoryDB.getItem(itemCode);
    var itemsByUserId= await itemDB.getItemsByUserId(req.session.theUser.userId);
    console.log("Items by userId:<><><>"+JSON.stringify(itemsByUserId));

    if(item !=undefined){

        console.log(item);
        var data= {
            title:'Item',
            path: req.url,
            item: item,
            itemsByUserId:itemsByUserId,
            user : req.session.theUser
        }

        res.render('swap', { data: data, title: 'Express'});
    } else{
        res.redirect('/categories');
    }

    res.render('swap', { title: 'Express' });
});

module.exports = router;

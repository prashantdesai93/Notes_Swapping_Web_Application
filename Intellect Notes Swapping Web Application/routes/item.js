var express = require('express');
var router = express.Router();
var categoryDB = require('../public/javascripts/categoryDB');

/* GET home page. */
/*router.get('/', function(req, res, next) {
    res.render('item', { title: 'Express' });
});*/

router.get('/:itemCode', async function(req, res, next) {
    var itemCode = req.params.itemCode;

console.log("item code",itemCode)
    var item = await categoryDB.getItem(itemCode);
    //console.log("Item Code:<><><>"+JSON.stringify(item));

    if(item !=undefined){

        console.log(item);
        var data= {
            title:'Item',
            path: req.url,
            item: item,
            user : req.session.theUser
        }

        res.render('item', { data: data, title: 'Express'});
    } else{
        res.redirect('/categories');
    }
});

module.exports = router;

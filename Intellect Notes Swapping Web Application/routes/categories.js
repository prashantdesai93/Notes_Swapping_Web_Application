var express = require('express');
var router = express.Router();
var categoryDB = require('../public/javascripts/categoryDB');
var UserDb = require('../public/javascripts/UserDb');



//
// router.get('/', function(req, res, next) {
//
//     var items;
//     var categories = categoryDB.getCategories();
//     var itemData = filterData(req);
//     new Promise(function(resolve, reject) {
//         someAsyncAction((itemData) => resolve(itemData))
//     });
//     console.log("ppppppppppppppppppppppppppppppppppppp ",itemData)
//     // itemData.then(function (item) {
//     //     items = item;
//     // });
//     var data= {
//         title:'Categories',
//         path: req.url,
//         categories: categories,
//         items: itemData
//     }
//     res.render('categories', {data: data , title: 'Express' });
// });

var filterData = function(req){
    //var items= categoryDB.getItems();
    var allFilterDatas;
    if(req.session.theUser){
        allFilterDatas = categoryDB.getOtherUserItems(req.session.theUser.userId);

    } else{
        allFilterDatas = categoryDB.getItems()
    }
    return allFilterDatas;
}


var filterCategories = function(req) {
    var items;
    if (req.session.theUser) {
        return categoryDB.getCategoriesForUser(req.session.theUser.userId);
    } else {
        return categoryDB.getCategories();
    }
}

router.get('/', async function(req, res, next) {

    if(req.session.theUser === undefined){
        res.redirect("/users/login")
    }
    var categories = await filterCategories(req);

    var items = await filterData(req);
    var data= {
        title:'Categories',
        path: req.url,
        categories: categories,
        items: items,
        user : req.session.theUser
    }

    console.log("all categories ================",data)
    res.render('categories', {data: data , title: 'Express' });
});

router.get('/:categoryName', async function (req,res) {
    // get the category name

    var categories = [];
    var itemData = await categoryDB.getItemsByCategoryForUser(req.params.categoryName, req.session.theUser.userId);

    categories.push(req.params.categoryName);
    console.log("Items of single cate ", itemData,categories);
    var data= {
        title:'Categories',
        path: req.url,
        categories: categories,
        items: itemData
    }

    res.render('categories', { data: data, title: 'Express' });
});


module.exports = router;


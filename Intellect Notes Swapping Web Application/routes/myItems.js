var express = require('express');
var session = require('express-session');
var router = express.Router();

var User = require('../model/User');
var UserProfile = require('../model/UserProfile');
var itemDb = require('../public/javascripts/ItemDB');

var offerDb = require('../public/javascripts/OfferDB');
var UserDb = require('../public/javascripts/UserDb');

//var items = itemDb.getAllItems();
var itemCodeReg = RegExp(/^([a-z]{3}[0-9]{3})$/);
var itemId;
var action;
var currentItem;

/* GET home page. */
router.get('/', async function(req, res, next) {

    var theUser = req.session.theUser;
    console.log("Session in-" + JSON.stringify(theUser));
    if (theUser === undefined) {
        // var user = await UserDb.getUserById(req.session.theUser.userId);
        // req.session.theUser = user;
        // //userDB.storeUserInSession(req);
        // //let items=userDB.getUserProfile().getItems();
        // var items = await itemDb.getItemsByUserId(user.userId);
        // console.log("myItems if items************* ", items);
        // var data= {
        //     title:'myItems',
        //     path: req.url,
        //     myItems: items,
        //     user : req.session.theUser
        // }
        // res.render('myItems', { data: data, title: 'Express' });
        res.redirect("/users/login")
    } else {
        let items = await itemDb.getItemsByUserId(theUser.userId);
        console.log("myItems else items************* ", items);
        var data= {
            title:'myItems',
            path: req.url,
            myItems: items,
            user : req.session.theUser
        }
        res.render('myItems', { data: data, title: 'Express' });
        // res.render('myItems', { title: 'My Items', data: items});
    }

   });


//update action
var updateAction = async function (req, res,itemId) {
    var currentItem = await itemDb.getItem(itemId);
    console.log("currentItem ",currentItem)
    if(currentItem.status === 'pending'){
        req.session.swapItem = currentItem;
        var pendingItems=await offerDb.getUserOffers(req.session.theUser.userId);
        res.render('mySwaps', {data: pendingItems});
    }else if(currentItem.status === 'available' || currentItem.status === 'swapped'){
        console.log("currentItems: ", currentItem);
        req.session.userItem = currentItem;
        var data= {
            title:'myItems',
            path: req.url,
            item: currentItem
        }
        res.render('item', {data: data, title:""});
    }
};


//delete action
var deleteAction = function (req, res, itemId) {
    var theUser = req.session.theUser;
        var sessionProfile = userDB.getUserProfile();
        sessionProfile.removeUserItem(itemId);
        req.session.currentProfile = sessionProfile;
        var data= {
            title:'myItems',
            path: req.url,
            myItems: sessionProfile.getItems()
        }
        res.render('myItems', {data: data});
};


router.get('/:action/:itemId', function(req, res, next) {
    action = req.params.action;
    itemId = req.params.itemId;
    if(action){
        switch (action) {
            case 'update':
                //perform update task
                console.log("update------------ " + itemId);
                updateAction(req, res,itemId);
                break;
            case 'accept':
                break;
            case 'reject':
                break
            case 'withdraw':
                break;
            case 'offer':
                break;
            case 'delete':
                deleteAction(req, res,itemId);
                break;
            case 'signout':
                req.session.destroy(function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        res.redirect('/categories');
                    }
                });
                break;
            default:
                var userDb = new UserDb();
                var sessionUser = req.session.theUser;
                var userProfile = userDb.getUserProfile(sessionUser._userId);
                req.session.currentProfile = userProfile;
                res.render('myItems', {userProfile: req.session.currentProfile});
        }
    }
    else{
        var userDb = new UserDb();
        var sessionUser = req.session.theUser;
        var userProfile = userDb.getUserProfile(sessionUser._userId);
        req.session.currentProfile = userProfile;
        var allUserItems = [];
        var userItems = userProfile.userItems;
        for(var i=0;i<items.length;i++){
            if(userItems.includes(items[i].itemCode)){
                allUserItems.push(items[i]);
            }
        } // end of for loop


        var data= {
            title:'myItems',
            path: req.url,
            myItems: allUserItems
        }

        console.log("item data: "+ data.myItems);

        res.render('myItems', { data: data, title: 'Express' });
    }
});

module.exports = router;

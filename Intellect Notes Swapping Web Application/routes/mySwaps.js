var express = require('express');
var router = express.Router();
var UserDb = require('../public/javascripts/UserDb');
var offerDb = require('../public/javascripts/OfferDB');
var itemDb = require('../public/javascripts/itemDB');
const Offer = require('../model/Offer');
var Item = require('../model/items');
const UserOffer = require('../model/userItem');


//var userDB =new UserDb();
/* GET home page. */
router.get('/', async function(req, res, next) {

    if(req.session.theUser){
        data = await offerDb.getUserOffers(req.session.theUser.userId);
        console.log("dataaaaaaaaaa: ",data);
        data.user = req.session.theUser;
    }
    else{
        res.redirect("/users/login")
    }
    res.render('mySwaps', { data:data, title: 'Express', data: data});
});


router.get('/:action/:offerId', async function(req, res, next) {
    var action = req.params.action;
    var offerId = req.params.offerId;

    if(action) {
        switch (action) {
            case 'withdraw':
                let userOffer = [];
                let userItem;
                let offerItem
                var offers =await Offer.findOne({'offerId':offerId});
                console.log("withdraw clicked ",offers);
                    userItem = await itemDb.getItem(offers.userItemCode);
                    offerItem =  await itemDb.getItem(offers.swapItemCode);

                await offers.update({$set:{'status':'withdraw'}});
                await userItem.update({$set:{'status':'available'}});
                await offerItem.update({$set:{'status':'available'}});
                res.redirect('/mySwaps')
                break;
            case 'accept':
                break;
            case 'reject':
                break;
            default:
                res.render('myItems', {userProfile: req.session.currentProfile});
        }
    } else{

    }


});

module.exports = router;

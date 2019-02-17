const Offer = require('../../model/Offer');
const itemDb = require('./ItemDB');
const UserOffer = require('../../model/userItem');
module.exports.getUserOffers = async function (userId) {
    let userOffer = [];
    try {

        var offers =await Offer.find({'status':'pending', $or:[ {'userId':userId}, {'swapUserId':userId} ]});
        for(var i=0;i<offers.length;i++){
            let userItem = await itemDb.getItem(offers[i].userItemCode);
            let offerItem =  await itemDb.getItem(offers[i].swapItemCode);
            userOffer.push(new UserOffer(offers[i].offerId, userItem,offerItem,offers[i].status,offers[i].swapItemRating,offers[i].swapUserRating));
        }
        return userOffer;
        /*
        offers.forEach(async function(offer){
            let userItem = await itemDb.getItem(offer.userItemCode);
            let offerItem =  await itemDb.getItem(offer.swapItemCode);
            userOffer.push(new UserOffer(userItem,offerItem,offer.status,offer.swapItemRating,offer.swapUserRating));
        });
*/

    }catch(e){
        console.log("OfferDb - getAllItems",e);
        throw e;
    }
};
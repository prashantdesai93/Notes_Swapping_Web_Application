var repository = require('../../model/repository');
var Item = require('../../model/items');

// get the data from repository
//var items = repository.item;


module.exports.getAllItems = async function () {
    var items;
    await Item.find()
        .then(function (its) {
            //console.log("<><><><>All items ", its)
            //response.render('show', {student: student});
            items = its;
        });
   return items;
};

module.exports.getItem = async function (itemId) {
    var item;
    await Item.findOne({itemCode:itemId}).then(function(it){
        item = it;
    }).catch(function(e) {
        console.log("ItemDb - getItem",e);
    });
    return item;
};

module.exports.getItems = async function (itemIds) {
    console.log("from DB1, Item code :"+itemIds);
    var items;
    await Item.find({itemCode: { $in : itemIds }}).then(function(its) {
        items=its;
    }).catch(function(e) {
        console.log("ItemDb - getItems",e);
    });
    return items;
};

module.exports.getCategories = async function(){
    var categories;
    await   Item.distinct('catalogCategory').then(function(cats) {
        categories = cats;
    }).catch(function(e) {
        console.log("ItemDb - getCategories",e);
    });
    return categories;
}

module.exports.getItemsByCategoryForUser = async function(categoryName, userId){
    var items;
    await   Item.find({catalogCategory:categoryName, userId: { $ne: userId }}).then(function(its) {
        items = its;
        //console.log("items of single cate ",items);
    }).catch(function(e) {
        console.log("ItemDb - getItemsByCategoryForUser",e);
    });
    return items;
}


module.exports.getItemsByUserId = async function (userId) {
    var items;
    await Item.find({userId:userId}).then(function(uid){
        items = uid;
    }).catch(function(e) {
        console.log("ItemDb - getItemsByUserId",e);
    });
    console.log("<><><><><><><><><>itemDB getItemsByUserId ", items);
    return items;
};

module.exports.getOtherUserItems = async function (userId) {
    return Item.find({userId: { $ne: userId } }).then(function(its){
        return its;
    }).catch(function(e) {
        console.log("ItemDb - getItemsByUserId",e);
    });
};

module.exports.getCategoriesForUser = async function(userId) {
    var categories = await Item.distinct('catalogCategory',{userId: { $ne: userId } });
    return categories;
}

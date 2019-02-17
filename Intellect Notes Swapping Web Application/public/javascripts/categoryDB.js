var itemDb = require('./itemDB');
var categories = [];

module.exports.getCategories = function() {
    // get the category of each item

    var categories = itemDb.getCategories();

    return categories;
};

module.exports.getItems= function(){
    var data = itemDb.getAllItems();
    return data;
};

module.exports.getItem = function (itemCode) {
    return itemDb.getItem(itemCode);
}

module.exports.getItemsByUserId = function (userId) {
    return itemDb.getItemsByUserId(userId);

}

module.exports.getCategoriesForUser = async function(userId) {
    var categories = await itemDb.getCategoriesForUser(userId);
    return categories;
};

module.exports.getOtherUserItems= function(userId){
    return itemDb.getOtherUserItems(userId);
}

module.exports.getItemsByCategoryForUser = function (categoryName, userId) {
    return itemDb.getItemsByCategoryForUser(categoryName, userId);
}
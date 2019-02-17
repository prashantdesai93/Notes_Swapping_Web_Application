var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var itemsSchema = new Schema({
    itemCode: { type: Number, required: true },
    itemName: { type: String, required: true },
    catalogCategory: { type: String, required: true },
    author: String,
    note: String,
    description: { type: String, required: true },
    rating: { type: Number, required: true },
    imgUrl: String,
    userId: {type:Number, required:true},
    usersRating: Number,
    offerBy: Number,
    status: String
});

var items = mongoose.model('items', itemsSchema);
module.exports = items;
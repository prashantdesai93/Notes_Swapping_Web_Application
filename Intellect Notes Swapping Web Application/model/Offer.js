var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var offerSchema = new Schema({
    offerId: {type:Number,required: true},
    userId :{type:Number,required: true},
    userItemCode:{type:Number,required: true},
    swapUserId :{type:Number,required: true},
    swapItemCode:{type:Number,required: true},
    status :{type:String,default:"pending"},
    swapItemRating:{type:Number, min:1,max:5},
    swapUserRating:{type:Number, min:1,max:5}
});

var Offer = mongoose.model('offer',offerSchema);

module.exports = Offer;
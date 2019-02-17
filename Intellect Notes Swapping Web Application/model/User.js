var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

var userSchema = new Schema({
    userId : {type:Number},
    firstName: {type:String,required: true},
    lastName: {type:String,required: true},
    email: {type:String,required: true},
    address1: {type:String,required: true},
    address2: String,
    city: String,
    state: String,
    postCode: Number,
    country: String,
    password: String
});

userSchema.plugin(AutoIncrement, {inc_field: 'userId'});
var User = mongoose.model('User', userSchema);
module.exports = User;

// class User{
//     constructor(user){
//         this.userId = user.userId;
//         this.firstName = user.firstName;
//         this.lastName = user.lastName;
//         this.email = user.email;
//         this.address1 = user.address1;
//         this.address2 = user.address2;
//         this.city = user.city;
//         this.state = user.state;
//         this.postcode = user.postcode;
//         this.country = user.country;
//     }
// }
//
// module.exports = User;
var repository = require('../../model/repository');
var User = require('../../model/User');
var itemDb = require('./ItemDB');
var userData = require('../../model/User');


module.exports.getAllUsers = async function () {
    var allUsers;
    await userData.find()
        .then(function (users) {
            console.log("*****All users ", users)
            //response.render('show', {student: student});
            allUsers = users;
        }). catch(function(e) {
            console.log("UserDb getAllUsers ",e);
    });
    return allUsers;
}
//
// module.exports.getUserById = function (userId) {
//     var user;
//     userData.find({userId:userId}).then(function(uid){
//         user = uid;
//     }).catch(function(e) {
//         console.log("UserDB - getUserById",e);
//     });
//     return user;
// }


module.exports.getUserById =async function (userId) {
    var user;
    await User.findOne({userId:userId}).then(function(u){
        user = u;
        console.log("callback u",u);
    }).catch(function(e) {
        console.log("ItemDb - getItem",e);
    });
    console.log("user milala re", user)
    return user;
}
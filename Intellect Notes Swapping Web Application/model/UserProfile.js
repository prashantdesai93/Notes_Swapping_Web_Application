class UserProfile {

    // constructor
    constructor(userId, userItems){

        this.userId = userId;
        this.userItems = userItems;
    }


    removeUserItem(item){
        for(var i = 0; i< this.userItems.length; i++){
            if(item == this.userItems[i].item.itemCode){
                this.userItems.splice(i,1);
                break;
            }
        }
    }

    getItems(){
        var items=[];
        for(var i=0;i<this.userItems.length;i++){
            items.push(this.userItems[i].item);
        }
        return items;
    }

    emptyProfile(){
        this.userId = null;
        this.userItems = null;
    }



}

module.exports = UserProfile;
class UserItem{

    constructor(offerId, item, swapItem, status,swapItemRating, swapUserRating){
        this.offerId = offerId;
        this.item = item;
        this.swapItem = swapItem;
        this.status = status;
        this.swapItemRating = swapItemRating;
        this.swapUserRating = swapUserRating;
    }
}

module.exports = UserItem;

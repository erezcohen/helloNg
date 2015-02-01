(function (){

    function ListController (ItemsModel) {
        var self = this;

        self.item = {};

        self.items = ItemsModel.items;

        self.addItem = function(item) {
            ItemsModel.addItem(item);
            self.item = {};
        };


        self.removeItem = ItemsModel.removeItem;

        //self.markAsCompleted = function (item) {
        //    ItemsModel.removeItem(item);
        //}

        self.getItemStyle = function (item) {
            return {
                'active': item.selected
            }
        };

        self.toggleDesc = function () {
            self.item.showDesc = !self.item.showDesc;
        }
    }

    angular.module('todolist')
        .controller('ListController', ListController);

}());

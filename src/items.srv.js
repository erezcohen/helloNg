(function (){

    function Items () {
        var self = this;

        self.items = [];



        //////////////////////////////////////////////////////////////
        //var items = [];
        //self.getItems = function($http) {
        //    $http.get('api/items')
        //        .then(function(data) {
        //            items = data;
        //        })
        //};
        ///////////////////////////////////////////////////////////////////


        //self.addItem = function (name) {
        //    self.items.push({
        //        title: name,
        //        selected: false
        //    });
        //
        //    //$scope.$emit('item:added', item)
        //    //$rootScope.$broadcast('item:added')
        //};


        self.addItem = function (item) {
            self.items.push(item);
        };

        self.removeItem = function (item) {
            self.items.splice(self.items.indexOf(item), 1);
        };
    }

    angular.module('todolist')
        .service('ItemsModel', Items);

}());


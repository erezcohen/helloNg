/**
 * Created by user on 01/02/2015.
 */

(function (){

    function Logger ($scope) {

        var self = this;

        self.logs = [];

        $scope.$on('item:added', log);

        function log() {
            self.logs.push(new Date() + 'item added!');
        }
    }

    angular.module('todolist')
        .controller('Logger', Logger);

}());
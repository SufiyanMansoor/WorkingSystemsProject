/**
 * Created by Sufyan on 9/23/2017.
 */
angular.module('starter.controllers', ['ngMaterial','ui.router'])

    .controller('mainmenuCtrl', function ($scope, $timeout, $mdSidenav ) {

        $scope.toggleLeft = buildToggler('left');
        $scope.toggleRight = buildToggler('right');

        function buildToggler(componentId) {
            return function() {
                $mdSidenav(componentId).toggle();
            };
        }
    })
    .controller('uploadproductsCtrl', function ($scope,$mdSidenav ) {

    })
    .controller('newitemsupdateCtrl', function ($scope,$mdSidenav ) {

    })
    .controller('customerordersCtrl', function ($scope,$mdSidenav ) {

    });
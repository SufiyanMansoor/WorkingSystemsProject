/**
 * Created by Sufyan on 9/8/2017.
 */
    // Include app dependency on ngMaterial

angular.module( 'starter', [ 'ngMaterial','ui.router','starter.controllers' ] )

    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('customerorders', {
                url: '/customerorders',
                templateUrl: 'templates/customerorders.html',
                controller: 'customerordersCtrl'
            })
            .state('newitemsupdate', {
                url: '/newitemsupdate',
                templateUrl: 'templates/newitemsupdate.html',
                controller: 'newitemsupdateCtrl'
            })
            .state('uploadproducts', {
                url: '/uploadproducts',
                templateUrl: 'templates/uploadproducts.html',
                controller: 'uploadproductsCtrl'
            })
        $urlRouterProvider.otherwise("/");


    })






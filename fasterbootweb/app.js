/**
 * Created by Sufyan on 9/8/2017.
 */
    // Include app dependency on ngMaterial

angular.module( 'starter', [ 'ui.router','starter.controllers' ] )

    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('mainmenu', {
                url: '/mainmenu',
                templateUrl: 'templates/mainmenu.html',
                controller: 'mainmenuCtrl'
            })
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
        $urlRouterProvider.otherwise("/mainmenu");


    })






// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers'])
  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('intro', {
        url: '/intro',
        templateUrl: 'templates/intro.html',
        controller: 'IntroCtrl'
      })
      .state('main', {
        url: '/main',
        templateUrl: 'templates/main.html',
        controller: 'MainCtrl'
      })

      .state('signup', {
        url: '/signup',
        templateUrl: 'templates/signup.html',
        controller: 'SignupCtrl'
      })
      /*MENU ITEMS ROUTING*/
      .state('DEALS', {
        url: '/DEALS',
        templateUrl: 'templates/DEALS.html',
        controller: 'DEALSCtrl'
      })
      .state('SMARTWATCHES', {
        url: '/SMARTWATCHES',
        templateUrl: 'templates/SMARTWATCHES.html',
        controller: 'SMARTWATCHESCtrl'
      })
      .state('POWERBANK', {
        url: '/POWERBANK',
        templateUrl: 'templates/POWERBANK.html',
        controller: 'POWERBANKCtrl'
      })
      .state('MEMORYCARD', {
        url: '/MEMORYCARD',
        templateUrl: 'templates/MEMORYCARD.html',
        controller: 'MEMORYCARDCtrl'
      })
      .state('CHARGER', {
        url: '/CHARGER',
        templateUrl: 'templates/CHARGER.html',
        controller: 'CHARGERCtrl'
      })
      .state('CABLESYNC', {
        url: '/CABLESYNC',
        templateUrl: 'templates/CABLESYNC.html',
        controller: 'CABLESYNCCtrl'
      })
      .state('USBFLASHDRIVE', {
        url: '/USBFLASHDRIVE',
        templateUrl: 'templates/USBFLASHDRIVE.html',
        controller: 'USBFLASHDRIVECtrl'
      })
      .state('HANDSFREEHEADPHONES', {
        url: '/HANDSFREEHEADPHONES',
        templateUrl: 'templates/BLUETOOTHHEADPHONE.html',
        controller: 'HANDSFREEHEADPHONESCtrl'
      })
      .state('VIRTUALREALITY', {
        url: '/VIRTUALREALITY',
        templateUrl: 'templates/VIRTUALREALITY.html',
        controller: 'VIRTUALREALITYCtrl'
      })
      .state('BLUETOOTHHANDSFREE', {
        url: '/BLUETOOTHHANDSFREE',
        templateUrl: 'templates/BLUETOOTHHANDSFREE.html',
        controller: 'BLUETOOTHHANDSFREECtrl'
      })
      .state('WIRELESSCHARGER', {
        url: '/WIRELESSCHARGER',
        templateUrl: 'templates/WIRELESSCHARGER.html',
        controller: 'WIRELESSCHARGERCtrl'
      })
      .state('BLUETOOTHSPEAKER', {
        url: '/BLUETOOTHSPEAKER',
        templateUrl: 'templates/BLUETOOTHSPEAKER.html',
        controller: 'BLUETOOTHSPEAKERCtrl'
      })
      .state('BLUETOOTHHEADPHONE', {
        url: '/BLUETOOTHHEADPHONE',
        templateUrl: 'templates/BLUETOOTHHEADPHONE.html',
        controller: 'BLUETOOTHHEADPHONECTRL'
      })
      .state('SPECIAL', {
        url: '/SPECIAL',
        templateUrl: 'templates/SPECIAL.html',
        controller: 'SPECIALCtrl'
      })
      /* MENU ITEMS ROUTING END*/
      .state('app', {
        url: '/app',
        templateUrl: 'templates/home.html',
        controller: 'AppCtrl'
      })
      .state('app.home2', {
        url: '/home2',
        views: {
          'menuContent': {
            templateUrl: 'templates/home2.html'
          }
        }
      })
      .state('app.ITEMCATEGORIES', {
        url: '/ITEMCATEGORIES',
        views: {
          'menuContent': {
            templateUrl: 'templates/ITEMCATEGORIES.html'
          }
        }
      })

      .state('app.NEWITEMUPDATE', {
        url: '/NEWITEMUPDATE',
        views: {
          'menuContent': {
            templateUrl: 'templates/NEWITEMUPDATE.html',
            controller: 'NEWITEMUPDATECtrl'
          }
        }
      })
      .state('app.ABOUTFASTER', {
        url: '/ABOUTFASTER',
        views: {
          'menuContent': {
            templateUrl: 'templates/ABOUTFASTER.html',
            controller: 'ABOUTFASTERCtrl'
          }
        }
      })
      .state('app.CONTACT', {
        url: '/CONTACT',
        views: {
          'menuContent': {
            templateUrl: 'templates/CONTACT.html',
            controller: 'CONTACTCtrl'
          }
        }
      })



    $urlRouterProvider.otherwise("/intro");

  })

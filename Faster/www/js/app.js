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
        templateUrl: 'templates/HANDSFREEANDHEADPHONE.html',
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
      .state('app.SHOPPINGCART', {
        url: '/SHOPPINGCART',
        views: {
          'menuContent': {
            templateUrl: 'templates/SHOPPINGCART.html',
            controller: 'SHOPPINGCARTCtrl'
          }
        }
      })
      /*Power Bank UnderRoot Start*/
      .state('ADATAPOWERBANK', {
        url: '/ADATAPOWERBANK',
        templateUrl: 'templates/ADATAPOWERBANK.html',
        controller: 'ADATAPOWERBANKCtrl'
      })
      .state('FASTERPOWERBANK', {
        url: '/FASTERPOWERBANK',
        templateUrl: 'templates/FASTERPOWERBANK.html',
        controller: 'FASTERPOWERBANKCtrl'
      })
      .state('REMAXPOWERBANK', {
        url: '/REMAXPOWERBANK',
        templateUrl: 'templates/REMAXPOWERBANK.html',
        controller: 'REMAXPOWERBANKCtrl'
      })
      .state('ROMOSSPOWERBANK', {
        url: '/ROMOSSPOWERBANK',
        templateUrl: 'templates/ROMOSSPOWERBANK.html',
        controller: 'ROMOSSPOWERBANKCtrl'
      })
      .state('XIAOMIPOWERBANK', {
        url: '/XIAOMIPOWERBANK',
        templateUrl: 'templates/XIAOMIPOWERBANK.html',
        controller: 'XIAOMIPOWERBANKCtrl'
      })
    /*Memory Card Under Root Start*/
      .state('FASTERMEMORYCARD', {
        url: '/FASTERMEMORYCARD',
        templateUrl: 'templates/FASTERMEMORYCARD.html',
        controller: 'FASTERMEMORYCARDCtrl'
      })
      .state('KINGSTONMEMORYCARD', {
        url: '/KINGSTONMEMORYCARD',
        templateUrl: 'templates/KINGSTONMEMORYCARD.html',
        controller: 'KINGSTONMEMORYCARDCtrl'
      })
    /*Charger Controller Start*/
      .state('CARCHARGER', {
        url: '/CARCHARGER',
        templateUrl: 'templates/CARCHARGER.html',
        controller: 'CARCHARGERCtrl'
      })
      .state('HOMECHARGER', {
        url: '/HOMECHARGER',
        templateUrl: 'templates/HOMECHARGER.html',
        controller: 'HOMECHARGERCtrl'
      })
      .state('SOCKET', {
        url: '/SOCKET',
        templateUrl: 'templates/SOCKET.html',
        controller: 'SOCKETCtrl'
      })
    /*Cable sync under root start */
      .state('ADATAFLASHDRIVE', {
        url: '/ADATAFLASHDRIVE',
        templateUrl: 'templates/ADATAFLASHDRIVE.html',
        controller: 'ADATAFLASHDRIVECtrl'
      })
      .state('FASTERFLASHDRIVE', {
        url: '/FASTERFLASHDRIVE',
        templateUrl: 'templates/FASTERFLASHDRIVE.html',
        controller: 'FASTERFLASHDRIVECtrl'
      })
      .state('KINGSTONFLASHDRIVE', {
        url: '/KINGSTONFLASHDRIVE',
        templateUrl: 'templates/KINGSTONFLASHDRIVE.html',
        controller: 'KINGSTONFLASHDRIVECtrl'
      })
      .state('SANDISKFLASHDRIVE', {
        url: '/SANDISKFLASHDRIVE',
        templateUrl: 'templates/SANDISKFLASHDRIVE.html',
        controller: 'SANDISKFLASHDRIVECtrl'
      })
      /*blue Tooth Head Phone*/
      .state('FASTERHEADPHONE', {
        url: '/FASTERHEADPHONE',
        templateUrl: 'templates/FASTERHEADPHONE.html',
        controller: 'FASTERHEADPHONECtrl'
      })
      .state('WUWBLUETOOTHHEADPHONE', {
        url: '/WUWBLUETOOTHHEADPHONE',
        templateUrl: 'templates/WUWBLUETOOTHHEADPHONE.html',
        controller: 'WUWBLUETOOTHHEADPHONECtrl'
      })
      /*Virtual Box Controller*/
      .state('VRBOX', {
        url: '/VRBOX',
        templateUrl: 'templates/VRBOX.html',
        controller: 'VRBOXCtrl'
      })
      /*Bluetooth Hands Free */
      .state('FASTERBLUETOOTHHANDSFREE', {
        url: '/FASTERBLUETOOTHHANDSFREE',
        templateUrl: 'templates/FASTERBLUETOOTHHANDSFREE.html',
        controller: 'FASTERBLUETOOTHHANDSFREECtrl'
      })
      .state('REMAXBLUETOOTHHANDSFREE', {
        url: '/REMAXBLUETOOTHHANDSFREE',
        templateUrl: 'templates/REMAXBLUETOOTHHANDSFREE.html',
        controller: 'REMAXBLUETOOTHHANDSFREECtrl'
      })
      .state('ROMANBLUETOOTHHANDSFREE', {
        url: '/ROMANBLUETOOTHHANDSFREE',
        templateUrl: 'templates/ROMANBLUETOOTHHANDSFREE.html',
        controller: 'ROMANBLUETOOTHHANDSFREECtrl'
      })
    /*Bluetooth Hands Free */
      .state('FASTERBLUETOOTHSPEAKER', {
        url: '/FASTERBLUETOOTHSPEAKER',
        templateUrl: 'templates/FASTERBLUETOOTHSPEAKER.html',
        controller: 'FASTERBLUETOOTHSPEAKERCtrl'
      })
      .state('REMAXBLUETOOTHSPEAKER', {
        url: '/REMAXBLUETOOTHSPEAKER',
        templateUrl: 'templates/REMAXBLUETOOTHSPEAKER.html',
        controller: 'REMAXBLUETOOTHSPEAKERCtrl'
      })
      /*HANDS FREE AND HEAD PHONE CONTROLLER*/
      .state('FASTERHANDSFREEANDHEADPHONE', {
        url: '/FASTERHANDSFREEANDHEADPHONE',
        templateUrl: 'templates/FASTERHANDSFREEANDHEADPHONE.html',
        controller: 'FASTERHANDSFREEANDHEADPHONECtrl'
      })
      .state('REMAXHANDSFREEANDHEADPHONE', {
        url: '/REMAXHANDSFREEANDHEADPHONE',
        templateUrl: 'templates/REMAXHANDSFREEANDHEADPHONE.html',
        controller: 'REMAXHANDSFREEANDHEADPHONECtrl'
      })
     /* Special Roots Setting*/
      .state('BASEUS', {
        url: '/BASEUS',
        templateUrl: 'templates/BASEUS.html',
        controller: 'BASEUSCtrl'
      })
      .state('BLUETOOTH', {
        url: '/BLUETOOTH',
        templateUrl: 'templates/BLUETOOTH.html',
        controller: 'BLUETOOTHCtrl'
      })
      .state('CARDREADER', {
        url: '/CARDREADER',
        templateUrl: 'templates/CARDREADER.html',
        controller: 'CARDREADERCtrl'
      })
      .state('CHROMECAST', {
        url: '/CHROMECAST',
        templateUrl: 'templates/CHROMECAST.html',
        controller: 'CHROMECASTCtrl'
      })
      .state('MI', {
        url: '/MI',
        templateUrl: 'templates/MI.html',
        controller: 'MICtrl'
      })
      .state('TVBOX', {
        url: '/TVBOX',
        templateUrl: 'templates/TVBOX.html',
        controller: 'TVBOXCtrl'
      })
      .state('FASTER', {
        url: '/FASTER',
        templateUrl: 'templates/FASTER.html',
        controller: 'FASTERCtrl'
      })
      .state('REMAX', {
        url: '/REMAX',
        templateUrl: 'templates/REMAX.html',
        controller: 'REMAXCtrl'
      })
      .state('ROMAN', {
        url: '/ROMAN',
        templateUrl: 'templates/ROMAN.html',
        controller: 'ROMANCtrl'
      })
      .state('UNIC', {
        url: '/UNIC',
        templateUrl: 'templates/UNIC.html',
        controller: 'UNICCtrl'
      })
      .state('WIRELESSKEYBOARD', {
        url: '/WIRELESSKEYBOARD',
        templateUrl: 'templates/WIRELESSKEYBOARD.html',
        controller: 'WIRELESSKEYBOARDCtrl'
      })
    $urlRouterProvider.otherwise("/intro");

  })

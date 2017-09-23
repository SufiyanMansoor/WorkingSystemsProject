/**
 * Created by Sufyan on 9/6/2017.
 */
angular.module('starter.controllers', [])
  .controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate) {

    // Called to navigate to the main app
    $scope.startApp = function() {
      $state.go('main');
    };
    $scope.next = function() {
      $ionicSlideBoxDelegate.next();
    };
    $scope.previous = function() {
      $ionicSlideBoxDelegate.previous();
    };

    // Called each time the slide changes
    $scope.slideChanged = function(index) {
      $scope.slideIndex = index;
    };
  })

  .controller('MainCtrl', function($scope, $state) {
    console.log('MainCtrl');

    $scope.toIntro = function(){
      $state.go('intro');
    }
  })
  .controller('SignupCtrl', function($scope, $state) {

  })
  .controller('SHOPPINGCARTCtrl', function($scope, $state) {

  })
  .controller('DEALSCtrl', function($scope, $state) {

  })
  .controller('SMARTWATCHESCtrl', function($scope, $state) {

  })
  .controller('POWERBANKCtrl', function($scope, $state) {

  })
  .controller('MEMORYCARDCtrl', function($scope, $state) {

  })
  .controller('CHARGERCtrl', function($scope, $state) {

  })
  .controller('CABLESYNCCtrl', function($scope, $state) {

  })
  .controller('USBFLASHDRIVECtrl', function($scope, $state) {

  })
  .controller('HANDSFREEHEADPHONESCtrl', function($scope, $state) {

  })
  .controller('VIRTUALREALITYCtrl', function($scope, $state) {

  })
  .controller('BLUETOOTHHANDSFREECtrl', function($scope, $state) {

  })
  .controller('WIRELESSCHARGERCtrl', function($scope, $state) {

  })
  .controller('BLUETOOTHSPEAKERCtrl', function($scope, $state) {

  })
  .controller('BLUETOOTHHEADPHONECTRL', function($scope, $state) {

  })
  .controller('SPECIALCtrl', function($scope, $state) {

  })
/*tabs connect control section*/
  .controller('AppCtrl', function($scope, $state) {

  })
  .controller('home2Ctrl', function($scope, $state) {

  })
  .controller('ITEMCATEGORIESCtrl', function($scope, $state) {

  })
  .controller('NEWITEMUPDATECtrl', function($scope, $state) {

  })
  .controller('ABOUTFASTERCtrl', function($scope, $state) {

  })
  .controller('CONTACTCtrl', function($scope, $state) {

  })
  /*POWER BANK CONTROLLER START*/
  .controller('ADATAPOWERBANKCtrl', function($scope, $state) {

  })
  .controller('FASTERPOWERBANKCtrl', function($scope, $state) {

  })
  .controller('REMAXPOWERBANKCtrl', function($scope, $state) {

  })
  .controller('ROMOSSPOWERBANKCtrl', function($scope, $state) {

  })
  .controller('XIAOMIPOWERBANKCtrl', function($scope, $state) {

  })
  /*Memory Card Controller Start*/
  .controller('FASTERMEMORYCARDCtrl', function($scope, $state) {

  })
  .controller('KINGSTONMEMORYCARDCtrl', function($scope, $state) {

  })
  /*Charger Controller Start*/
  .controller('CARCHARGERCtrl', function($scope, $state) {

  })
  .controller('HOMECHARGERCtrl', function($scope, $state) {

  })
  .controller('SOCKETCtrl', function($scope, $state) {

  })
 /*Cable $ Sync Controller*/
  .controller('BASEUSCABLESYNCCtrl', function($scope, $state) {

  })
  .controller('BOBINECABLESYNCCtrl', function($scope, $state) {

  })
  .controller('FASTERSYNCCABLECtrl', function($scope, $state) {

  })
  .controller('REMAXSYNCCABLECtrl', function($scope, $state) {

  })
/* Usb Flash Drive Controller*/
  .controller('ADATAFLASHDRIVECtrl', function($scope, $state) {

  })
  .controller('FASTERFLASHDRIVECtrl', function($scope, $state) {

  })
  .controller('KINGSTONFLASHDRIVECtrl', function($scope, $state) {

  })
  .controller('SANDISKFLASHDRIVECtrl', function($scope, $state) {

  })
/* Bluetooth HeadPhone */
  .controller('FASTERHEADPHONECtrl', function($scope, $state) {

  })
  .controller('WUWBLUETOOTHHEADPHONECtrl', function($scope, $state) {

  })
/*VRBOX Controller*/
  .controller('VRBOXCtrl', function($scope, $state) {

  })
/*Blue Tooth Hands Free Controller*/
  .controller('FASTERBLUETOOTHHANDSFREECtrl', function($scope, $state) {

  })
  .controller('REMAXBLUETOOTHHANDSFREECtrl', function($scope, $state) {

  })
  .controller('ROMANBLUETOOTHHANDSFREECtrl', function($scope, $state) {

  })
  /*Blue Tooth Speaker Controller*/
  .controller('FASTERBLUETOOTHSPEAKERCtrl', function($scope, $state) {

  })
  .controller('REMAXBLUETOOTHSPEAKERCtrl', function($scope, $state) {

  })
  /*HANDS FREE AND HEAD PHONE  Controller*/
  .controller('FASTERHANDSFREEANDHEADPHONECtrl', function($scope, $state) {

  })
  .controller('REMAXHANDSFREEANDHEADPHONECtrl', function($scope, $state) {

  })
  /*Special Fields Controller*/
  .controller('BASEUSCtrl', function($scope, $state) {

  })
  .controller('BLUETOOTHCtrl', function($scope, $state) {

  })
  .controller('CARDREADERCtrl', function($scope, $state) {

  })
  .controller('CHROMECASTCtrl', function($scope, $state) {

  })
  .controller('MICtrl', function($scope, $state) {

  })
  .controller('TVBOXCtrl', function($scope, $state) {

  })
  .controller('FASTERCtrl', function($scope, $state) {

  })
  .controller('REMAXCtrl', function($scope, $state) {

  })
  .controller('ROMANCtrl', function($scope, $state) {

  })
  .controller('UNICCtrl', function($scope, $state) {

  })
  .controller('WIRELESSKEYBOARDCtrl', function($scope, $state) {

  })

;

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
;

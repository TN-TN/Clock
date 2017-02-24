// Client
const app = angular.module('ClockApp', ['ngMaterial']);
app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('clock-dark', 'default')
        .primaryPalette('grey')
        .warnPalette('red')
        .accentPalette('blue')
        .dark();

    $mdThemingProvider.theme('clock', 'default')
        .primaryPalette('grey')
        .warnPalette('red')
        .accentPalette('blue');
});

app.controller('ClockController', ($scope) => {
    $scope.safeApply = function (fn) {
        const phase = this.$root.$$phase;
        if (phase == '$apply' || phase == '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

    $scope.theme = "clock";

    $scope.onThemeChange = function (Dark) {
        if (Dark) {
            $scope.theme = "clock-dark";
        } else {
            $scope.theme = "clock";
        }
    };

    //Bottom Tollbar Stuff
    $scope.isOpen = false;
    $scope.bottomToolbar = {
        isOpen: false,
        count: 0,
        selectedDirection: 'left'

    }

});
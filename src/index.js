// Client
const app = angular.module('ClockApp', ['ngMaterial', 'ui.router']);
app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('clock-dark', 'default')
        .primaryPalette('grey')
        .warnPalette('red')
        .accentPalette('blue')
        .dark();

    $mdThemingProvider.theme('clock-light', 'default')
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

    $scope.theme = "clock-light";

    $scope.onThemeChange = function (Dark) {
        if (Dark) {
            $scope.theme = "clock-dark";
            $scope.othertheme = 'Hell'
        } else {
            $scope.theme = "clock-light";
            $scope.othertheme = 'Dunkel'
        }
    };
});


app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/clock');

    $stateProvider

        .state('clock', {
            url: '/clock',
            templateUrl: 'pages/clock.html',
            controller: function ($scope) {
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

                function update() {
                    var currentTime = new Date();
                    var currentHours = currentTime.getHours();
                    var currentMinutes = currentTime.getMinutes();
                    var currentSeconds = currentTime.getSeconds();
                    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
                    currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
                    currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
                    currentHours = ( currentHours == 0 ) ? 12 : currentHours;
                    var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;
                    console.log(currentTimeString);
                }

                update();

                console.log('clock')
            }
        })

        .state('stopwatch', {
            url: '/stopwatch',
            templateUrl: 'pages/stopwatch.html',
            controller: function ($scope) {
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
                console.log('stopwatch')
            }
        })

        .state('countdown', {
            url: '/countdown',
            templateUrl: 'pages/countdown.html',
            controller: function ($scope) {
                console.log('countdown')
            }
        });

});

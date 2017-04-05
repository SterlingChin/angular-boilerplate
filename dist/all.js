'use strict';

angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home/home.html'
    }).state('page2', {
        url: '/page2',
        templateUrl: './views/page2/page2.html'
    }).state('page3', {
        url: '/page3',
        templateUrl: './views/page3/page3.html'
    });
    //testing
});
'use strict';

angular.module('app').controller('mainCtrl', function ($scope, mainSvc) {
    $scope.test = 'controller is working';
    $scope.test1 = mainSvc.test1;
});
'use strict';

angular.module('app').directive('mainDirective', function () {
    return {
        restrict: 'E',
        template: '<p>This is the directive</p>'
    };
});
'use strict';

angular.module('app').directive('navbar', function () {
    return {
        restrict: 'E',
        templateUrl: './views/navbar/navbar.html'
    };
});
'use strict';

angular.module('app').service('mainSvc', function ($http) {
    this.test1 = 'service is working';
});
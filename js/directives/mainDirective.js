angular.module('app').directive('mainDirective', function(){
    return {
        restrict: 'E',
        template: '<p>This is the directive</p>'
    }
})
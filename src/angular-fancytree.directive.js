(function () {
    'use strict';

    angular
        .module('angular-fancytree')
        .directive('fancytree', fancytree);

    fancytree.$inject = [];

    /* @ngInject */
    function fancytree() {
        var directive = {
            bindToController: true,
            controller: "FancyTreeController",
            controllerAs: 'vm',
            template: '<div id="fancytree"></div>',
            restrict: 'EA',
            scope: {
                array: '=array'
            }
        };
        return directive;
    }
})();


(function () {
    'use strict';

    angular
        .module('angular-fancytree')
        .controller('FancyTreeController', FancyTreeController);

    FancyTreeController.$inject = ['fancytreeFactory'];

    /* @ngInject */
    function FancyTreeController(fancytreeFactory) {
                $('#fancytree').fancytree({
                    source: fancytreeFactory.getData(),
                    checkbox: true,
                    icon: true
                });
    }
})();


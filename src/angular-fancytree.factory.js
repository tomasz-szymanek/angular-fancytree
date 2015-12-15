(function () {
    'use strict';

    angular
        .module('angular-fancytree')
        .factory('fancytreeFactory', fancytreeFactory);

    fancytreeFactory.$inject = [];

    /* @ngInject */
    function fancytreeFactory() {
        var service = {
            setData: setData,
            getData: getData
        };
        return service;

        this.data = undefined;

        function setData(data) {
            this.data = data;
        }

        function getData() {
            return this.data;
        }
    }

})();


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
            getData: getData,
            setMethods: setMethods,
            getMethods: getMethods,
            data: new Object(),
            methods: new Object()
        };
        return service;

        function setData(data, name) {
            this.data[name] = data;
        }

        function getData(name) {
            return this.data[name];
        }

        function setMethods(methods, name) {
            this.methods[name] = methods;
        }

        function getMethods(name) {
            return this.methods[name];
        }

    }

})();
(function () {
    'use strict';

    angular
        .module('angular-fancytree')
        .controller('ExampleController', ExampleController);

    ExampleController.$inject = ['fancytreeFactory'];

    /* @ngInject */
    function ExampleController(fancytreeFactory) {

        // Passing fancytree options
        // second arg is fancytree's element id
        fancytreeFactory.setData([
            {title: "Node 1", key: "1"},
            {title: "Folder 2", key: "2", folder: true, children: [
                {title: "Node 2.1", key: "3", myOwnAttr: "abc"},
                {title: "Node 2.2", key: "4"}
            ]}
        ], 'exampleFancytree');

        // Passing json with data: "function_name" : callback
        // second arg is fancytree's element id
        fancytreeFactory.setMethods({
            "select": function (event, data) {
                var ExampleService = $injector.get('ExampleService');
                var node = data.node;

                if (node.isSelected()) {
                    ExampleService.doSomething(node.title);
                } else {
                    ExampleService.doSomethingElse(node.title);
                }
            }
        }, 'exampleFancytree');
    }

})();


# angular-fancytree
Simple angular directive for quick fancytree inclusion

# HOWTO

download it:
```
bower install --save angular-fancytree
```
OR
```
npm install --save angular-fancytree
```

include it:
```
<script src="bower_components/angular-fancytree/dist/angular-fancytree.min.js"></script>
```
OR
```
<script src="node_modules/angular-fancytree/dist/angular-fancytree.min.js"></script>
```
add depedency to your app:
```
(function() {
    'use strict';

    angular
        .module('exampleApp', [
            'angular-fancytree'
        ]);
})();
```


include dependencies:
```
<script src="bower_components/angular/angular.min.js"></script>
<script src="bower_components/jquery/dist/jquery.min.js"></script>
<script src="bower_components/jquery-ui/jquery-ui.min.js"></script>
<script src="bower_components/jquery.fancytree/dist/jquery.fancytree.min.js"></script>
<!-- your fav theme: -->
<link rel="stylesheet" href="bower_components/jquery.fancytree/dist/skin-bootstrap-n/ui.fancytree.min.css">
```

use it:
* in your controller (inject fancytreeFactory and set Your data):
```
(function () {
    'use strict';

    angular
        .module('yourModule')
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
                // You should inject required services like that
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
```

* in your template (all attributes should be in lowercase
f.e. instead of debugLevel it should be debuglevel):
```
<fancytree disabled="false" checkbox="true" debuglevel="0"></fancytree>
```

I will be working on it, I promise!

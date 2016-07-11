# angular-fancytree
Simple angular directive for quick fancytree inclusion

# HOWTO

download it:
```bash
bower install --save angular-fancytree
```
OR
```bash
npm install --save angular-fancytree
```

include it:
```html
<script src="bower_components/angular-fancytree/dist/angular-fancytree.min.js"></script>
```
OR
```html
<script src="node_modules/angular-fancytree/dist/angular-fancytree.min.js"></script>
```
add depedency to your app:
```javascript
(function() {
    'use strict';

    angular
        .module('exampleApp', [
            'angular-fancytree'
        ]);
})();
```


include dependencies:
```html
<script src="angular.min.js"></script>
<script src="jquery.min.js"></script>
<script src="jquery-ui.min.js"></script>
<script src="jquery.fancytree.min.js"></script>
<!-- your fav theme: -->
<link rel="stylesheet" href="jquery.fancytree/dist/skin-bootstrap-n/ui.fancytree.min.css">
```

use it:
* in your controller or service (inject fancytreeFactory and set Your data):
```javascript
angular
	.module('yourModule')
	.controller('ExampleController', ['fancytreeFactory', function (fancytreeFactory) {

		// Passing fancytree options
		// second arg is fancytree's element id
		fancytreeFactory.setData([
			{title: "Node 1", key: "1"},
			{
				title: "Folder 2", key: "2", folder: true, children: [
				{title: "Node 2.1", key: "3", myOwnAttr: "abc"},
				{title: "Node 2.2", key: "4"}
			]
			}
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
	}]);

```

* in your template (all attributes should be in lowercase
f.e. instead of debugLevel it should be debuglevel):
```html
<fancytree id="exampleFancytree" disabled="false" checkbox="true" debuglevel="0"></fancytree>
```

I will be working on it, I promise!

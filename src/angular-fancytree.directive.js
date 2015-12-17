(function () {
    'use strict';

    angular
        .module('angular-fancytree')
        .directive('fancytree', fancytree);

    fancytree.$inject = ['$timeout', 'fancytreeFactory'];

    /* @ngInject */
    function fancytree($timeout, fancytreeFactory) {
        var directive = {
            template: '<div id="{{ id }}"></div>',
            restrict: 'EAC',
            scope: {
                data: "=",
                id: "@",
                activevisible: "@",
                aria: "@",
                autovctivate: "@",
                autovollapse: "@",
                autoscroll: "@",
                clickfoldermode: "@",
                checkbox: "@",
                debuglevel: "@",
                disabled: "@",
                focusonselect: "@",
                generateids: "@",
                idprefix: "@",
                icon: "@",
                keyboard: "@",
                keypathseparator: "@",
                minexpandlevel: "@",
                quicksearch: "@",
                selectmode: "@",
                tabbable: "@",
                titlestabbable: "@"
            },
            link: function(scope, element, attrs) {
                var initializeFancytree = function () {
                    return $timeout(function () {
                        var fancytree = $('#' + scope.id);
                        fancytree.fancytree({
                            source: fancytreeFactory.getData(),
                            activeVisible: scope.activevisible === 'true',
                            aria: scope.aria !== 'false',
                            autoActivate: scope.autoactivate === 'true',
                            autoCollapse: scope.autocollapse !== 'false',
                            autoScroll: scope.autoscroll !== 'false',
                            clickFolderMode: scope.clickfoldermode != null ? parseInt(scope.clickFolderMode) : 4,
                            checkbox: scope.checkbox !== 'false',
                            debugLevel: scope.debuglevel != null ? parseInt(scope.debugLevel) : 2,
                            disabled: scope.disabled !== 'false',
                            focusOnSelect: scope.focusonselect !== 'false',
                            generateIds: scope.generateids !== 'false',
                            idPrefix: scope.idprefix || "ft_",
                            icon: scope.icon === 'true',
                            keyboard: scope.keyboard === 'true',
                            keyPathSeparator: scope.keypathseparator || "/",
                            minExpandLevel: scope.minexpandlevel != null ? parseInt(scope.minExpandLevel) : 1,
                            quicksearch: scope.quicksearch !== 'false',
                            selectMode: scope.selectmode != null ? parseInt(scope.selectMode) : 2,
                            tabbable: scope.tabbable === 'true',
                            titlesTabbable: scope.titlestabbable !== 'false'
                        });
                    });
                };
                initializeFancytree();
            }
        };
        return directive;
    }
})();


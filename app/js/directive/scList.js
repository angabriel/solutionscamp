angular.module('scList', []).
    directive('scList', function() {
        return {
            restrict: 'E',
            scope: { options : '=' },

            template:
                '<input class="pull-right" ng-model="searchText" placeholder="Search list"/><br/><br/>' +
                    '<ul class="list-group">' +
                    '<li class="list-group-item">' +
                    '<input type="text" ng-model="newItemName"/>' +
                    '<button ng-disabled="!newItemName" class="btn btn-success btn-xs pull-right" ng-click="addItem()">+</button>' +
                    '</li>' +
                    '<li ng-repeat="item in options.dataProvider | filter:searchText" ng-click="selectItem( item )" class="list-group-item" ng-style="getItemStyle( item )">' +
                    '<span>{{ item[options.labelField] }}</span>' +
                    '<button class="btn btn-danger btn-xs pull-right" ng-click="options.deleteItem( item )">X</button>' +
                    '</li>' +
                    '</ul>',

            link: function (scope, element, attrs) {

                var SELECTED_STYLE = { color : '#ffffff', backgroundColor : '#000000' };

                scope.addItem = function() {
                    scope.options.addItem(scope.newItemName);
                    scope.newItemName = undefined;
                }

                scope.selectItem = function(item) {
                    scope.options.selectedItem = item;
                    if (scope.options.selectItem)
                        scope.options.selectItem(item);
                }

                scope.getItemStyle = function(item) {
                    return item === scope.options.selectedItem ? SELECTED_STYLE : undefined;
                }

            }

        };
    });
function DrinkController($scope, Drink) {

    var deleteItem = function(item) {
        item.$remove(function() {
            var options = $scope.drinkOptions;
            // removed from db, now remove from list
            var itemIndex = options.dataProvider.indexOf(item);
            options.dataProvider.splice(itemIndex,1);
            if (item === options.selectedItem) {
                options.selectedItem = undefined;
                $scope.editingItem = undefined;
            }
        });
    }

    var addItem = function(itemName) {
        var newItem = new Drink( { still : false, name : itemName } );
        var options = $scope.drinkOptions;
        newItem.$save(function(result) {
            options.dataProvider.push( result );
            options.selectedItem = result;
            editItem(result);
        });

    }

    var editItem = function(item) {
        $scope.editingItem = new Drink(item);
    }

    $scope.save = function() {
        $scope.editingItem.update(function(result) {
            var options = $scope.drinkOptions;
            var itemIndex = options.dataProvider.indexOf(options.selectedItem);
            options.dataProvider[itemIndex] = result;
            options.selectedItem = result;
            editItem(result);
        });
    }

    $scope.revert = function() {
        editItem($scope.drinkOptions.selectedItem);
    }

    $scope.isClean = function() {
        return angular.equals($scope.editingItem, $scope.drinkOptions.selectedItem);
    }

    $scope.drinkOptions = {
        dataProvider : Drink.query(),
        labelField : 'name',
        deleteItem : deleteItem,
        selectItem : editItem,
        addItem : addItem
    };

}
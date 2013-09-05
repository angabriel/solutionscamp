angular.module('drinkService', ['ngResource']).factory('Drink', function ($resource) {

        var Drink = $resource('https://api.mongolab.com/api/1/databases/drinks/collections/drinks/:id',
            { apiKey:'NPHyDSPGv04cRJM3AN08eBcx4QpRTiii', id:'@_id.$oid' }, {
                update:{ method:'PUT' }
            }
        );

        Drink.prototype.update = function (cb, errorcb) {
            return Drink.update( {id:this._id.$oid},
                                 angular.extend( {}, this, {_id:undefined} ),
                                 cb, errorcb);
        };

        return Drink;
});
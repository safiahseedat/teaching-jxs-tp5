var pokeApp = angular.module('pokedex', ['ngResource']);



// With this you can inject POKEAPI url wherever you want
pokeApp.constant('POKEAPI', 'http://pokeapi.co');

pokeApp.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);
pokeApp.controller('PokeControlleur',function data ($scope){
    $scope.pokelist = [
        {id : 0, name : "pikachu" },
        {id : 1, name : "salameche"},
        {id : 2, name : "bulbizar"}
    ]
});





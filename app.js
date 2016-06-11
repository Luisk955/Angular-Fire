angular.module('videoGames', ['videoGames.controllers','videoGames.services','ngRoute','firebase'])
.value('fbRef','https://practicas-pi.firebaseio.com/');

.config(function($routeProvider){
	var resolveGames ={
		games: function(Games){
			return Games.fetch();
		};
	};

	$routeProvider
		.when('/', {
			controller:'gameListController as gameList',
			templateUrl: 'views/list.html',
			resolve: resolveGames
		})

		.when('/games', {
			controller: 'editGameController as editGame',
			templateUrl: 'views/games.html'.
			resolve: resolveGames
		})
		.when('/details', {
			controller: 'newGameController as editGame',
			templateUrl: 'views/details.html',
			resolve: resolveGames
		})		
		.otherwise({
			redirectTo: '/'
		});

});
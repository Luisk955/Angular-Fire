angular.module('videoGames.controllers', [])

.controller('gameListController', function(games){
	var gameList = this;

	gameList.games = games;
});

.controller('newGameController', function($location, games){
	var newGameList = this;

	newGameList.save = function(){
		games.$add(newGame.game) then(function(data){
			$location.path('/');
		});
	};
});

.controller('editGameController',function($location, $routeParams,games){
	var editGame = this;
	var gameid = $routeParams.gameid,
		gameIndex ;

	editGame.games = games;
	gameIndex = editGame.games.$indexFor(gameid);
	editGame.game = editGame.games[gameIndex];

	editGame.destroy = function(){
		editGame.games.$remove(editGame.game).then(function(data){
			$location.path('/');
		});
	}
	editGame.save = function(){
		editGame.games.$save(editGame.game).then(function(data){
			$location.path('/');
		});
	}

});
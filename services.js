angular.module('videoGames.services',[])

.service('fbRef', function(){
	return new Firebase(fbURL);
})

.service('Games', function($firebase, fbRef, gameListValue){

});
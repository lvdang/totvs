(function() {


var NewsFeed = function($scope, $state) {
	 $scope.items = ["The", "49ers", "Rock", "2015"];

};

NewsFeed.$inject = ['$scope', '$state'];

angular.module('newsFeed').controller('NewsFeed', NewsFeed);

}());
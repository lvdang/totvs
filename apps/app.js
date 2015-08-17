(function() {

   var newsFeed = angular.module('newsFeed',['ui.router']);

   newsFeed.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  //$urlRouterProvider.otherwise("/news");
  //
  // Now set up the states
    $stateProvider
     .state('news', {
      // url: "/news",
       views :  {
       	 'columnOne' : {
           templateUrl: "views/news.html",
           controller : "NewsFeed"
         } 
       }
     });
  });
  
}());
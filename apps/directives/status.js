(function() {

/* Directive for toggling on and off member status. */
var memberStatus = function() {

    // Controller
   function memberStatusCntr() {
   	  this.on = 'On';
   	 
      this.toggle = function(a) {
      	  if (a === 'On') {
      	  	 this.on = 'Off';
      	  } else {
      	  	 this.on = 'On';
      	  }
      }
   }

   // Events
   function link($scope, $element, $attrs) {
     
   }

	return {
	   
      restrict: 'AE',
      replace: 'true',
      templateUrl: 'views/status.html',
      controllerAs : 'vm',
      controller : memberStatusCntr,
      link : link
  };

};

angular.module('newsFeed').directive('memberStatus', memberStatus);

}());
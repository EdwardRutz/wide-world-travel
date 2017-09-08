"use strict";
console.log("bookCtrl");

app.controller("bookCtrl", function($scope, bookFactory) {
	
	bookFactory.getBook()  //define function
	.then(function(bookCollection) {
		$scope.bookArray = bookCollection;//binds data to scope
		console.log("$scope.bookArray", $scope.bookCollection);
	});
});
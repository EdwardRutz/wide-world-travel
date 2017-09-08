"use strict";

var app = angular.module("wwtApp",["ngRoute"]);

app.config(["$routeProvider", 
	function($routeProvider){
		$routeProvider.
		when("/", {
			templateUrl: "partials/bookList.html",
			controller: "bookCtrl",
			}).
			otherwise("/");
	}]);




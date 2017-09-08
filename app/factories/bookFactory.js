"use strict";
console.log("bookFactory");

//must use the word "function" and not a fat arrow
app.factory("bookFactory", function($q, $http){
	const getBook = () => {
		let bookArray = [];
		return $q ((resolve, reject) => {
			$http.get(`./data/guides.json`)
			.then((bookObject) => {
				let bookCollection = bookObject.data;

				Object.keys(bookCollection.guides).forEach((key) => {
					bookCollection.guides[key].id = key;
					bookArray.push(bookCollection.guides[key]);
				});
				resolve(bookArray);
				console.log("bookArray", bookArray);
			})
			.catch((error) => {
				reject(error);
			});
		});

	};
		let getOneBook = () => {
			console.log("getOneBook", getOneBook);
		};
	return {getBook, getOneBook};
});



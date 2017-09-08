# [X] Wide World Travel Guides

#### Part 1: Using a controller

- Use AngularJS to build an application that displays a collection of travel guides.


## Setup
The basic structure in place to display your book data in the DOM the Angular Way.

- [X] Create the following file structure:

```
world_wide_travel
 |_ app
 |    |_ controllers
 |    |     |_ bookCtrl.js
 |    |
 |    |_ app.js
 |
 |_ data
 |    |_ guides.json
 |
 |_ lib
 |    |_ gulpfile.js (or gruntfile.js)
 |
 |_ index.html
```

- [ ] For the data in `guides.json,` display all three pieces of information about each book, in any format you choose.

- [X] Remember to also add a `.gitignore` to the project root folder.

- [X] cd into `lib` and run `npm init` then install all of your dependencies for your task runner. Remember to use the `--save-dev` flag to add them to your `package.json` file.

- [X] Install Angular with `npm install angular`. Remember to add the script tag for angular to `index.html`.



## Requirements

- For this project you need to use Angular to list a collection of travel guides in the DOM.
- Build an application that has one view, and one controller that will be responsible for retrieving the data and exposing it for use in the view.

- [X] The view needs to list all book titles, which type of book it is, and the price for the book.

- [X] Fetch your data using an http call that returns a promise. Save the returned data as a property of the `$scope` object and loop through it to display the guidebook info to the user.

Here's a list of some things to include in your app in the appropriate spots:
- [X] Directives:
	- [X] `ng-app="<your module name>"`
 	- [X] `ng-controller="bookCtrl"`
	- [X] `ng-repeat="book in books"`
- [X]A call to the data folder for `guides.json` using `$http`
- [X]Use the `$q` service to wrap your http call in a promise
- [X]`$scope.books = <your array of guide books data>`

- [X] index.html: connect to app.js
- [X] app.js: define module
- [X] controller: connect factory/scope
- [X] factory: connect data
- [X] partials/views: create


## References
[AngularJS Reference](https://docs.angularjs.org/api)





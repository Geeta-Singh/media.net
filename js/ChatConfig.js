angular.module('chatconfig', ['ngRoute'])
.config(function ($routeProvider, $locationProvider, PageConfig, $httpProvider, Constants) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $routeProvider
  .when('/UI_Assignment/', {
      templateUrl: 'component/addBook/addbook.html',
      controller: 'AddBookCtrl',
      cache: false
  })
  .when('/UI_Assignment/books', {
    templateUrl: 'component/bookList/booklist.html',
    controller: 'BookListCtrl',
    cache: false
})
.when('/UI_Assignment/fev', {
  templateUrl: 'component/favouirate/fev.html',
  controller: 'FevCtrl',
  cache: false
})
  
});
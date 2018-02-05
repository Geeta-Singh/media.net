angular.module('addbook', []).controller('AddBookCtrl', function ($scope, $rootScope, $timeout, UtilsFactory, PageConfig, ChatServices) {

    $scope.addBOOK = function () {
        var bookObject = {};
        bookObject.name = $scope.bookName;
        bookObject.author = $scope.author;
        bookObject.prize = $scope.prize;
        var tempAray=UtilsFactory.getGetData();
        tempAray.push(bookObject);
        console.log(tempAray);
        UtilsFactory.setStoreData(tempAray);
    }
})
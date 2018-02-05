angular.module('fev', []).controller('FevCtrl', function ($scope, $rootScope, $timeout, UtilsFactory, PageConfig, ChatServices){
    
    $scope.books=UtilsFactory.getFevData();
    console.log($scope.books);

    $scope.removefevBOOK=function(name,author,prize){
        var bookObject = {};
        bookObject.name = name;
        bookObject.author = author;
        bookObject.prize = prize;
        var tempAray=UtilsFactory.getGetData();
        tempAray.push(bookObject);
        console.log(tempAray);
        UtilsFactory.setStoreData(tempAray);

        var ind =  $scope.books.findIndex(function(element){
            return element.name===name;
         })
         if(ind!==-1){
            $scope.books.splice(ind, 1)
         }
         console.log( $scope.books);
    }
    })
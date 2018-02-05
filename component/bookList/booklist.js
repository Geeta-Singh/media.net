angular.module('booklist', []).controller('BookListCtrl', function ($scope, $rootScope, $timeout, UtilsFactory, PageConfig, ChatServices){

    $scope.books=UtilsFactory.getGetData();
    console.log($scope.books);

    $scope.addfevBOOK=function(name,author,prize){
        var bookObject = {};
        bookObject.name = name;
        bookObject.author = author;
        bookObject.prize = prize;
        var tempAray=UtilsFactory.getFevData();
        tempAray.push(bookObject);
        console.log(tempAray);
        UtilsFactory.setFevBookData(tempAray);

        var ind =  $scope.books.findIndex(function(element){
            return element.name===name;
         })
         if(ind!==-1){
            $scope.books.splice(ind, 1)
         }
         console.log( $scope.books);
    }
    // var arr = [{id:1,name:'serdar'}, {id:2,name:'alfalfa'},{id:3,name:'joe'}];
    // var ind = arr.findIndex(function(element){
    //    return element.id===2;
    // })
    // if(ind!==-1){
    // arr.splice(ind, 1)
    // }
    // console.log (arr)


})
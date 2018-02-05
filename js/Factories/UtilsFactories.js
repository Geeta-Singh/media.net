angular.module('utilsfactory', [])
.factory('UtilsFactory', function () {
    var storeMsg=[];
    var storeFevBook=[];
    return{
        setStoreData: function (data) {
            storeMsg = data;
        },
        getGetData: function () {
            return storeMsg;
        },
        setFevBookData: function (data) {
            storeFevBook= data;
        },
        getFevData: function () {
            return storeFevBook;
        },
    }

  
})
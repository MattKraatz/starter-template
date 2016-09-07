"use strict";

app.controller('ListCtrl',function($scope,dataFactory){
  dataFactory.getData().then((data) => {
    $scope.listData = data;
  })
})

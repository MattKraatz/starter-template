"use strict";

app.factory('dataFactory',function($q,$http) {

  let getData = () => {
  return $q((resolve,reject) => {
    $http.get('https://data.nashville.gov/resource/8zc7-2afq.json')
      .then(function(dataObj){
        let data = dataObj.data;
        resolve(data);
        console.log(data)
      }, function(error){
        console.error(error);
        reject(data);
      })
  })}

  return {getData};
})

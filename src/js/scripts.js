"use strict";

let app = angular.module('mainApp', ['ngRoute','googlechart']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/chart',{
      templateUrl: 'src/templates/chart.html',
      controller: 'ChartCtrl'
    })
    .when('/list',{
      templateUrl: 'src/templates/list.html',
      controller: 'ListCtrl'
    })
    .otherwise('/chart');
})

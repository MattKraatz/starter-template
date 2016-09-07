"use strict";

app.controller('ChartCtrl',function($scope, dataFactory){
  dataFactory.getData().then((data) => {
    let counts = {};
    data.forEach((data) => {
      if (counts[data.contact_type]) {
        counts[data.contact_type] += 1;
      } else {
        counts[data.contact_type] = 1;
      }
    })
    buildChart(counts);
  });

  function buildChart(counts) {
    for (let type in counts) {
      addChartRow(type,counts[type]);
    }
  }

  function addChartRow (nameOfContactType, numberOfProviders){
      var chartDatum = {
          c: [
              { v: nameOfContactType },
              { v: numberOfProviders }
          ]
      };
      $scope.chartObject.data.rows.push(chartDatum);
  };

  $scope.chartObject = {
      type: "BarChart",
      data: {
          "cols": [
              { id: "t", label: "Type of Service", type: "string" },
              { id: "s", label: "Number of Providers", type: "number" }
          ], "rows": [] //You'll be adding the rows with addChartRow
      },
      options: {
          title: "Nashville Services"
      }
  }
})

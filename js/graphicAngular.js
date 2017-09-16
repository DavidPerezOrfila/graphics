angular
  .module("angularChart", ["chart.js"])
  .controller("LineCtrl", function($scope, $http) {
    var total = new Array();
    var average = new Array();

    //Pasamos por get la query de las incidencias del día de hoy
    $http.get("./IncidenciasDia0.php").then(function(response) {
      var datos = [];
      var elements = [];
      datos = response.data;
      angular.forEach(datos, function(key, valor) {
        var a;
        a = datos[valor].INCIDENCIAS;
        elements.push(a);

        return elements;
      });

      $scope.data = [elements];
      total = [elements];
      console.log(total);
    });

    //Pasamos por get las incidencias del día -2
    $http.get("./IncidenciasDiaMenos2.php").then(function(response) {
      var data3 = [];
      var elements3 = [];
      data3 = response.data;
      angular.forEach(data3, function(key, valor) {
        var a;
        a = parseInt(data3[valor].INCIDENCIAS);
        elements3.push(a);
        if (elements3.length === 0) {
          elements3[(0, 0)] == 0;
        }
        return elements3;
      });

      //Añadimos al array los datos del día -2
      total.push(elements3);
      console.log(total);
    });

    //Pasamos por get las incidencias del día -3
    $http.get("./IncidenciasDiaMenos3.php").then(function(response) {
      var data4 = [];
      var elements4 = [];
      data4 = response.data;
      angular.forEach(data4, function(key, valor) {
        var a;
        a = parseInt(data4[valor].INCIDENCIAS);
        elements4.push(a);
        if (elements4.length === 0) {
          elements4[(0, 0)] == 0;
        }
        return elements4;
      });

      //Añadimos al array los datos del día -3
      total.push(elements4);
      console.log(total);
    });

    //Pasamos por get las incidencias del día -4
    $http.get("./IncidenciasDiaMenos4.php").then(function(response) {
      var data5 = [];
      var elements5 = [];
      data5 = response.data;
      angular.forEach(data5, function(key, valor) {
        var a;
        a = parseInt(data5[valor].INCIDENCIAS);
        elements5.push(a);
        if (elements5.length === 0) {
          elements5[(0, 0)] == 0;
        }
        return elements5;
      });

      //Añadimos al array los datos del día -4
      total.push(elements5);
      console.log(total);
    });

    //Pasamos por get las incidencias del día -5
    $http.get("./IncidenciasDiaMenos5.php").then(function(response) {
      var data6 = [];
      var elements6 = [];
      data6 = response.data;
      angular.forEach(data6, function(key, valor) {
        var a;
        a = parseInt(data6[valor].INCIDENCIAS);
        elements6.push(a);
        if (elements6.length === 0) {
          elements6[(0, 0)] == 0;
        }
        return elements6;
      });

      //Añadimos al array los datos del día -5
      total.push(elements6);
      console.log(total);
    });

    //Pasamos por get las incidencias del día -6
    $http.get("./IncidenciasDiaMenos6.php").then(function(response) {
      var data7 = [];
      var elements7 = [];
      data7 = response.data;
      angular.forEach(data7, function(key, valor) {
        var a;
        a = parseInt(data7[valor].INCIDENCIAS);
        elements7.push(a);
        if (elements7.length === 0) {
          elements7[(0, 0)] == 0;
        }
        return elements7;
      });

      //Añadimos al array los datos del día -6
      total.push(elements7);
      console.log(total);
      /*$scope.data.push(average);*/
    });

    //Pasamos por get las incidencias del día anterior
    $http.get("./IncidenciasDiaMenos1.php").then(function(response) {
      var data2 = [];
      var elements2 = [];
      data2 = response.data;
      angular.forEach(data2, function(key, valor) {
        var a;
        var b = 0;
        a = parseInt(data2[valor].INCIDENCIAS);

        elements2.push(a);
        if (elements2.length === 0) {
          elements2[(0, 0)] == 0;
        }

        return elements2;
      });
      total.push(elements2);
      //Añadimos al array los datos del día anterior
      $scope.data.push(elements2);

      console.log(total);
    });

    $scope.labels = [
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00"
    ];
    $scope.series = ["Hoy", "Ayer", "Promedio"];
    //$scope.data = [[65, 59, 80, 81, 56, 55, 40], [28, 48, 40, 19, 86, 27, 90]];
    $scope.onClick = function(points, evt) {
      console.log(points, evt);
    };
    $scope.datasetOverride = [{ yAxisID: "y-axis-1" }];
    $scope.options = {
      scales: {
        yAxes: [
          {
            id: "y-axis-1",
            type: "linear",
            display: true,
            position: "left",
            ticks: {
              beginAtZero: true,
              userCallback: function(label, index, labels) {
                if (Math.floor(label) === label) {
                  return label;
                }
              }
            }
          }
        ]
      },
      legend: { display: true, labels: { fontColor: "rgb(255, 99, 132)" } }
    };
    $scope.$on("$viewContentLoaded", function() {
      $scope.Refresh = $interval(function() {
        location.reload(forceGet);
      }, 180000);
    });
  });

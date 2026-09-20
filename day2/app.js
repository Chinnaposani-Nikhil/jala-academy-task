/*
AngularJS Filters and Services
*/

var app = angular.module("filterApp", []);

/* =========================================

1. BUILT-IN AND CUSTOM FILTERS
   ========================================= */

app.controller("FilterController", function ($scope) {


$scope.name = "AngularJS Basics";

$scope.amount = 12500.567;

$scope.today = new Date();

$scope.message = "Hello AngularJS";


});

/*
Custom filter:
reverseText
*/

app.filter("reverseText", function () {


return function (input) {

    if (!input) {
        return "";
    }

    return input
        .split("")
        .reverse()
        .join("");

};


});



app.service("MessageService", function () {


this.getMessage = function () {

    return "This message comes from a custom service.";

};


});

app.controller(
"ServiceController",
function ($scope, $location, $http, $timeout, MessageService) {


    /*
        $location
    */

    $scope.currentUrl = $location.absUrl();


    /*
        Custom service
    */

    $scope.customMessage =
        MessageService.getMessage();


    /*
        $timeout
    */

    $scope.timeoutMessage =
        "Timer has not started yet.";

    $scope.startTimer = function () {

        $scope.timeoutMessage =
            "Waiting for 2 seconds...";

        $timeout(function () {

            $scope.timeoutMessage =
                "The $timeout service has completed.";

        }, 2000);

    };


    /*
        $http GET
    */

    $scope.users = [];

    $scope.getUsers = function () {

        $http.get(
            "https://jsonplaceholder.typicode.com/users"
        )
        .then(function (response) {

            $scope.users = response.data;

        })
        .catch(function () {

            $scope.users = [];

        });

    };

}


);



app.controller(
"HttpController",
function ($scope, $http) {


    $scope.response = {};

    $scope.successMessage = "";

    $scope.errorMessage = "";


    /*
        GET request
    */

    $scope.performGet = function () {

        $scope.successMessage = "";
        $scope.errorMessage = "";

        $http.get(
            "https://jsonplaceholder.typicode.com/posts/1"
        )
        .then(function (response) {

            $scope.response = response;

            $scope.successMessage =
                "GET request completed successfully.";

        })
        .catch(function (error) {

            $scope.response = error;

            $scope.errorMessage =
                "GET request failed.";

        });

    };


    /*
        POST request
    */

    $scope.performPost = function () {

        $scope.successMessage = "";
        $scope.errorMessage = "";

        var postData = {

            title: "AngularJS Test",

            body: "This data was sent using POST.",

            userId: 1

        };


        $http.post(
            "https://jsonplaceholder.typicode.com/posts",
            postData
        )
        .then(function (response) {

            $scope.response = response;

            $scope.successMessage =
                "POST request completed successfully.";

        })
        .catch(function (error) {

            $scope.response = error;

            $scope.errorMessage =
                "POST request failed.";

        });

    };

}


);



app.controller("ApiController", function ($scope) {


$scope.text = "AngularJS API";

/*
    angular.uppercase() and angular.lowercase()
    were available in older AngularJS versions.

    They were removed from AngularJS 1.7+.
    Modern equivalent is JavaScript's native methods.
*/

$scope.upperText =
    $scope.text.toUpperCase();

$scope.lowerText =
    $scope.text.toLowerCase();



$scope.numberCheck =
    angular.isNumber(100);

$scope.arrayCheck =
    angular.isArray([1, 2, 3]);


});

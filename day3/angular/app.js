var app = angular.module("jsonApp", []);


/* =========================================
   Student Controller
========================================= */

app.controller("StudentController", function ($scope, $http) {

    $scope.students = [];

    // Load JSON file
    $http.get("students.json")
        .then(function (response) {

            $scope.students = response.data;

            console.log("JSON data loaded successfully:");
            console.log($scope.students);

        })
        .catch(function (error) {

            console.error("Error loading JSON file:", error);

        });


    // Default sorting
    $scope.sortField = "id";

    $scope.reverseSort = false;


    // Change sorting field
    $scope.sortBy = function (field) {

        if ($scope.sortField === field) {

            $scope.reverseSort = !$scope.reverseSort;

        } else {

            $scope.sortField = field;
            $scope.reverseSort = false;

        }

    };


    /* =========================================
       Select options
    ========================================== */

    $scope.courses = [
        "Java",
        "Python",
        "JavaScript",
        "React",
        "Angular",
        "Node.js"
    ];

    $scope.selectedCourse = "";

});
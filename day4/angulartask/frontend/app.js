var app = angular.module("eventApp", []);


app.controller("EventController", function ($scope, $http) {


    

    $scope.students = [];

    $scope.loading = false;

    $scope.errorMessage = "";

    $scope.showMessage = true;

    $scope.hideMessage = false;

    $scope.disableButton = false;

    $scope.buttonClicked = false;

    $scope.clickCount = 0;

    $scope.mouseX = 0;

    $scope.mouseY = 0;

    $scope.mouseMoveCount = 0;

    $scope.eventType = "";

    $scope.eventX = 0;

    $scope.eventY = 0;



    $scope.loadStudents = function () {

        $scope.loading = true;

        $scope.errorMessage = "";


        $http.get("http://localhost:3000/api/students")

            .then(function (response) {

                $scope.students = response.data;

                console.log(
                    "Students received:",
                    $scope.students
                );

            })

            .catch(function (error) {

                console.error(
                    "Error fetching students:",
                    error
                );

                $scope.errorMessage =
                    "Unable to fetch student data.";

            })

            .finally(function () {

                $scope.loading = false;

            });

    };


    $scope.increaseCount = function () {

        $scope.clickCount++;

    };


   

    $scope.mouseMoved = function (event) {

        $scope.mouseX = event.clientX;

        $scope.mouseY = event.clientY;

        $scope.mouseMoveCount++;

    };


    

    $scope.showEventDetails = function (event) {

        $scope.eventType = event.type;

        $scope.eventX = event.clientX;

        $scope.eventY = event.clientY;

        console.log("Event object:", event);

    };

});
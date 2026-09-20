var app = angular.module(
    "day5App",
    [
        "ngRoute",
        "ngAnimate"
    ]
);


/* =========================================
   ROUTING
========================================= */

app.config(function ($routeProvider) {

    $routeProvider

        .when("/home", {
            templateUrl: "views/home.html"
        })

        .when("/form", {
            templateUrl: "views/form.html",
            controller: "FormController"
        })

        .when("/about", {
            templateUrl: "views/about.html"
        })

        .otherwise({
            redirectTo: "/home"
        });

});


/* =========================================
   FORM CONTROLLER
========================================= */

app.controller(
    "FormController",
    function ($scope) {

        $scope.formData = {};

        $scope.showMessage = false;


        $scope.courses = [
            "Java",
            "Python",
            "JavaScript",
            "React",
            "Angular"
        ];


        $scope.submitForm = function (form) {

            if (form.$valid) {

                $scope.showMessage = true;

                console.log(
                    "Form submitted:",
                    $scope.formData
                );

            }

        };


        $scope.resetForm = function (form) {

            $scope.formData = {};

            $scope.showMessage = false;

            form.$setPristine();
            form.$setUntouched();

        };

});
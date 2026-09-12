
var app = angular.module("basicApp", []);


app.controller("MainController", function ($scope) {


$scope.firstName = "John";
$scope.lastName = "Doe";

$scope.color = "";


});


app.directive("helloMessage", function () {


return {
    restrict: "E",

    template:
        "<div class='result'>" +
        "<strong>Hello from a custom AngularJS directive!</strong>" +
        "<br>" +
        "This directive is defined in the external app.js file." +
        "</div>"
};


});


app.controller("StudentController", function ($scope) {


$scope.studentName = "";

$scope.students = [
    {
        name: "Rahul",
        course: "HTML & CSS"
    },
    {
        name: "Priya",
        course: "JavaScript"
    },
    {
        name: "Arun",
        course: "AngularJS"
    }
];


});



app.controller("ScopeController", function ($scope, $rootScope) {

$scope.localMessage = "This message belongs to the controller scope.";

$rootScope.rootMessage =
    "This message is available through the root scope.";

$rootScope.appName = "AngularJS Basics Application";

});

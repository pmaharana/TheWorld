//app-trips.js

(function () {

    "use strict";

    // this is where the angular moduel is being created, due to the second parameter
    angular.module("app-trips", ["simpleControls", "ngRoute"])
        .config(function ($routeProvider) {

            $routeProvider.when("/", {
                controller: "tripsController",
                controllerAs: "vm",
                templateUrl: "/views/tripsView.html"
            });

            $routeProvider.otherwise({ redirectTo: "/" });

        });

})();
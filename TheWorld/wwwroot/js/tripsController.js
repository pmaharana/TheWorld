//tripsController.js

(function () {

    "use strict";

    //Getting the existing module
    angular.module("app-trips")
        .controller("tripsController", tripsController);

    function tripsController() {

        let vm = this; //this is the object that is being returned from the trips controller.
                        //controller is going to call new trips controller, returns something like a class

        vm.trips = [{
            name: "US Trip",
            created: new Date()
         }, {
            name: "World Trip",
            created: new Date()
        }];

        vm.newTrip = {};

        vm.addTrip = function () {
            vm.trips.push({ name: vm.newTrip.name, created: new Date() });
            vm.newTrip = {};
        };
    }

})();
angular.module("doggycloud").
controller("animalController",
    function($scope, $state, $http, $resource) {
        $scope.animal = {};

        var today = new Date();
        $scope.dummyAnimals = [
            {
                name: "Fido", breed: "Goldeno Retrievo",
                gender: "Male", age: 5, inHeat: "Yes", lastVaccine: today,
                bestAlone: "No", pictures: "N/A", comments: "Good dog"
            },
            {
                name: "Muggi", breed: "Labrador",
                gender: "Female", age: 10, inHeat: "Yes", lastVaccine: today,
                bestAlone: "No", pictures: "N/A", comments: "Bad dog"
            },
            {
                name: "Don Carnage", breed: "Fox",
                gender: "Male", age: 4, inHeat: "Yes", lastVaccine: today,
                bestAlone: "Yes", pictures: "N/A", comments: "Its a fox"
            },
            {
                name: "Magdalene", breed: "Chihuahua",
                gender: "Female", age: 34, inHeat: "No", lastVaccine: today,
                bestAlone: "No", pictures: "N/A", comments: "Old dog"
            }
        ];

        //$scope.saveAnimal = function() {
        //    if ($scope.animalForm.$valid) {
        //        var fakedResponse = {
        //            error: "Fake confirm from server"
        //        };
        //
        //        $scope.serverResponse = fakedResponse;
        //    }
        //    else {
        //        alert("Fejl i formularen");
        //    }
        //};


        //animalApiService.getAnimals()
        //    .then(function(animals) {
        //        $scope.dummyAnimals = animals;
        //    }, function (error) {
        //        // Error handling
        //    });
        //
        //$scope.editAnimal = function(animalToCopy) {
        //    var animalToSend = angular.copy(animalToCopy);
        //
        //    $state.go("new-animal", { animalParameter: animalToSend});
        //};
    });


angular.module("doggycloud").
controller("animalController",
    function($scope, $state, $http, $resource, animalApiService) {
        $scope.animal = {};

        var today = new Date();
        $scope.dummyAnimals = [
            {
                name: "Fido", breed: "Goldeno Retrievo",
                sex: "Male", Age: 5, inHeat: "Yes", lastVaccine: today,
                bestAlone: "No", pictures: "N/A", comments: "Good dog"
            },
            {
                name: "Muggi", breed: "Labrador",
                sex: "Female", Age: 10, inHeat: "Yes", lastVaccine: today,
                bestAlone: "No", pictures: "N/A", comments: "Bad dog"
            },
            {
                name: "Don Carnage", breed: "Fox",
                sex: "Male", Age: 4, inHeat: "Yes", lastVaccine: today,
                bestAlone: "Yes", pictures: "N/A", comments: "Its a fox"
            },
            {
                name: "Magdalene", breed: "Chihuahua",
                sex: "Female", Age: 34, inHeat: "No", lastVaccine: today,
                bestAlone: "No", pictures: "N/A", comments: "Old dog"
            }
        ];

        $scope.saveAnimal = function() {
            if ($scope.animalForm.$valid) {
                var fakedResponse = {
                    error: "Fake confirm from server"
                };

                $scope.serverResponse = fakedResponse;
            }
            else {
                alert("Fejl i formularen");
            }
        };


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


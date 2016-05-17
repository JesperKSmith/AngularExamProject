angular.module("doggycloud").
controller("customerController",
    function($scope, $state, $http, $resource, animalApiService) {
        $scope.customer = {};

        var today = new Date();
        $scope.dummyCustomers = [
            {
                name: "Torben",
                address: "Torbenvej 14 st.th 2300 København S",
                telephone: "12345678",
                email: "neger@allan.dk",
                animals:
                [
                    {
                        name: "Fido", breed: "Goldeno Retrievo", sex: "Male",
                        Age: 5, inHeat: "Yes", lastVaccine: today,
                        bestAlone: "No", pictures: "N/A", comments: "Good dog"
                    },
                    {
                        name: "Misser", breed: "Norsk Skovkat", sex: "Female",
                        Age: 3, inHeat: "No", lastVaccine: today,
                        bestAlone: "No", pictures: "N/A", comments: "Good cat"
                    }
                ]
            },
            {
                name: "Åse",
                address: "Åsenvej 14 st.th 2300 København S",
                telephone: "12345678",
                email: "meta@dona.dk",
                animals:
                [
                    {
                        name: "Muggi", breed: "Labrador",
                        sex: "Female", Age: 10, inHeat: "Yes", lastVaccine: today,
                        bestAlone: "No", pictures: "N/A", comments: "Bad dog"
                    },
                    {
                        name: "Magdalene", breed: "Chihuahua",
                        sex: "Female", Age: 34, inHeat: "No", lastVaccine: today,
                        bestAlone: "No", pictures: "N/A", comments: "Old dog"
                    }
                ]
            },
            {
                name: "John John",
                address: "JohnJohnAlle 14 st.th 2300 København S",
                telephone: "12345678",
                email: "john@john.dk",
                animals:
                [
                    {
                        name: "Don Carnage", breed: "Fox",
                        sex: "Male", Age: 4, inHeat: "Yes", lastVaccine: today,
                        bestAlone: "Yes", pictures: "N/A", comments: "Its a fox"
                    }
                ]
            }
        ];

        $scope.saveCustomer = function() {
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
    });



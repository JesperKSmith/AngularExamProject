angular.module("doggycloud").
controller("customerController",
    function($scope, $state, $http, $resource, customerApiService) {
        $scope.customer = {};

        var today = new Date();

        $scope.localCustomers = [];

        $scope.dummyCustomers = [
            {
                name: "Torben",
                address: "Torbenvej 14 st.th 2300 København S",
                telephone: "12345678",
                email: "neger@allan.dk",
                animals:
                [
                    {
                        name: "Fido", breed: "Goldeno Retrievo", gender: "Male",
                        age: 5, inHeat: "Yes", lastVaccine: today,
                        bestAlone: "No", pictures: "N/A", comments: "Good dog"
                    },
                    {
                        name: "Misser", breed: "Norsk Skovkat", gender: "Female",
                        age: 3, inHeat: "No", lastVaccine: today,
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
                        gender: "Female", age: 10, inHeat: "Yes", lastVaccine: today,
                        bestAlone: "No", pictures: "N/A", comments: "Bad dog"
                    },
                    {
                        name: "Magdalene", breed: "Chihuahua",
                        gender: "Female", age: 34, inHeat: "No", lastVaccine: today,
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
                        gender: "Male", age: 4, inHeat: "Yes", lastVaccine: today,
                        bestAlone: "Yes", pictures: "N/A", comments: "Its a fox"
                    }
                ]
            }
        ];

        customerApiService.getCustomers().then(function(customers) {
            $scope.localCustomers = customers;
        }, function(error) {
            console.log(error);
        });
    });



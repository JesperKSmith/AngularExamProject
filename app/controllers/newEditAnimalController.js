angular.module("doggycloud")
    .controller("newEditAnimalController",
        function($scope, $state, $stateParams, customerApiService) {
            $scope.customer = {};
            $scope.animal = {};


            $scope.customer = $stateParams.customerParameter;
            $scope.animal = $stateParams.animalParameter;

            $scope.saveAnimal = function() {
                if ($scope.animalForm.$valid) {
                    customerApiService.addUpdateCustomerAnimal($scope.customer, $scope.animal)
                        .then(function (customersFromAPI) {
                            $scope.$parent.localCustomers = customersFromAPI;
                            $state.go("customer-details", {
                                customerParameter: $scope.customer
                            })
                        });
                } else {
                    console.log("animal form invalid");
                }
            };

            $scope.deleteCustomerAnimal = function() {
                customerApiService.deleteCustomerAnimal($scope.customer, $scope.animal)
                    .then(function(data){
                        $scope.$parent.localCustomers = data;
                        $state.go("customer-details", {
                            customerParameter: $scope.customer
                        })
                    }, function() {
                        alert("delete failed")
                    });
        };
    });


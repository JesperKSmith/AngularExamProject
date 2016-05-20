angular.module("doggycloud").
controller("customerController",
    function($scope, $state, customerApiService) {

        $scope.localCustomers = [];

        $scope.limitType = "";
        $scope.limitTypeRange = ["", "Dog", "Cat"];

        $scope.editCustomer = function(customerToCopy) {
            var customerToSend = angular.copy(customerToCopy);

            console.log(customerToCopy);

            $state.go("customer-form", {
                customerParameter: customerToSend
            });
        };

        $scope.getDetails = function(customer) {

            $state.go("customer-details", {
                customerParameter: customer
            });
        };

        customerApiService.getCustomers()
            .then(function(customers) {
                // if resolved
                $scope.localCustomers = customers;
            }, function(error) {
                // if rejected
            console.log(error);

            });
    });



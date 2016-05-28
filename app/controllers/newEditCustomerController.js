angular.module("doggycloud")
    .controller("newEditCustomerController",
        function($scope, $state, $stateParams, customerApiService) {

            $scope.customer = {};
            console.log("customer controller");

            $scope.customer = $stateParams.customerParameter;

            console.log($scope.customer);

            $scope.saveCustomer = function() {
                if ($scope.customerForm.$valid) {
                    customerApiService.addUpdateCustomer($scope.customer)
                        .then(function (customersFromAPI) {
                            $scope.$parent.localCustomers = customersFromAPI;
                            $state.go("customer-table")

                        });
                } else {
                    console.log("customer form invalid");
                    console.log($scope.customerForm);
                }
            };

            $scope.deleteCustomer = function() {
                customerApiService.deleteCustomer($scope.customer)
                    .then(function(data){

                        $scope.$parent.localCustomers = data;
                        $state.go("customer-table");

                    }, function() {
                        alert("delete failed")
                    });

            };



        });

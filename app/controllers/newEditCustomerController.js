angular.module("doggycloud")
    .controller("newEditCustomerController",
        function($scope, $state, $stateParams, $http, $resource, customerApiService) {

            $scope.customer = {};
            console.log("customer controller");

            $scope.customer = $stateParams.customerParameter;

            console.log($scope.customer);

            $scope.saveCustomer = function() {
                if ($scope.customerForm.$valid) {
                    console.log("save customer");
                    customerApiService.addUpdateCustomer($scope.customer);
                    $state.go("customer-table")
                } else {
                    console.log("customer form invalid")
                }
            };

            $scope.deleteCustomer = function(){
                customerApiService.deleteCustomer($scope.customer);
                $state.go("customer-table")
            };

        });

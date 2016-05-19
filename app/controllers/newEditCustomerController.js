angular.module("doggycloud")
    .controller("newEditCustomerController",
        function($scope, $state, $stateParams, $http, $resource, customerApiService) {
            $scope.customer = {};

            $scope.customer = $stateParams.customerParameter;

            $scope.saveCustomer = function() {
                if ($scope.customerForm.$valid) {
                    if ($stateParams.customerParameter === null) {
                        // No customer id = new entry
                        new $scope.customerApiService.customerResource // <-- this shit won't work! 
                        //new $scope.$parent.customerResource($scope.customer).$save(function(data) {
                        //    console.log("saved customer");
                        //    $scope.$parent.receivedCustomers.push($scope.customer);
                        //    $scope.$parent.receivedCustomers.reverse();
                        //})
                    }
                    else {
                        // customer id exists = update entry
                    }
                }
            }

        })

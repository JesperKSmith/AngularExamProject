/**
 * Created by 1234 on 20-05-2016.
 */
angular.module("doggycloud").
controller("detailsController",
    function($scope, $state, $stateParams) {

        $scope.customer = {};

        $scope.customer = $stateParams.customerParameter;

        console.log($scope.customer);
    });

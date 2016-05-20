/**
 * Created by Vang on 17/05/2016.
 */
angular.module('doggycloud')
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/kunder');

        $stateProvider
            .state('customer-form', {
                url: '/kundeformular',
                templateUrl: 'app/partials/customerForm.html',
                controller: 'newEditCustomerController',
                params: { customerParameter: null}
            })

            .state('animal-form', {
                url: '/dyreformular',
                templateUrl: 'app/partials/animalForm.html'
                //controller: 'newEditAnimalController'
                //params: { animalParameter: null}
            })

            .state('customer-table', {
                url: '/kunder',
                templateUrl: 'app/partials/customerTable.html'
            })

            .state('animal-table', {
                url: '/dyr',
                templateUrl: 'app/partials/animalTable.html'
                //controller: 'animalController'
            })

            .state('loading', {
                url: '/loading',
                templateUrl: 'app/partials/spinner.html'

            })

                    
            .state('customer-details', {
                url: '/kundeinfo',
                templateUrl: 'app/partials/customerDetails.html',
                controller: 'detailsController',
                params: { customerParameter: null}

            })

    });
/**
 * Created by Vang on 17/05/2016.
 */

angular.module("doggycloud").factory("customerApiService", function($q, $state, $stateParams, $http, $resource) {

    var deferred =$q.defer();
    var customers = [];
    var customerResource =
        $resource("https://fast-garden-76696.herokuapp.com/customers/:id", {id: "@_id"}, {
            update: {method: 'PUT'}
        });

    return {
        getCustomers: function () {

            customerResource.query(
                function (data) {
                    customers = data;
                    deferred.resolve(customers);

                }, function (error) {
                    deferred.reject(error)

                });

            return deferred.promise;
        },
        addUpdateCustomer: function (customer) {

            if (customer._id === null || customer._id === undefined) {

                new customerResource(customer)
                    .$save(
                        function (data) {
                            customers.push(customer);
                            deferred.resolve("created");
                        }, function (error) {
                            deferred.reject(error);
                        }
                    );
                return deferred.promise;
            } else if (customer._id !== null) {

                new customerResource(customer)
                    .$update(function (data) {

                        console.log("updating");
                        for (var i = 0; i < customers.length; i++) {

                            if (customers[i]._id === customer._id) {
                                customers[i] = customer;
                            }
                        }
                        deferred.resolve("updated");
                    }, function (error) {
                        deferred.reject(error);
                    });

                return deferred.promise;

            } else {

                console.log("Fejlbesked");
            }
        },
        deleteCustomer: function (customer) {
            new customerResource (customer)
                .$delete(function (data) {

                    console.log("her bliver der sendt anmodning til API");

                    for (var i = 0; i < customers.length; i++) {

                        if (customers[i]._id === customers._id) {

                            console.log("Her bliver customer fjernet fra lokal array");

                            customers.splice(i,1);
                        }
                    }

                    deferred.resolve("deleted");
                    console.log("deleted");
                }, function(error) {
                    deferred.reject(error);
                    console.log("error");
                });
            console.log("Denne vises altid når deleteCustomer bliver brugt");
            //$state.go("customer-table");
            return deferred.promise;
        }
    };
});
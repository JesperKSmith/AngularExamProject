/**
 * Created by Vang on 17/05/2016.
 */

angular.module("doggycloud").factory("customerApiService", function($q, $state, $stateParams, $http, $resource) {

    var deferred = $q.defer();
    var customers = [];
    var animals = [];
    var customerResource =
        $resource("https://fast-garden-76696.herokuapp.com/customers/:id",
            {id: "@_id"},
            {update: {method: 'PUT'}
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
                            deferred.resolve(customers);
                        }, function (error) {
                            deferred.reject(error);
                        }
                    );
                return deferred.promise;
            } else if (customer._id !== null) {

                new customerResource(customer)
                    .$update(function (data) {

                        console.log(customer);
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
                .$delete(function () {

                    for (var i = 0; i < customers.length; i++) {

                        if (customers[i]._id === customer._id) {

                            customers.splice(i,1);

                        }
                    }

                    deferred.resolve(customers);

                }, function(error) {
                    deferred.reject(error);
                    console.log(error);
                });
            console.log("Denne vises altid når deleteCustomer bliver brugt");
            return deferred.promise;
        },
        deleteCustomerAnimal: function (customer, animal) {
            for (var i = 0; i < customer.animals.length ; i++) {
                if(customer.animals[i].animalId === animal.animalId) {
                    customer.animals.splice(i, 1);
                }
            }
            new customerResource (customer)
                .$update(function () {
                    for (var i = 0; i < customers.length; i++) {
                        if (customers[i]._id === customer._id) {

                        customers[i] = customer;
                        }
                    }

                    deferred.resolve(customers);

                }, function(error) {
                    deferred.reject(error);
                    console.log(error);
                });
            console.log("Denne vises altid når deleteCustomerAnimal bliver brugt");
            return deferred.promise;
        },

        addUpdateCustomerAnimal: function (customer, animal) {

            if (animal.animalId === null || animal.animalId === undefined) {

                var animalAmount = customer.animals.length + 1;
                animal.animalId = animalAmount;
                customer.animals.splice(animalAmount, 0, animal);

                new customerResource(customer)
                    .$update(
                        function (data) {
                            for (var i = 0; i < customers.length; i++) {
                                if (customers[i]._id === customer._id) {
                                    customers[i] = customer;
                                }
                            }
                            customers.push(customer);
                            deferred.resolve(customers);
                        }, function (error) {
                            deferred.reject(error);
                        }
                    );
                return deferred.promise;

            } else if (animal.animalId !== null) {
                customer.animals[animal.animalId - 1] = animal;
                new customerResource(customer)
                    .$update(function (data) {
                       for (var i = 0; i < customers.length; i++) {
                            if (customers[i]._id === customer._id) {
                                customer[i] = customer;
                            }
                        }
                        deferred.resolve(customers);
                    }, function (error) {
                        deferred.reject(error);
                    });
                    return deferred.promise;
            } else {
            console.log("Fejl! Ingen match på animalId, og animalId er ikke null / undefined");
            }
        }
    };
});

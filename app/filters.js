/**
 * Created by Vang on 18/05/2016.
 */

angular.module("doggycloud")
    .filter("animalSearch", function(){
        return function(data, search){

            if (search === undefined) {
                return data;
            } else {

                var result = _.filter(data, function (customer){
                    return customer.name && customer.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
                        || customer.breed && customer.breed.toLowerCase().indexOf(search.toLowerCase()) !== -1
                        || customer.gender && customer.gender.toLowerCase().indexOf(search.toLowerCase()) !== -1
                        || customer.age && customer.age.toString().indexOf(search) !== -1
                        || customer.inHeat && customer.inHeat.toLowerCase().indexOf(search.toLowerCase()) !== -1
                        || customer.bestAlone && customer.bestAlone.toLowerCase().indexOf(search.toLowerCase()) !== -1
                        || customer.comments && customer.comments.toLowerCase().indexOf(search.toLowerCase()) !== -1});

                return result;
            }
        };
    })

    .filter("customerSearch", function(){
        return function(data, search){

            if (search === undefined) {
                return data;
            } else {

                var result = _.filter(data, function (customer){
                    return customer.name && customer.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
                        || customer.address && customer.address.toLowerCase().indexOf(search.toLowerCase()) !== -1
                        || customer.telephone && customer.telephone.toLowerCase().indexOf(search.toLowerCase()) !== -1
                        || customer.email && customer.email.toLowerCase().indexOf(search.toLowerCase()) !== -1});

                return result;
            }
        };
    });

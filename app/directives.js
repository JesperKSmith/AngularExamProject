angular.module("doggycloud")
    .directive("labelWithTextfield", function() {
    return {
        restrict: 'AE',
        scope: {
            label: '@', inputName: '@', errorCategory: '@', form: '@'
        },
        template :
            "<label for='{{label}}' class='labelClass'>{{label}}</label><br>"+
            "<input type='text' name='{{inputName}}' class='textFieldClass' required /><br>"+
            "<span class='fontError' ng-show='{{form}}.{{inputName}}.$error.required && {{form}}.$submitted'>"+
            "{{errorCategory}} er påkrævet</span>",
    };
});



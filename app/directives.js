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
    })
    .directive("enterToSubmit", function() {
        return function (scope, element, attrs) { // link funktionen

            //Key codes - a number which represents an actual key on the keyboard
            element.bind("keydown keypress", function (event) {
                //Add which for key events$a
                if(event.which === 13) {
                    scope.$apply(function () {
                        scope.$eval(attrs.ngEnter);
                    });
                    event.preventDefault();
                }
            })
        }
    });





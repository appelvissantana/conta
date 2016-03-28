/**
 * Created by elvissantana on 3/24/16.
 */

(function(){

    "use strict";

    angular
        .module("conta")
        .controller("loginctrl",["$state", loginctrl]);
    
    function loginctrl($state){
       
        var vm = this;

        vm.submit = function(){
            $state.go("empresas");
        };

    }
    
    
}());
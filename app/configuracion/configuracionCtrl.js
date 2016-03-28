/**
 * Created by elvissantana on 3/24/16.
 */
(function () {
    angular
        .module("conta")
        .controller("configuracionctrl",  configuracionctrl);

    function configuracionctrl(){
        var vm = this;
        vm.EmpresaNombre = "EMPRESA NOMBRE";

    }


}());
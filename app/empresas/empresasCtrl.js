/**
 * Created by Esantana on 3/1/2016.
 */

(function(){

    "use strict";

    angular
        .module("conta")
        .controller("empresasCtrl", empresasCtrl);

    function empresasCtrl(){
        var vm = this;

        vm.empresas = [

            {
                "EmpresaId":1,
                "Nombre":"Universidad Central del Este"
            },

            {
                "EmpresaId":2,
                "Nombre":"Centro Medico UCE"
            }

        ]


    }




}());
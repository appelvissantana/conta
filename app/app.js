/**
 * Created by Esantana on 2/12/2016.
 */

(function(){

        "use strict";
        var app = angular.module("conta",["ui.router","common.services"]);

        app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider)
         {
             $urlRouterProvider.otherwise("/");

             $stateProvider
                 .state("inicio",{
                     url:"/",
                     templateUrl:"app/Sistema/home.html"
                 })

                 .state("Login",{
                     url:"/Login",
                     templateUrl:"app/Sistema/Login.html",
                     controller: "loginctrl as vm"
                 })

                 .state("Register",{
                     url:"/Register",
                     templateUrl:"app/Sistema/Register.html",
                     controller: "MainCtrl as vm"

                 })

                 .state("empresas",{
                     url:"/empresas",
                     templateUrl:"app/empresas/empresas.html",
                     controller:"empresasCtrl as vm"
                 })

                 .state("empresaNueva",{
                     url:"/empresa/nueva",
                     templateUrl:"app/empresas/empresasEdit.html"
                 })

                 .state("menu", {
                     url:"/Menu/:EmpresaId",
                     templateUrl: "app/Sistema/Menu.html",
                     controller: "menuctrl as vm"

                 })

                 .state("catalogo",{
                     url:"/Catalogo/:EmpresaId",
                     templateUrl:"app/catalogo cuentas/catalogocuentas.html",
                     controller: "catalogocuentasctrl as vm"

                 })

                 .state("MCLista",{
                     url:"/MC/Lista",
                     templateUrl:"app/movimientos contables/movimientoscontables.html",
                     controller:"movimientoscontablesctrl as vm"
                 })

                 .state("MCEdit",{
                 url:"/MC/Nuevo",
                     templateUrl:"app/movimientos contables/movimientoscontablesEdit.html",
                     controller:"movimientoscontableseditctrl as vm"
                })

                 .state("reportes",{
                     url:"/Reportes/:EmpresaId",
                     templateUrl:"app/reportes/reportes.html",
                     controller: "reportesctrl as vm"
                 })

                 .state("config", {
                     url:"/Config/:EmpresaId",
                     templateUrl:"app/configuracion/configuracion.html",
                     controller: "configuracionctrl as vm"


                 });

             
        }])



    }()


);
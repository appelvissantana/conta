/**
 * Created by Esantana on 2/12/2016.
 */

(function(){

        "use strict";
        var app = angular.module("conta",["ui.router"]);

        app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider)
         {
             $urlRouterProvider.otherwise("/");

             $stateProvider
                 .state("inicio",{
                     url:"/",
                     templateUrl:"app/empresas/empresas.html",
                     controller:"empresasCtrl as vm"

                 })

                 .state("menu", {
                     url:"/Menu/:EmpresaId",
                     templateUrl: "app/Menu.html"
                 })

                 .state("catalogo",{
                     url:"/Catalogo/:EmpresaId",
                     templateUrl:"app/catalogo cuentas/catalogocuentas.html"
                 })

                 .state("MCLista",{
                     url:"/MC/Lista",
                     templateUrl:"app/movimientos contables/movimientoscontables.html"
                 })

                 .state("MCEdit",{
                 url:"/MC/Nuevo",
                     templateUrl:"app/movimientos contables/movimientoscontablesEdit.html"
                })

                 .state("reportes",{
                     url:"/Reportes/:EmpresaId",
                     templateUrl:"app/reportes/reportes.html"
                 })

                 .state("config", {
                     url:"/Config/:EmpresaId",
                     templateUrl:"app/configuracion/configuracion.html"

                 })







        }])


    }()


);
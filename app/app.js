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
                     templateUrl:"app/movimientos contables/movimientoscontables.html"
                 })

                 .state("MCEdit",{
                 url:"/MC/Nuevo",
                     templateUrl:"app/movimientos contables/movimientoscontablesEdit.html"
             })





        }])


    }()


);
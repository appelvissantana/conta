/**
 * Created by Esantana on 2/12/2016.
 */

(function(){

        "use strict";
        var app = angular.module("conta",["ui.router", "ngAnimate", "satellizer" ]);

        app.config(["$stateProvider", "$urlRouterProvider","$httpProvider", "$authProvider", "API_URL", function ($stateProvider, $urlRouterProvider, $httpProvider, $authProvider, API_URL)
         {
             $urlRouterProvider.otherwise("/");

             $stateProvider
                 .state("inicio",{
                     url:"/",
                     templateUrl:"app/Sistema/home.html"


                 })

                 .state("Login",{
                     url:"/",
                     templateUrl:"app/Sistema/Login.html",
                     controller: "LoginCtrl"


                 })

                 .state("Register",{
                     url:"/",
                     templateUrl:"app/Sistema/Register.html"

                 })

                 .state("empresas",{
                     url:"/",
                     templateUrl:"app/empresas/empresas.html",
                     controller:"empresasCtrl as vm"

                 })

                 .state("empresaNueva",{
                     url:"/empresa/nueva",
                     templateUrl:"app/empresas/empresasEdit.html"
                 })

                 .state("menu", {
                     url:"/Menu/:EmpresaId",
                     templateUrl: "app/Sistema/Menu.html"
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

                 });

             $authProvider.loginUrl = API_URL + "/login";
             $authProvider.signupUrl = API_URL + "/register";

             $httpProvider.interceptors.push("authInterceptor");

        }])


            .constant("API_URL", "http://localhost:3000")

            .run(function ($window) {
                var params = $window.location.search.substring(1);

                if (params && $window.opener && $window.opener.location.origin === $window.location.origin) {
                    var pair = params.split('=');
                    var code = decodeURIComponent(pair[1]);

                    $window.opener.postMessage(code, $window.location.origin);
                }
            });


    }()


);
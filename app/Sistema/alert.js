/**
 * Created by Esantana on 3/23/2016.
 */
(function(){

    "use strict";
    angular.module('conta').service('alert', alert);

        function alert($rootScope, $timeout) {
        var alertTimeout;


        return function(type, title, message, timeout) {
            $rootScope.alert = {
                hasBeenShown: true,
                show: true,
                type: type,
                message: message,
                title: title
            };
            $timeout.cancel(alertTimeout);
            alertTimeout = $timeout(function() {
                $rootScope.alert.show = false;
            }, timeout || 2000);
        }


    }



}());
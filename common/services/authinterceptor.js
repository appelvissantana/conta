/**
 * Created by Esantana on 3/23/2016.
 */
(function(){

        "use strict";

        angular.module('conta').factory('authInterceptor', function(authToken) {
            return {
                request: function(config) {
                    var token = authToken.getToken();

                    if (token)
                        config.headers.Authorization = 'Bearer ' + token;

                    return config;
                },
                response: function(response) {
                    return response;
                }
            };
        });


    }()


);
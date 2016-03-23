/**
 * Created by Esantana on 3/23/2016.
 */
(function(){

        'use strict';

        angular.module('conta').service('auth', function auth($http, API_URL, authToken, $state) {

            function authSuccessful(res) {
                authToken.setToken(res.token);
                $state.go('main');
            }

            this.login = function (email, password) {
                return $http.post(API_URL + 'login', {
                    email: email,
                    password: password
                }).success(authSuccessful);
            }

            this.register = function (email, password) {
                return $http.post(API_URL + 'register', {
                    email: email,
                    password: password
                }).success(authSuccessful);
            }



        });


    }()


);
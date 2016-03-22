/**
 * Created by Esantana on 3/22/2016.
 */

(function(){
    "use strict";

    angular
        .module("conta")
        .controller("MainCtrl",["userAccount", MainCtrl]);

    function MainCtrl(userAccount){

        var vm = this;
        vm.isLoggedIn = false;
        vm.message = '';
        vm.userData = {
            userName: '',
            email:'',
            password:''
        };

        vm.Login = function (){
            vm.userData.grant_type = "password";
            vm.userData.userName = vm.userData.email;

            userAccount.login.loginUser(vm.userData, function(data){
                vm.isLoggedIn = true;
                vm.message = "";
                vm.password = "";
                vm.token = data.access_token;
            },
            function (response){
                vm.password = "";
                vm.isLoggedIn = false;
                vm.message = response.statusText + "\r\n";

                if (response.data.exceptionMessage)
                    vm.message += response.data.exceptionMessage;
                if (response.data.error)
                    vm.message += response.data.error;

            }

            )



        }



    }



}());

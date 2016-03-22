/**
 * Created by Esantana on 3/22/2016.
 */

(function(){

    angular
        .module("common.services")
        .factory("userAccount",["$resource","appSetting", userAccount]);

        function userAccount($resource, appSetting){
            return{
                login: $resource(appSetting.serverPath + "/Token", null, {
                    'loginUser' :{
                        method : 'POST',
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                        transformRequest: function(data, headersGetter){
                            var str = [];
                            for (var d in data)
                                str.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));

                            return str.json("&");
                        }
                    }
                })

            }


        }


}());
/**
 * Created by elvissantana on 3/24/16.
 */
(function () {
    "use strict";

    angular
        .module("common.services",
            ["ngResource"])
        .constant("appSettings",
            {
                serverPath: "http://localhost:3000"
            });
}());

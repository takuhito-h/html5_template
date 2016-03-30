(function(global){
    "use strict";

    var Marionette = require("backbone.marionette");

    var AlertTest = Marionette.ItemView.extend({
        initialize: function(){
            alert("aa");
        }
    });

    module.exports = AlertTest;
})(window);
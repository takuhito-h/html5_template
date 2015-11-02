(function(global){
    "use strict";

    var _          = require('lodash');
    var Backbone   = require('backbone');
    var Marionette = require('backbone.marionette');
    var $          = require('jquery');

    var AlertTest = Marionette.ItemView.extend({
        initialize: function(){
            alert('aa');
        }
    });

    module.exports = AlertTest;
})(window);
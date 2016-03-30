/*(function(global){
    "use strict";

    var Marionette = require("backbone.marionette");

    var Template = Marionette.ItemView.extend({
        initialize: function(){
        }
    });

    if(global.openers === undefined){
        global.openers = {};
    }

    if(global.openers.view === undefined){
        global.openers.view = {};
    }

    global.openers.view.template = Template;

})(window);*/
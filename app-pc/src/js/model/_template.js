/*(function(global){

    "use strict";

    var Backbone = require("backbone");

    var TemplateModel = Backbone.Model.extend({
    });

    if(global.openers === undefined){
        global.openers = {};
    }

    if(global.openers.model === undefined){
        global.openers.model = {};
    }

    global.openers.model.templateModel = TemplateModel;

})(window);*/
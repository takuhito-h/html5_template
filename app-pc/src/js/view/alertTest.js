"use strict";

import Marionette from "backbone.marionette";

const AlertTest = Marionette.View.extend({
    initialize : function(){
        alert("aa");
    }
});

module.exports = AlertTest;
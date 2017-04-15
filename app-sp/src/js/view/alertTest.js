"use strict";

const Marionette = require("backbone.marionette");

const AlertTest = Marionette.View.extend({
    initialize: function(){
        alert("aa");
    }
});

module.exports = AlertTest;
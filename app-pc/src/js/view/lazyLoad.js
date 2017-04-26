"use strict";

import Marionette from "backbone.marionette";
import LazyLoadJs from "vanilla-lazyload";

const Lazyload = Marionette.View.extend({
    initialize : function(){
        var myLazyLoad = new LazyLoadJs({
            container : this.el
        });
    }
});

module.exports = Lazyload;
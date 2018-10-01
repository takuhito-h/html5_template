"use strict";

import LazyLoadJs from "vanilla-lazyload";

const Lazyload = class{
    constructor(element, setting) {
        var myLazyLoad = new LazyLoadJs({
            container: element
        });
    }
};

module.exports = Lazyload;

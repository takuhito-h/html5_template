"use strict";

import LazyLoadJs from "vanilla-lazyload";

const Lazyload = class{
    constructor(element, setting) {
        const myLazyLoad = new LazyLoadJs({
            container: element
        });
    }
};

module.exports = Lazyload;

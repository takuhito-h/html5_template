"use strict";

import LazyLoadJs from "vanilla-lazyload";

export default class{
    constructor(element, setting) {
        const myLazyLoad = new LazyLoadJs({
            container: element
        });
    }
};

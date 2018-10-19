"use strict";

import $ from "jquery";

const Drawer = class{
    constructor(element, setting) {
        this.rootElement = $(element);
        this.targetQuery = {
            show: ".js-drawer-show",
            hide: ".js-drawer-hide"
        };
        this.switchClass = "is-drawer-active";

        this.$showDrawer = $(this.targetQuery.show);
        this.$hideDrawer = $(this.targetQuery.hide);

        this.$showDrawer.on("click", ev => this.show(ev));
        this.$hideDrawer.on("click", ev => this.hide(ev));
    }
    show(ev) {
        console.log(this);
        this.rootElement.addClass(this.switchClass);

        ev.preventDefault();
    }
    hide(ev) {
        this.rootElement.removeClass(this.switchClass);

        ev.preventDefault();
    }
};

module.exports = Drawer;

"use strict";

import $ from "jquery";

const Drawer = class{
    constructor(element, setting) {
        this.setting = {
            "target_query": {
                show: ".js-drawer-show",
                hide: ".js-drawer-hide"
            },
            "switch_class": "is-drawer-active"
        };

        this.$root_element = $(element);
        this.$show_drawer = $(this.setting.target_query.show);
        this.$hide_drawer = $(this.setting.target_query.hide);

        this.$show_drawer.on("click", ev => this.show(ev));
        this.$hide_drawer.on("click", ev => this.hide(ev));
    }
    show(ev) {
        this.$root_element.addClass(this.setting.switch_class);

        ev.preventDefault();
    }
    hide(ev) {
        this.$root_element.removeClass(this.setting.switch_class);

        ev.preventDefault();
    }
};

module.exports = Drawer;

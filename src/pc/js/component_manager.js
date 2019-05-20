"use strict";

import _ from "lodash";

/**
 * component_settingを元にviewインスタンスを生成
 */
export default class ComponentsManager {
    constructor(path, component_setting) {
        this.components = {};
        this.component_setting = component_setting;

        _.each(this.component_setting, (value, name) => {
            this.components[name] = require("./view/" + name);
            this.run(value, name);
        });
    }
    run(value, name) {
        _.each(document.querySelectorAll(value.target), (element, i) => {
            new this.components[name](element, value.settings);
        });
    }
};

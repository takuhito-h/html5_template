"use strict";

import _ from "lodash";
import COMPONENT_DEFS from "./_setting_component_defs.json";

/*------------------------------------------------------------------
    COMPONENT_DEFSを元にコンポーネント読み込み
------------------------------------------------------------------*/
const ComponentsRead = function(){
    var returnComponents = {};

    _.each(COMPONENT_DEFS, function(val, name){
        returnComponents[name] = require("./view/" + name);
    });

    return returnComponents;
}

/*------------------------------------------------------------------
    COMPONENT_DEFSを元にviewインスタンスを生成
------------------------------------------------------------------*/
const ComponentsRun = function (){
    const components = ComponentsRead();

    _.each(COMPONENT_DEFS, function(val, name){
        _.each(document.querySelectorAll(val.target), function(element, i){
            new components[name](element, val.settings);
        });
    });
}

module.exports = ComponentsRun;

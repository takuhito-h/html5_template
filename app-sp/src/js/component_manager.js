"use strict";

const _ = require("lodash");
const COMPONENT_DEFS = require("./_setting_component_defs");

/*------------------------------------------------------------------
    COMPONENT_DEFSを元にコンポーネント読み込み
------------------------------------------------------------------*/
function ComponentsRead(){
    const returnComponents = {};

    _.each(COMPONENT_DEFS, function(val, name){
        returnComponents[name] = require("./view/" + name);
    });

    return returnComponents;
}

/*------------------------------------------------------------------
    COMPONENT_DEFSを元にviewインスタンスを生成
------------------------------------------------------------------*/
function ComponentsRun(){
    const components = ComponentsRead();

    _.each(COMPONENT_DEFS, function(val, name){
        _.each(document.querySelectorAll(val.target), function(element, i){
            new components[name]({
                el      : element,
                options : val.settings
            });
        });
    });
}

module.exports = ComponentsRun;

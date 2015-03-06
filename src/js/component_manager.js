(function(global){

    "use strict";

    var COMPONENT_DEFS = {
        "flash_message": {
            query: ".js-flash_message",
            component: "flash_message",
            settings: {
                wait  : 4000,
                speed : 500
            }
        }
    };

    function ComponentsRun(){
        _.each(COMPONENT_DEFS, function(val, name){
            _.each(document.querySelectorAll(val.query), function(element, index){
                global.openers[val.component](element, val.settings);
            });
        });
    }

    if(global.openers === undefined){
        global.openers = {};
    }

    global.openers.components_run = ComponentsRun;

})(window);
(function(global){

    "use strict";

    var MODULE_DEFS = {
        "flash_message": {
            query: ".js-flash_message",
            module: "flash_message"
        }
    };

    function modules_run(){
        $.each(MODULE_DEFS, function(name, val){
            global.mod[val.module](val.query);
        });
    }

    if(!global.assoview){
        global.assoview = {};
    }

    global.assoview.modules_run = modules_run;

})(window);
(function(global){
    "use strict";

    /*------------------------------------------------------------------
        コンポーネントの設定
    ------------------------------------------------------------------*/
    var COMPONENT_DEFS = {
        /*galleryModal : {
            view     : "galleryModal",
            query    : ".js-gallery-modal-wrapper",
            settings : {}
        }*/
    };

    /*------------------------------------------------------------------
        COMPONENT_DEFSを元にviewインスタンスを生成
    ------------------------------------------------------------------*/
    function ComponentsRun(){
        _.each(COMPONENT_DEFS, function(val, name){

            _.each(document.querySelectorAll(val.query), function(element, i){
                new global.openers.view[val.view]({
                    el: element,
                    options: val.settings
                });
            });

        });
    }

    if(global.openers === undefined){
        global.openers = {};
    }

    global.openers.componentsRun = ComponentsRun;

})(window);

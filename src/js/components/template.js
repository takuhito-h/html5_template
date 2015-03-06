(function(global){

    "use strict";

    function Template(){
        var _$container;

        function initialize(container, params){
            _$container = $(container);

            _function();
        }

        function _function(){
        }

        function destroy(){
        }

        initialize.apply(this, arguments);

        return{
            destroy : destroy
        };
    }

    if(global.openers === undefined){
        global.openers = {};
    }

    global.openers.template = Template;

})(window);
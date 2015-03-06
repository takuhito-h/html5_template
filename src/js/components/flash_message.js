(function(global){

    "use strict";

    function FlashMessage(){
        var _$container;

        function initialize(container, settings){
            _$container = $(container);

            _flash(settings);
        }

        function _flash(settings){
            setTimeout(function(){

                _$container.css({
                    "-webkit-transform": "translate3d(0px,-66px,0px)",
                    "-webkit-transition-duration": settings.speed + "ms"
                }).one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
                    _$container.css("display", "none");
                });

            }, settings.wait);
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

    global.openers.flash_message = FlashMessage;

})(window);
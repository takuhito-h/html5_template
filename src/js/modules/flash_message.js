(function(global){

  "use strict";

  function FlashMessage(){
    var _$container;

    return{
      destroy : destroy
    };

    function initialize(container, params){
      _$container = $(container);
      _flash(4000);
    }

    function _flash(ms){
      setTimeout(function(){
        _$container.css({
          "-webkit-transform": "translate3d(0px,-66px,0px)",
          "-webkit-transition-duration": "0.5s"
        }).on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
          function(){
            _$container.css("display", "none");
          }
        );
      }, ms);
    }

    function destroy(){
    }

    initialize.apply(this, arguments);
  }

  if(global.component === null){
    global.component = {};
  }

  global.component.flash_message = FlashMessage;

})(window);
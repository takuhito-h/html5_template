(function(global){

  "use strict";

  var COMPONENT_DEFS = {
    "flash_message": {
      query: ".js-flash_message",
      component: "flash_message"
    }
  };

  function components_run(){
    $.each(COMPONENT_DEFS, function(name, val){
      $(val.query).each(function(index, element){
        global.component[val.component](element);
      });
    });
  }

  if(!global.hogehoge){
    global.hogehoge = {};
  }

  global.hogehoge.components_run = components_run;

})(window);
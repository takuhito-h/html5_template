(function(global){

  "use strict";

  var COMPONENT_DEFS = {
    "flash_message": {
      query: ".js-flash_message",
      component: "flash_message"
    }
  };

  function ComponentsRun(){
    console.log(COMPONENT_DEFS);
    $.each(COMPONENT_DEFS, function(name, val){
      $(val.query).each(function(index, element){
        global.component[val.component](element);
      });
    });
  }

  // global.hogehoge.components_run = components_run;
  module.exports = ComponentsRun;

})(window);
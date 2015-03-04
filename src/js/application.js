(function(global){

  "use strict";

  var $ = require('jquery');

  global.hogehoge = {
    components_run : require("./component_manager")
  };

  global.component = {
    flash_message : require("./components/flash_message")
  };

  console.log(global.hogehoge, global.component);

  global.hogehoge.components_run();

})(window);
"use strict";

import manager from "./component_manager";
import COMPONENT_DEFS from "./_setting_component_defs.json";

new manager("./view/", COMPONENT_DEFS);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Log = require("./logger");
//import * as Event from '../commons/event'
var logger = new Log.Logger();
//var events = new Event.Event()
try {
    logger.info("Player Paused", { "hit_pause": [10] });
}
catch (err) {
    console.error(err);
}
//# sourceMappingURL=main.js.map
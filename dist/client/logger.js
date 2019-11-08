"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const environment_1 = require("./common/environment");
const node_fetch_1 = require("node-fetch");
class Logger {
    constructor() {
    }
    debug(primaryMessage, ...supportingData) {
        this.emitLogMessage("debug", primaryMessage, supportingData);
    }
    warn(primaryMessage, ...supportingData) {
        this.emitLogMessage("warn", primaryMessage, supportingData);
    }
    error(primaryMessage, ...supportingData) {
        this.emitLogMessage("error", primaryMessage, supportingData);
    }
    info(primaryMessage, ...supportingData) {
        this.emitLogMessage("info", primaryMessage, supportingData);
    }
    emitLogMessage(msgType, msg, supportingDetails) {
        var event;
        event.
        ;
        var body = { 'msgType': msgType,
            'msg': msg,
            'events': supportingDetails[0]
        };
        console.log(body);
        node_fetch_1.default(environment_1.environment.log.url + '/events', {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'POST',
            body: JSON.stringify(body)
        }).then(response => response.json())
            .then(json => console.log(json))
            .catch(error => {
        });
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map
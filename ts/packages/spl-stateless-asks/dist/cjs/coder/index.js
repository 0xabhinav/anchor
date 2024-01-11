"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplStatelessAsksCoder = void 0;
const accounts_1 = require("./accounts");
const events_1 = require("./events");
const instructions_1 = require("./instructions");
const state_1 = require("./state");
const types_1 = require("./types");
/**
 * Coder for SplStatelessAsks
 */
class SplStatelessAsksCoder {
    constructor(idl) {
        this.accounts = new accounts_1.SplStatelessAsksAccountsCoder(idl);
        this.events = new events_1.SplStatelessAsksEventsCoder(idl);
        this.instruction = new instructions_1.SplStatelessAsksInstructionCoder(idl);
        this.state = new state_1.SplStatelessAsksStateCoder(idl);
        this.types = new types_1.SplStatelessAsksTypesCoder(idl);
    }
}
exports.SplStatelessAsksCoder = SplStatelessAsksCoder;
//# sourceMappingURL=index.js.map
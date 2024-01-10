"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplStakePoolCoder = void 0;
const accounts_1 = require("./accounts");
const events_1 = require("./events");
const instructions_1 = require("./instructions");
const state_1 = require("./state");
const types_1 = require("./types");
/**
 * Coder for SplStakePool
 */
class SplStakePoolCoder {
    constructor(idl) {
        this.accounts = new accounts_1.SplStakePoolAccountsCoder(idl);
        this.events = new events_1.SplStakePoolEventsCoder(idl);
        this.instruction = new instructions_1.SplStakePoolInstructionCoder(idl);
        this.state = new state_1.SplStakePoolStateCoder(idl);
        this.types = new types_1.SplStakePoolTypesCoder(idl);
    }
}
exports.SplStakePoolCoder = SplStakePoolCoder;
//# sourceMappingURL=index.js.map
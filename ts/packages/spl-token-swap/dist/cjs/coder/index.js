"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplTokenSwapCoder = void 0;
const accounts_1 = require("./accounts");
const events_1 = require("./events");
const instructions_1 = require("./instructions");
const state_1 = require("./state");
const types_1 = require("./types");
/**
 * Coder for SplTokenSwap
 */
class SplTokenSwapCoder {
    constructor(idl) {
        this.accounts = new accounts_1.SplTokenSwapAccountsCoder(idl);
        this.events = new events_1.SplTokenSwapEventsCoder(idl);
        this.instruction = new instructions_1.SplTokenSwapInstructionCoder(idl);
        this.state = new state_1.SplTokenSwapStateCoder(idl);
        this.types = new types_1.SplTokenSwapTypesCoder(idl);
    }
}
exports.SplTokenSwapCoder = SplTokenSwapCoder;
//# sourceMappingURL=index.js.map
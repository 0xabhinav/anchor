"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplBinaryOptionCoder = void 0;
const accounts_1 = require("./accounts");
const events_1 = require("./events");
const instructions_1 = require("./instructions");
const state_1 = require("./state");
const types_1 = require("./types");
/**
 * Coder for SplBinaryOption
 */
class SplBinaryOptionCoder {
    constructor(idl) {
        this.accounts = new accounts_1.SplBinaryOptionAccountsCoder(idl);
        this.events = new events_1.SplBinaryOptionEventsCoder(idl);
        this.instruction = new instructions_1.SplBinaryOptionInstructionCoder(idl);
        this.state = new state_1.SplBinaryOptionStateCoder(idl);
        this.types = new types_1.SplBinaryOptionTypesCoder(idl);
    }
}
exports.SplBinaryOptionCoder = SplBinaryOptionCoder;
//# sourceMappingURL=index.js.map
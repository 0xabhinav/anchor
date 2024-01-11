"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplMemoCoder = void 0;
const accounts_1 = require("./accounts");
const events_1 = require("./events");
const instructions_1 = require("./instructions");
const state_1 = require("./state");
const types_1 = require("./types");
/**
 * Coder for SplMemo
 */
class SplMemoCoder {
    constructor(idl) {
        this.accounts = new accounts_1.SplMemoAccountsCoder(idl);
        this.events = new events_1.SplMemoEventsCoder(idl);
        this.instruction = new instructions_1.SplMemoInstructionCoder(idl);
        this.state = new state_1.SplMemoStateCoder(idl);
        this.types = new types_1.SplMemoTypesCoder(idl);
    }
}
exports.SplMemoCoder = SplMemoCoder;
//# sourceMappingURL=index.js.map
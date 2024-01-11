"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplBinaryOraclePairCoder = void 0;
const accounts_1 = require("./accounts");
const events_1 = require("./events");
const instructions_1 = require("./instructions");
const state_1 = require("./state");
const types_1 = require("./types");
/**
 * Coder for SplBinaryOraclePair
 */
class SplBinaryOraclePairCoder {
    constructor(idl) {
        this.accounts = new accounts_1.SplBinaryOraclePairAccountsCoder(idl);
        this.events = new events_1.SplBinaryOraclePairEventsCoder(idl);
        this.instruction = new instructions_1.SplBinaryOraclePairInstructionCoder(idl);
        this.state = new state_1.SplBinaryOraclePairStateCoder(idl);
        this.types = new types_1.SplBinaryOraclePairTypesCoder(idl);
    }
}
exports.SplBinaryOraclePairCoder = SplBinaryOraclePairCoder;
//# sourceMappingURL=index.js.map
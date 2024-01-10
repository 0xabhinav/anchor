"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplTokenLendingCoder = void 0;
const accounts_1 = require("./accounts");
const events_1 = require("./events");
const instructions_1 = require("./instructions");
const state_1 = require("./state");
const types_1 = require("./types");
/**
 * Coder for SplTokenLending
 */
class SplTokenLendingCoder {
    constructor(idl) {
        this.accounts = new accounts_1.SplTokenLendingAccountsCoder(idl);
        this.events = new events_1.SplTokenLendingEventsCoder(idl);
        this.instruction = new instructions_1.SplTokenLendingInstructionCoder(idl);
        this.state = new state_1.SplTokenLendingStateCoder(idl);
        this.types = new types_1.SplTokenLendingTypesCoder(idl);
    }
}
exports.SplTokenLendingCoder = SplTokenLendingCoder;
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplGovernanceCoder = void 0;
const accounts_1 = require("./accounts");
const events_1 = require("./events");
const instructions_1 = require("./instructions");
const state_1 = require("./state");
const types_1 = require("./types");
/**
 * Coder for SplGovernance
 */
class SplGovernanceCoder {
    constructor(idl) {
        this.accounts = new accounts_1.SplGovernanceAccountsCoder(idl);
        this.events = new events_1.SplGovernanceEventsCoder(idl);
        this.instruction = new instructions_1.SplGovernanceInstructionCoder(idl);
        this.state = new state_1.SplGovernanceStateCoder(idl);
        this.types = new types_1.SplGovernanceTypesCoder(idl);
    }
}
exports.SplGovernanceCoder = SplGovernanceCoder;
//# sourceMappingURL=index.js.map
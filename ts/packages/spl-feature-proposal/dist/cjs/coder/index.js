"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplFeatureProposalCoder = void 0;
const accounts_1 = require("./accounts");
const events_1 = require("./events");
const instructions_1 = require("./instructions");
const state_1 = require("./state");
const types_1 = require("./types");
/**
 * Coder for SplFeatureProposal
 */
class SplFeatureProposalCoder {
    constructor(idl) {
        this.accounts = new accounts_1.SplFeatureProposalAccountsCoder(idl);
        this.events = new events_1.SplFeatureProposalEventsCoder(idl);
        this.instruction = new instructions_1.SplFeatureProposalInstructionCoder(idl);
        this.state = new state_1.SplFeatureProposalStateCoder(idl);
        this.types = new types_1.SplFeatureProposalTypesCoder(idl);
    }
}
exports.SplFeatureProposalCoder = SplFeatureProposalCoder;
//# sourceMappingURL=index.js.map
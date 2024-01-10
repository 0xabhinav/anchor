"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplNameServiceCoder = void 0;
const accounts_1 = require("./accounts");
const events_1 = require("./events");
const instructions_1 = require("./instructions");
const state_1 = require("./state");
const types_1 = require("./types");
/**
 * Coder for SplNameService
 */
class SplNameServiceCoder {
    constructor(idl) {
        this.accounts = new accounts_1.SplNameServiceAccountsCoder(idl);
        this.events = new events_1.SplNameServiceEventsCoder(idl);
        this.instruction = new instructions_1.SplNameServiceInstructionCoder(idl);
        this.state = new state_1.SplNameServiceStateCoder(idl);
        this.types = new types_1.SplNameServiceTypesCoder(idl);
    }
}
exports.SplNameServiceCoder = SplNameServiceCoder;
//# sourceMappingURL=index.js.map
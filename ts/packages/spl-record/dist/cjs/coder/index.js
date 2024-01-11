"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplRecordCoder = void 0;
const accounts_1 = require("./accounts");
const events_1 = require("./events");
const instructions_1 = require("./instructions");
const state_1 = require("./state");
const types_1 = require("./types");
/**
 * Coder for SplRecord
 */
class SplRecordCoder {
    constructor(idl) {
        this.accounts = new accounts_1.SplRecordAccountsCoder(idl);
        this.events = new events_1.SplRecordEventsCoder(idl);
        this.instruction = new instructions_1.SplRecordInstructionCoder(idl);
        this.state = new state_1.SplRecordStateCoder(idl);
        this.types = new types_1.SplRecordTypesCoder(idl);
    }
}
exports.SplRecordCoder = SplRecordCoder;
//# sourceMappingURL=index.js.map
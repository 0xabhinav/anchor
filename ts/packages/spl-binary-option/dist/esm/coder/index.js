import { SplBinaryOptionAccountsCoder } from "./accounts";
import { SplBinaryOptionEventsCoder } from "./events";
import { SplBinaryOptionInstructionCoder } from "./instructions";
import { SplBinaryOptionStateCoder } from "./state";
import { SplBinaryOptionTypesCoder } from "./types";
/**
 * Coder for SplBinaryOption
 */
export class SplBinaryOptionCoder {
    constructor(idl) {
        this.accounts = new SplBinaryOptionAccountsCoder(idl);
        this.events = new SplBinaryOptionEventsCoder(idl);
        this.instruction = new SplBinaryOptionInstructionCoder(idl);
        this.state = new SplBinaryOptionStateCoder(idl);
        this.types = new SplBinaryOptionTypesCoder(idl);
    }
}
//# sourceMappingURL=index.js.map
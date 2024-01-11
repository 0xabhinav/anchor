import { SplBinaryOraclePairAccountsCoder } from "./accounts";
import { SplBinaryOraclePairEventsCoder } from "./events";
import { SplBinaryOraclePairInstructionCoder } from "./instructions";
import { SplBinaryOraclePairStateCoder } from "./state";
import { SplBinaryOraclePairTypesCoder } from "./types";
/**
 * Coder for SplBinaryOraclePair
 */
export class SplBinaryOraclePairCoder {
    constructor(idl) {
        this.accounts = new SplBinaryOraclePairAccountsCoder(idl);
        this.events = new SplBinaryOraclePairEventsCoder(idl);
        this.instruction = new SplBinaryOraclePairInstructionCoder(idl);
        this.state = new SplBinaryOraclePairStateCoder(idl);
        this.types = new SplBinaryOraclePairTypesCoder(idl);
    }
}
//# sourceMappingURL=index.js.map
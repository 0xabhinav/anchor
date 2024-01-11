import { SplMemoAccountsCoder } from "./accounts";
import { SplMemoEventsCoder } from "./events";
import { SplMemoInstructionCoder } from "./instructions";
import { SplMemoStateCoder } from "./state";
import { SplMemoTypesCoder } from "./types";
/**
 * Coder for SplMemo
 */
export class SplMemoCoder {
    constructor(idl) {
        this.accounts = new SplMemoAccountsCoder(idl);
        this.events = new SplMemoEventsCoder(idl);
        this.instruction = new SplMemoInstructionCoder(idl);
        this.state = new SplMemoStateCoder(idl);
        this.types = new SplMemoTypesCoder(idl);
    }
}
//# sourceMappingURL=index.js.map
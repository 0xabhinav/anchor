import { SplTokenLendingAccountsCoder } from "./accounts";
import { SplTokenLendingEventsCoder } from "./events";
import { SplTokenLendingInstructionCoder } from "./instructions";
import { SplTokenLendingStateCoder } from "./state";
import { SplTokenLendingTypesCoder } from "./types";
/**
 * Coder for SplTokenLending
 */
export class SplTokenLendingCoder {
    constructor(idl) {
        this.accounts = new SplTokenLendingAccountsCoder(idl);
        this.events = new SplTokenLendingEventsCoder(idl);
        this.instruction = new SplTokenLendingInstructionCoder(idl);
        this.state = new SplTokenLendingStateCoder(idl);
        this.types = new SplTokenLendingTypesCoder(idl);
    }
}
//# sourceMappingURL=index.js.map
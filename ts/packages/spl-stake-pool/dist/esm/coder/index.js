import { SplStakePoolAccountsCoder } from "./accounts";
import { SplStakePoolEventsCoder } from "./events";
import { SplStakePoolInstructionCoder } from "./instructions";
import { SplStakePoolStateCoder } from "./state";
import { SplStakePoolTypesCoder } from "./types";
/**
 * Coder for SplStakePool
 */
export class SplStakePoolCoder {
    constructor(idl) {
        this.accounts = new SplStakePoolAccountsCoder(idl);
        this.events = new SplStakePoolEventsCoder(idl);
        this.instruction = new SplStakePoolInstructionCoder(idl);
        this.state = new SplStakePoolStateCoder(idl);
        this.types = new SplStakePoolTypesCoder(idl);
    }
}
//# sourceMappingURL=index.js.map
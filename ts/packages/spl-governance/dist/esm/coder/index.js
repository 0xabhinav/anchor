import { SplGovernanceAccountsCoder } from "./accounts";
import { SplGovernanceEventsCoder } from "./events";
import { SplGovernanceInstructionCoder } from "./instructions";
import { SplGovernanceStateCoder } from "./state";
import { SplGovernanceTypesCoder } from "./types";
/**
 * Coder for SplGovernance
 */
export class SplGovernanceCoder {
    constructor(idl) {
        this.accounts = new SplGovernanceAccountsCoder(idl);
        this.events = new SplGovernanceEventsCoder(idl);
        this.instruction = new SplGovernanceInstructionCoder(idl);
        this.state = new SplGovernanceStateCoder(idl);
        this.types = new SplGovernanceTypesCoder(idl);
    }
}
//# sourceMappingURL=index.js.map
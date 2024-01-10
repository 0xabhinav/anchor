import { SplFeatureProposalAccountsCoder } from "./accounts";
import { SplFeatureProposalEventsCoder } from "./events";
import { SplFeatureProposalInstructionCoder } from "./instructions";
import { SplFeatureProposalStateCoder } from "./state";
import { SplFeatureProposalTypesCoder } from "./types";
/**
 * Coder for SplFeatureProposal
 */
export class SplFeatureProposalCoder {
    constructor(idl) {
        this.accounts = new SplFeatureProposalAccountsCoder(idl);
        this.events = new SplFeatureProposalEventsCoder(idl);
        this.instruction = new SplFeatureProposalInstructionCoder(idl);
        this.state = new SplFeatureProposalStateCoder(idl);
        this.types = new SplFeatureProposalTypesCoder(idl);
    }
}
//# sourceMappingURL=index.js.map
import { Idl, Coder } from "@coral-xyz/anchor";
import { SplFeatureProposalAccountsCoder } from "./accounts";
import { SplFeatureProposalEventsCoder } from "./events";
import { SplFeatureProposalInstructionCoder } from "./instructions";
import { SplFeatureProposalStateCoder } from "./state";
import { SplFeatureProposalTypesCoder } from "./types";
/**
 * Coder for SplFeatureProposal
 */
export declare class SplFeatureProposalCoder implements Coder {
    readonly accounts: SplFeatureProposalAccountsCoder;
    readonly events: SplFeatureProposalEventsCoder;
    readonly instruction: SplFeatureProposalInstructionCoder;
    readonly state: SplFeatureProposalStateCoder;
    readonly types: SplFeatureProposalTypesCoder;
    constructor(idl: Idl);
}
//# sourceMappingURL=index.d.ts.map
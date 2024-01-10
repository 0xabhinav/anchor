import { Idl, Coder } from "@coral-xyz/anchor";
import { SplGovernanceAccountsCoder } from "./accounts";
import { SplGovernanceEventsCoder } from "./events";
import { SplGovernanceInstructionCoder } from "./instructions";
import { SplGovernanceStateCoder } from "./state";
import { SplGovernanceTypesCoder } from "./types";
/**
 * Coder for SplGovernance
 */
export declare class SplGovernanceCoder implements Coder {
    readonly accounts: SplGovernanceAccountsCoder;
    readonly events: SplGovernanceEventsCoder;
    readonly instruction: SplGovernanceInstructionCoder;
    readonly state: SplGovernanceStateCoder;
    readonly types: SplGovernanceTypesCoder;
    constructor(idl: Idl);
}
//# sourceMappingURL=index.d.ts.map
import { Idl, Coder } from "@coral-xyz/anchor";
import { SplStakePoolAccountsCoder } from "./accounts";
import { SplStakePoolEventsCoder } from "./events";
import { SplStakePoolInstructionCoder } from "./instructions";
import { SplStakePoolStateCoder } from "./state";
import { SplStakePoolTypesCoder } from "./types";
/**
 * Coder for SplStakePool
 */
export declare class SplStakePoolCoder implements Coder {
    readonly accounts: SplStakePoolAccountsCoder;
    readonly events: SplStakePoolEventsCoder;
    readonly instruction: SplStakePoolInstructionCoder;
    readonly state: SplStakePoolStateCoder;
    readonly types: SplStakePoolTypesCoder;
    constructor(idl: Idl);
}
//# sourceMappingURL=index.d.ts.map
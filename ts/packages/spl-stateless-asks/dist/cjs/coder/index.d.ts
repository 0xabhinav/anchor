import { Idl, Coder } from "@coral-xyz/anchor";
import { SplStatelessAsksAccountsCoder } from "./accounts";
import { SplStatelessAsksEventsCoder } from "./events";
import { SplStatelessAsksInstructionCoder } from "./instructions";
import { SplStatelessAsksStateCoder } from "./state";
import { SplStatelessAsksTypesCoder } from "./types";
/**
 * Coder for SplStatelessAsks
 */
export declare class SplStatelessAsksCoder implements Coder {
    readonly accounts: SplStatelessAsksAccountsCoder;
    readonly events: SplStatelessAsksEventsCoder;
    readonly instruction: SplStatelessAsksInstructionCoder;
    readonly state: SplStatelessAsksStateCoder;
    readonly types: SplStatelessAsksTypesCoder;
    constructor(idl: Idl);
}
//# sourceMappingURL=index.d.ts.map
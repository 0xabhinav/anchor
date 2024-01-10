import { Idl, Coder } from "@coral-xyz/anchor";
import { SplTokenSwapAccountsCoder } from "./accounts";
import { SplTokenSwapEventsCoder } from "./events";
import { SplTokenSwapInstructionCoder } from "./instructions";
import { SplTokenSwapStateCoder } from "./state";
import { SplTokenSwapTypesCoder } from "./types";
/**
 * Coder for SplTokenSwap
 */
export declare class SplTokenSwapCoder implements Coder {
    readonly accounts: SplTokenSwapAccountsCoder;
    readonly events: SplTokenSwapEventsCoder;
    readonly instruction: SplTokenSwapInstructionCoder;
    readonly state: SplTokenSwapStateCoder;
    readonly types: SplTokenSwapTypesCoder;
    constructor(idl: Idl);
}
//# sourceMappingURL=index.d.ts.map
import { Idl, Coder } from "@coral-xyz/anchor";
import { SplBinaryOraclePairAccountsCoder } from "./accounts";
import { SplBinaryOraclePairEventsCoder } from "./events";
import { SplBinaryOraclePairInstructionCoder } from "./instructions";
import { SplBinaryOraclePairStateCoder } from "./state";
import { SplBinaryOraclePairTypesCoder } from "./types";
/**
 * Coder for SplBinaryOraclePair
 */
export declare class SplBinaryOraclePairCoder implements Coder {
    readonly accounts: SplBinaryOraclePairAccountsCoder;
    readonly events: SplBinaryOraclePairEventsCoder;
    readonly instruction: SplBinaryOraclePairInstructionCoder;
    readonly state: SplBinaryOraclePairStateCoder;
    readonly types: SplBinaryOraclePairTypesCoder;
    constructor(idl: Idl);
}
//# sourceMappingURL=index.d.ts.map
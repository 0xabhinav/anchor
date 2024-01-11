import { Idl, Coder } from "@coral-xyz/anchor";
import { SplBinaryOptionAccountsCoder } from "./accounts";
import { SplBinaryOptionEventsCoder } from "./events";
import { SplBinaryOptionInstructionCoder } from "./instructions";
import { SplBinaryOptionStateCoder } from "./state";
import { SplBinaryOptionTypesCoder } from "./types";
/**
 * Coder for SplBinaryOption
 */
export declare class SplBinaryOptionCoder implements Coder {
    readonly accounts: SplBinaryOptionAccountsCoder;
    readonly events: SplBinaryOptionEventsCoder;
    readonly instruction: SplBinaryOptionInstructionCoder;
    readonly state: SplBinaryOptionStateCoder;
    readonly types: SplBinaryOptionTypesCoder;
    constructor(idl: Idl);
}
//# sourceMappingURL=index.d.ts.map
import { Idl, Coder } from "@coral-xyz/anchor";
import { SplMemoAccountsCoder } from "./accounts";
import { SplMemoEventsCoder } from "./events";
import { SplMemoInstructionCoder } from "./instructions";
import { SplMemoStateCoder } from "./state";
import { SplMemoTypesCoder } from "./types";
/**
 * Coder for SplMemo
 */
export declare class SplMemoCoder implements Coder {
    readonly accounts: SplMemoAccountsCoder;
    readonly events: SplMemoEventsCoder;
    readonly instruction: SplMemoInstructionCoder;
    readonly state: SplMemoStateCoder;
    readonly types: SplMemoTypesCoder;
    constructor(idl: Idl);
}
//# sourceMappingURL=index.d.ts.map
import { Idl, Coder } from "@coral-xyz/anchor";
import { SplNameServiceAccountsCoder } from "./accounts";
import { SplNameServiceEventsCoder } from "./events";
import { SplNameServiceInstructionCoder } from "./instructions";
import { SplNameServiceStateCoder } from "./state";
import { SplNameServiceTypesCoder } from "./types";
/**
 * Coder for SplNameService
 */
export declare class SplNameServiceCoder implements Coder {
    readonly accounts: SplNameServiceAccountsCoder;
    readonly events: SplNameServiceEventsCoder;
    readonly instruction: SplNameServiceInstructionCoder;
    readonly state: SplNameServiceStateCoder;
    readonly types: SplNameServiceTypesCoder;
    constructor(idl: Idl);
}
//# sourceMappingURL=index.d.ts.map
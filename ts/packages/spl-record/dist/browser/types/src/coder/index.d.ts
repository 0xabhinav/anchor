import { Idl, Coder } from "@coral-xyz/anchor";
import { SplRecordAccountsCoder } from "./accounts";
import { SplRecordEventsCoder } from "./events";
import { SplRecordInstructionCoder } from "./instructions";
import { SplRecordStateCoder } from "./state";
import { SplRecordTypesCoder } from "./types";
/**
 * Coder for SplRecord
 */
export declare class SplRecordCoder implements Coder {
    readonly accounts: SplRecordAccountsCoder;
    readonly events: SplRecordEventsCoder;
    readonly instruction: SplRecordInstructionCoder;
    readonly state: SplRecordStateCoder;
    readonly types: SplRecordTypesCoder;
    constructor(idl: Idl);
}
//# sourceMappingURL=index.d.ts.map
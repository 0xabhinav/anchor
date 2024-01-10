/// <reference types="node" />
import { Idl, InstructionCoder } from "@coral-xyz/anchor";
export declare class SplRecordInstructionCoder implements InstructionCoder {
    constructor(_idl: Idl);
    encode(ixName: string, ix: any): Buffer;
    encodeState(_ixName: string, _ix: any): Buffer;
}
//# sourceMappingURL=instructions.d.ts.map
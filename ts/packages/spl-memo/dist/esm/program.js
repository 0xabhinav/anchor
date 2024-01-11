import { PublicKey } from "@solana/web3.js";
import { Program } from "@coral-xyz/anchor";
import { SplMemoCoder } from "./coder";
export const SPL_MEMO_PROGRAM_ID = new PublicKey("Memo1UhkJRfHyvLMcVucJwxXeuD728EqVDDwQDxFMNo");
export function splMemoProgram(params) {
    var _a;
    return new Program(IDL, (_a = params === null || params === void 0 ? void 0 : params.programId) !== null && _a !== void 0 ? _a : SPL_MEMO_PROGRAM_ID, params === null || params === void 0 ? void 0 : params.provider, new SplMemoCoder(IDL));
}
const IDL = {
    version: "3.0.1",
    name: "spl_memo",
    instructions: [
        {
            name: "addMemo",
            accounts: [],
            args: [
                {
                    name: "memo",
                    type: "string",
                },
            ],
        },
    ],
};
//# sourceMappingURL=program.js.map
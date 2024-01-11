"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splMemoProgram = exports.SPL_MEMO_PROGRAM_ID = void 0;
const web3_js_1 = require("@solana/web3.js");
const anchor_1 = require("@coral-xyz/anchor");
const coder_1 = require("./coder");
exports.SPL_MEMO_PROGRAM_ID = new web3_js_1.PublicKey("Memo1UhkJRfHyvLMcVucJwxXeuD728EqVDDwQDxFMNo");
function splMemoProgram(params) {
    var _a;
    return new anchor_1.Program(IDL, (_a = params === null || params === void 0 ? void 0 : params.programId) !== null && _a !== void 0 ? _a : exports.SPL_MEMO_PROGRAM_ID, params === null || params === void 0 ? void 0 : params.provider, new coder_1.SplMemoCoder(IDL));
}
exports.splMemoProgram = splMemoProgram;
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
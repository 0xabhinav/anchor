"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splStatelessAsksProgram = void 0;
const web3_js_1 = require("@solana/web3.js");
const anchor_1 = require("@coral-xyz/anchor");
const coder_1 = require("./coder");
const SPL_STATELESS_ASKS_PROGRAM_ID = web3_js_1.PublicKey.default;
function splStatelessAsksProgram(params) {
    var _a;
    return new anchor_1.Program(IDL, (_a = params === null || params === void 0 ? void 0 : params.programId) !== null && _a !== void 0 ? _a : SPL_STATELESS_ASKS_PROGRAM_ID, params === null || params === void 0 ? void 0 : params.provider, new coder_1.SplStatelessAsksCoder(IDL));
}
exports.splStatelessAsksProgram = splStatelessAsksProgram;
const IDL = {
    version: "0.1.0",
    name: "spl_stateless_asks",
    instructions: [
        {
            name: "acceptOffer",
            accounts: [
                {
                    name: "makerWallet",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "takerWallet",
                    isMut: false,
                    isSigner: true,
                },
                {
                    name: "makerSrcAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "makerDstAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "takerSrcAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "takerDstAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "makerMint",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "takerMint",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "authority",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "tokenProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "hasMetadata",
                    type: "bool",
                },
                {
                    name: "makerSize",
                    type: "u64",
                },
                {
                    name: "takerSize",
                    type: "u64",
                },
                {
                    name: "bumpSeed",
                    type: "u8",
                },
            ],
        },
    ],
    errors: [
        {
            code: 0,
            name: "PublicKeyMismatch",
            msg: "PublicKeyMismatch",
        },
        {
            code: 1,
            name: "InvalidMintAuthority",
            msg: "InvalidMintAuthority",
        },
        {
            code: 2,
            name: "UninitializedAccount",
            msg: "UninitializedAccount",
        },
        {
            code: 3,
            name: "IncorrectOwner",
            msg: "IncorrectOwner",
        },
        {
            code: 4,
            name: "PublicKeysShouldBeUnique",
            msg: "PublicKeysShouldBeUnique",
        },
        {
            code: 5,
            name: "StatementFalse",
            msg: "StatementFalse",
        },
        {
            code: 6,
            name: "NotRentExempt",
            msg: "NotRentExempt",
        },
        {
            code: 7,
            name: "NumericalOverflow",
            msg: "NumericalOverflow",
        },
    ],
};
//# sourceMappingURL=program.js.map
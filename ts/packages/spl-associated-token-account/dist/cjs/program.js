"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splAssociatedTokenAccountProgram = exports.SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID = void 0;
const web3_js_1 = require("@solana/web3.js");
const anchor_1 = require("@coral-xyz/anchor");
const coder_1 = require("./coder");
exports.SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID = new web3_js_1.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");
function splAssociatedTokenAccountProgram(params) {
    var _a;
    return new anchor_1.Program(IDL, (_a = params === null || params === void 0 ? void 0 : params.programId) !== null && _a !== void 0 ? _a : exports.SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID, params === null || params === void 0 ? void 0 : params.provider, new coder_1.SplAssociatedTokenAccountCoder(IDL));
}
exports.splAssociatedTokenAccountProgram = splAssociatedTokenAccountProgram;
const IDL = {
    version: "1.1.1",
    name: "spl_associated_token_account",
    instructions: [
        {
            name: "create",
            accounts: [
                {
                    name: "fundingAddress",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "associatedAccountAddress",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "walletAddress",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "tokenMintAddress",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "tokenProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [],
        },
        {
            name: "createIdempotent",
            accounts: [
                {
                    name: "fundingAddress",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "associatedAccountAddress",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "walletAddress",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "tokenMintAddress",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "tokenProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [],
        },
        {
            name: "recoverNested",
            accounts: [
                {
                    name: "nestedAssociatedAccountAddress",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "nestedTokenMintAddress",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "destinationAssociatedAccountAddress",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "ownerAssociatedAccountAddress",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "ownerTokenMintAddress",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "walletAddress",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "tokenProgram",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [],
        },
    ],
    errors: [
        {
            code: 0,
            name: "InvalidOwner",
            msg: "Associated token account owner does not match address derivation",
        },
    ],
};
//# sourceMappingURL=program.js.map
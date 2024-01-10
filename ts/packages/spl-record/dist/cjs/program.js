"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splRecordProgram = exports.SPL_RECORD_PROGRAM_ID = void 0;
const web3_js_1 = require("@solana/web3.js");
const anchor_1 = require("@coral-xyz/anchor");
const coder_1 = require("./coder");
exports.SPL_RECORD_PROGRAM_ID = new web3_js_1.PublicKey("ReciQBw6sQKH9TVVJQDnbnJ5W7FP539tPHjZhRF4E9r");
function splRecordProgram(params) {
    var _a;
    return new anchor_1.Program(IDL, (_a = params === null || params === void 0 ? void 0 : params.programId) !== null && _a !== void 0 ? _a : exports.SPL_RECORD_PROGRAM_ID, params === null || params === void 0 ? void 0 : params.provider, new coder_1.SplRecordCoder(IDL));
}
exports.splRecordProgram = splRecordProgram;
const IDL = {
    version: "0.1.0",
    name: "spl_record",
    instructions: [
        {
            name: "initialize",
            accounts: [
                {
                    name: "recordAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "authority",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [],
        },
        {
            name: "write",
            accounts: [
                {
                    name: "recordAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "signer",
                    isMut: false,
                    isSigner: true,
                },
            ],
            args: [
                {
                    name: "offset",
                    type: "u64",
                },
                {
                    name: "data",
                    type: "bytes",
                },
            ],
        },
        {
            name: "setAuthority",
            accounts: [
                {
                    name: "recordAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "signer",
                    isMut: false,
                    isSigner: true,
                },
                {
                    name: "newAuthority",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [],
        },
        {
            name: "closeAccount",
            accounts: [
                {
                    name: "recordAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "signer",
                    isMut: false,
                    isSigner: true,
                },
                {
                    name: "receiver",
                    isMut: true,
                    isSigner: false,
                },
            ],
            args: [],
        },
    ],
    accounts: [
        {
            name: "recordData",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "version",
                        type: "u8",
                    },
                    {
                        name: "authority",
                        type: "publicKey",
                    },
                    {
                        name: "data",
                        type: {
                            defined: "Data",
                        },
                    },
                ],
            },
        },
    ],
    types: [
        {
            name: "Data",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "bytes",
                        type: {
                            array: ["u8", 8],
                        },
                    },
                ],
            },
        },
    ],
    errors: [
        {
            code: 0,
            name: "IncorrectAuthority",
            msg: "Incorrect authority provided on update or delete",
        },
        {
            code: 1,
            name: "Overflow",
            msg: "Calculation overflow",
        },
    ],
};
//# sourceMappingURL=program.js.map
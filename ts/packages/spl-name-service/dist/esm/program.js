import { PublicKey } from "@solana/web3.js";
import { Program } from "@coral-xyz/anchor";
import { SplNameServiceCoder } from "./coder";
export const SPL_NAME_SERVICE_PROGRAM_ID = new PublicKey("namesLPneVptA9Z5rqUDD9tMTWEJwofgaYwp8cawRkX");
export function splNameServiceProgram(params) {
    var _a;
    return new Program(IDL, (_a = params === null || params === void 0 ? void 0 : params.programId) !== null && _a !== void 0 ? _a : SPL_NAME_SERVICE_PROGRAM_ID, params === null || params === void 0 ? void 0 : params.provider, new SplNameServiceCoder(IDL));
}
const IDL = {
    version: "0.2.0",
    name: "spl_name_service",
    instructions: [
        {
            name: "create",
            accounts: [
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "payer",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "nameAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "nameOwner",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "hashedName",
                    type: "bytes",
                },
                {
                    name: "lamports",
                    type: "u64",
                },
                {
                    name: "space",
                    type: "u32",
                },
            ],
        },
        {
            name: "update",
            accounts: [
                {
                    name: "nameAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "nameUpdateSigner",
                    isMut: false,
                    isSigner: true,
                },
            ],
            args: [
                {
                    name: "offset",
                    type: "u32",
                },
                {
                    name: "data",
                    type: "bytes",
                },
            ],
        },
        {
            name: "transfer",
            accounts: [
                {
                    name: "nameAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "nameOwner",
                    isMut: false,
                    isSigner: true,
                },
            ],
            args: [
                {
                    name: "newOwner",
                    type: "publicKey",
                },
            ],
        },
        {
            name: "delete",
            accounts: [
                {
                    name: "nameAccount",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "nameOwner",
                    isMut: false,
                    isSigner: true,
                },
                {
                    name: "refundTarget",
                    isMut: true,
                    isSigner: false,
                },
            ],
            args: [],
        },
    ],
    accounts: [
        {
            name: "nameRecordHeader",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "parentName",
                        type: "publicKey",
                    },
                    {
                        name: "owner",
                        type: "publicKey",
                    },
                    {
                        name: "class",
                        type: "publicKey",
                    },
                ],
            },
        },
    ],
    errors: [
        {
            code: 0,
            name: "OutOfSpace",
            msg: "Out of space",
        },
    ],
};
//# sourceMappingURL=program.js.map
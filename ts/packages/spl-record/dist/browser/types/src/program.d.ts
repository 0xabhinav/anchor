import { PublicKey } from "@solana/web3.js";
import { Program, AnchorProvider } from "@coral-xyz/anchor";
export declare const SPL_RECORD_PROGRAM_ID: PublicKey;
interface GetProgramParams {
    programId?: PublicKey;
    provider?: AnchorProvider;
}
export declare function splRecordProgram(params?: GetProgramParams): Program<SplRecord>;
declare type SplRecord = {
    version: "0.1.0";
    name: "spl_record";
    instructions: [
        {
            name: "initialize";
            accounts: [
                {
                    name: "recordAccount";
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: "authority";
                    isMut: false;
                    isSigner: false;
                }
            ];
            args: [];
        },
        {
            name: "write";
            accounts: [
                {
                    name: "recordAccount";
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: "signer";
                    isMut: false;
                    isSigner: true;
                }
            ];
            args: [
                {
                    name: "offset";
                    type: "u64";
                },
                {
                    name: "data";
                    type: "bytes";
                }
            ];
        },
        {
            name: "setAuthority";
            accounts: [
                {
                    name: "recordAccount";
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: "signer";
                    isMut: false;
                    isSigner: true;
                },
                {
                    name: "newAuthority";
                    isMut: false;
                    isSigner: false;
                }
            ];
            args: [];
        },
        {
            name: "closeAccount";
            accounts: [
                {
                    name: "recordAccount";
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: "signer";
                    isMut: false;
                    isSigner: true;
                },
                {
                    name: "receiver";
                    isMut: true;
                    isSigner: false;
                }
            ];
            args: [];
        }
    ];
    accounts: [
        {
            name: "recordData";
            type: {
                kind: "struct";
                fields: [
                    {
                        name: "version";
                        type: "u8";
                    },
                    {
                        name: "authority";
                        type: "publicKey";
                    },
                    {
                        name: "data";
                        type: {
                            defined: "Data";
                        };
                    }
                ];
            };
        }
    ];
    types: [
        {
            name: "Data";
            type: {
                kind: "struct";
                fields: [
                    {
                        name: "bytes";
                        type: {
                            array: ["u8", 8];
                        };
                    }
                ];
            };
        }
    ];
    errors: [
        {
            code: 0;
            name: "IncorrectAuthority";
            msg: "Incorrect authority provided on update or delete";
        },
        {
            code: 1;
            name: "Overflow";
            msg: "Calculation overflow";
        }
    ];
};
export {};
//# sourceMappingURL=program.d.ts.map
import { PublicKey } from "@solana/web3.js";
import { Program, AnchorProvider } from "@coral-xyz/anchor";
export declare const SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID: PublicKey;
interface GetProgramParams {
    programId?: PublicKey;
    provider?: AnchorProvider;
}
export declare function splAssociatedTokenAccountProgram(params?: GetProgramParams): Program<SplAssociatedTokenAccount>;
declare type SplAssociatedTokenAccount = {
    version: "1.1.1";
    name: "spl_associated_token_account";
    instructions: [
        {
            name: "create";
            accounts: [
                {
                    name: "fundingAddress";
                    isMut: true;
                    isSigner: true;
                },
                {
                    name: "associatedAccountAddress";
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: "walletAddress";
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: "tokenMintAddress";
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: "systemProgram";
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: "tokenProgram";
                    isMut: false;
                    isSigner: false;
                }
            ];
            args: [];
        },
        {
            name: "createIdempotent";
            accounts: [
                {
                    name: "fundingAddress";
                    isMut: true;
                    isSigner: true;
                },
                {
                    name: "associatedAccountAddress";
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: "walletAddress";
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: "tokenMintAddress";
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: "systemProgram";
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: "tokenProgram";
                    isMut: false;
                    isSigner: false;
                }
            ];
            args: [];
        },
        {
            name: "recoverNested";
            accounts: [
                {
                    name: "nestedAssociatedAccountAddress";
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: "nestedTokenMintAddress";
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: "destinationAssociatedAccountAddress";
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: "ownerAssociatedAccountAddress";
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: "ownerTokenMintAddress";
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: "walletAddress";
                    isMut: true;
                    isSigner: true;
                },
                {
                    name: "tokenProgram";
                    isMut: false;
                    isSigner: false;
                }
            ];
            args: [];
        }
    ];
    errors: [
        {
            code: 0;
            name: "InvalidOwner";
            msg: "Associated token account owner does not match address derivation";
        }
    ];
};
export {};
//# sourceMappingURL=program.d.ts.map
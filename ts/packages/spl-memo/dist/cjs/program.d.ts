import { PublicKey } from "@solana/web3.js";
import { Program, AnchorProvider } from "@coral-xyz/anchor";
export declare const SPL_MEMO_PROGRAM_ID: PublicKey;
interface GetProgramParams {
    programId?: PublicKey;
    provider?: AnchorProvider;
}
export declare function splMemoProgram(params?: GetProgramParams): Program<SplMemo>;
declare type SplMemo = {
    version: "3.0.1";
    name: "spl_memo";
    instructions: [
        {
            name: "addMemo";
            accounts: [];
            args: [
                {
                    name: "memo";
                    type: "string";
                }
            ];
        }
    ];
};
export {};
//# sourceMappingURL=program.d.ts.map
import { PublicKey } from "@solana/web3.js";
import { Program, AnchorProvider } from "@coral-xyz/anchor";
export declare const SPL_FEATURE_PROPOSAL_PROGRAM_ID: PublicKey;
interface GetProgramParams {
    programId?: PublicKey;
    provider?: AnchorProvider;
}
export declare function splFeatureProposalProgram(params?: GetProgramParams): Program<SplFeatureProposal>;
declare type SplFeatureProposal = {
    version: "1.0.0";
    name: "spl_feature_proposal";
    instructions: [
        {
            name: "propose";
            accounts: [
                {
                    name: "fundingAddress";
                    isMut: true;
                    isSigner: true;
                },
                {
                    name: "featureProposalAddress";
                    isMut: true;
                    isSigner: true;
                },
                {
                    name: "mintAddress";
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: "distributorTokenAddress";
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: "acceptanceTokenAddress";
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: "feature";
                    isMut: true;
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
                },
                {
                    name: "rent";
                    isMut: false;
                    isSigner: false;
                }
            ];
            args: [
                {
                    name: "tokensToMint";
                    type: "u64";
                },
                {
                    name: "acceptanceCriteria";
                    type: {
                        defined: "AcceptanceCriteria";
                    };
                }
            ];
        },
        {
            name: "tally";
            accounts: [
                {
                    name: "featureProposalAddress";
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: "acceptanceTokenAddress";
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: "feature";
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: "systemProgram";
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: "clock";
                    isMut: false;
                    isSigner: false;
                }
            ];
            args: [];
        }
    ];
    accounts: [
        {
            name: "featureProposal";
            type: {
                kind: "enum";
                variants: [
                    {
                        name: "Uninitialized";
                    },
                    {
                        name: "Pending";
                        fields: [
                            {
                                defined: "AcceptanceCriteria";
                            }
                        ];
                    },
                    {
                        name: "Accepted";
                        fields: [
                            {
                                name: "tokens_upon_acceptance";
                                type: "u64";
                            }
                        ];
                    },
                    {
                        name: "Expired";
                    }
                ];
            };
        }
    ];
    types: [
        {
            name: "AcceptanceCriteria";
            type: {
                kind: "struct";
                fields: [
                    {
                        name: "tokensRequired";
                        type: "u64";
                    },
                    {
                        name: "deadline";
                        type: "i64";
                    }
                ];
            };
        }
    ];
};
export {};
//# sourceMappingURL=program.d.ts.map
// @ts-nocheck
import { PublicKey } from "@solana/web3.js";
import { Program } from "@coral-xyz/anchor";
import { SplFeatureProposalCoder } from "./coder";
export const SPL_FEATURE_PROPOSAL_PROGRAM_ID = new PublicKey("Feat1YXHhH6t1juaWF74WLcfv4XoNocjXA6sPWHNgAse");
export function splFeatureProposalProgram(params) {
    var _a;
    return new Program(IDL, (_a = params === null || params === void 0 ? void 0 : params.programId) !== null && _a !== void 0 ? _a : SPL_FEATURE_PROPOSAL_PROGRAM_ID, params === null || params === void 0 ? void 0 : params.provider, new SplFeatureProposalCoder(IDL));
}
const IDL = {
    version: "1.0.0",
    name: "spl_feature_proposal",
    instructions: [
        {
            name: "propose",
            accounts: [
                {
                    name: "fundingAddress",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "featureProposalAddress",
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: "mintAddress",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "distributorTokenAddress",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "acceptanceTokenAddress",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "feature",
                    isMut: true,
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
                {
                    name: "rent",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: "tokensToMint",
                    type: "u64",
                },
                {
                    name: "acceptanceCriteria",
                    type: {
                        defined: "AcceptanceCriteria",
                    },
                },
            ],
        },
        {
            name: "tally",
            accounts: [
                {
                    name: "featureProposalAddress",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "acceptanceTokenAddress",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "feature",
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: "systemProgram",
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: "clock",
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [],
        },
    ],
    accounts: [
        {
            name: "featureProposal",
            type: {
                kind: "enum",
                variants: [
                    {
                        name: "Uninitialized",
                    },
                    {
                        name: "Pending",
                        fields: [
                            {
                                defined: "AcceptanceCriteria",
                            },
                        ],
                    },
                    {
                        name: "Accepted",
                        fields: [
                            {
                                name: "tokens_upon_acceptance",
                                type: "u64",
                            },
                        ],
                    },
                    {
                        name: "Expired",
                    },
                ],
            },
        },
    ],
    types: [
        {
            name: "AcceptanceCriteria",
            type: {
                kind: "struct",
                fields: [
                    {
                        name: "tokensRequired",
                        type: "u64",
                    },
                    {
                        name: "deadline",
                        type: "i64",
                    },
                ],
            },
        },
    ],
};
//# sourceMappingURL=program.js.map
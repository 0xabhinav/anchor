"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splFeatureProposalProgram = exports.SPL_FEATURE_PROPOSAL_PROGRAM_ID = void 0;
// @ts-nocheck
const web3_js_1 = require("@solana/web3.js");
const anchor_1 = require("@coral-xyz/anchor");
const coder_1 = require("./coder");
exports.SPL_FEATURE_PROPOSAL_PROGRAM_ID = new web3_js_1.PublicKey("Feat1YXHhH6t1juaWF74WLcfv4XoNocjXA6sPWHNgAse");
function splFeatureProposalProgram(params) {
    var _a;
    return new anchor_1.Program(IDL, (_a = params === null || params === void 0 ? void 0 : params.programId) !== null && _a !== void 0 ? _a : exports.SPL_FEATURE_PROPOSAL_PROGRAM_ID, params === null || params === void 0 ? void 0 : params.provider, new coder_1.SplFeatureProposalCoder(IDL));
}
exports.splFeatureProposalProgram = splFeatureProposalProgram;
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
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplGovernanceInstructionCoder = void 0;
// @ts-nocheck
const B = __importStar(require("@native-to-anchor/buffer-layout"));
class SplGovernanceInstructionCoder {
    constructor(_idl) { }
    encode(ixName, ix) {
        switch (ixName) {
            case "createRealm": {
                return encodeCreateRealm(ix);
            }
            case "depositGoverningTokens": {
                return encodeDepositGoverningTokens(ix);
            }
            case "withdrawGoverningTokens": {
                return encodeWithdrawGoverningTokens(ix);
            }
            case "setGovernanceDelegate": {
                return encodeSetGovernanceDelegate(ix);
            }
            case "createGovernance": {
                return encodeCreateGovernance(ix);
            }
            case "createProgramGovernance": {
                return encodeCreateProgramGovernance(ix);
            }
            case "createProposal": {
                return encodeCreateProposal(ix);
            }
            case "addSignatory": {
                return encodeAddSignatory(ix);
            }
            case "removeSignatory": {
                return encodeRemoveSignatory(ix);
            }
            case "insertTransaction": {
                return encodeInsertTransaction(ix);
            }
            case "removeTransaction": {
                return encodeRemoveTransaction(ix);
            }
            case "cancelProposal": {
                return encodeCancelProposal(ix);
            }
            case "signOffProposal": {
                return encodeSignOffProposal(ix);
            }
            case "castVote": {
                return encodeCastVote(ix);
            }
            case "finalizeVote": {
                return encodeFinalizeVote(ix);
            }
            case "relinquishVote": {
                return encodeRelinquishVote(ix);
            }
            case "executeTransaction": {
                return encodeExecuteTransaction(ix);
            }
            case "createMintGovernance": {
                return encodeCreateMintGovernance(ix);
            }
            case "createTokenGovernance": {
                return encodeCreateTokenGovernance(ix);
            }
            case "setGovernanceConfig": {
                return encodeSetGovernanceConfig(ix);
            }
            case "flagTransactionError": {
                return encodeFlagTransactionError(ix);
            }
            case "setRealmAuthority": {
                return encodeSetRealmAuthority(ix);
            }
            case "setRealmConfig": {
                return encodeSetRealmConfig(ix);
            }
            case "createTokenOwnerRecord": {
                return encodeCreateTokenOwnerRecord(ix);
            }
            case "updateProgramMetadata": {
                return encodeUpdateProgramMetadata(ix);
            }
            case "createNativeTreasury": {
                return encodeCreateNativeTreasury(ix);
            }
            default: {
                throw new Error(`Invalid instruction: ${ixName}`);
            }
        }
    }
    encodeState(_ixName, _ix) {
        throw new Error("SplGovernance does not have state");
    }
}
exports.SplGovernanceInstructionCoder = SplGovernanceInstructionCoder;
function encodeCreateRealm({ name, configArgs }) {
    return encodeData({ createRealm: { name, configArgs } }, 1 +
        4 +
        name.length +
        1 +
        8 +
        (() => {
            switch (Object.keys(configArgs.communityMintMaxVoteWeightSource)[0]) {
                case "supplyFraction":
                    return 1 + 8;
                case "absolute":
                    return 1 + 8;
            }
        })() +
        1 +
        1);
}
function encodeDepositGoverningTokens({ amount }) {
    return encodeData({ depositGoverningTokens: { amount } }, 1 + 8);
}
function encodeWithdrawGoverningTokens({}) {
    return encodeData({ withdrawGoverningTokens: {} }, 1);
}
function encodeSetGovernanceDelegate({ newGovernanceDelegate }) {
    return encodeData({ setGovernanceDelegate: { newGovernanceDelegate } }, 1 + 1 + (newGovernanceDelegate === null ? 0 : 32));
}
function encodeCreateGovernance({ config }) {
    return encodeData({ createGovernance: { config } }, 1 +
        (() => {
            switch (Object.keys(config.communityVoteThreshold)[0]) {
                case "yesVotePercentage":
                    return 1 + 1;
                case "quorumPercentage":
                    return 1 + 1;
                case "disabled":
                    return 1;
            }
        })() +
        8 +
        4 +
        4 +
        (() => {
            switch (Object.keys(config.voteTipping)[0]) {
                case "strict":
                    return 1;
                case "early":
                    return 1;
                case "disabled":
                    return 1;
            }
        })() +
        (() => {
            switch (Object.keys(config.councilVoteThreshold)[0]) {
                case "yesVotePercentage":
                    return 1 + 1;
                case "quorumPercentage":
                    return 1 + 1;
                case "disabled":
                    return 1;
            }
        })() +
        (() => {
            switch (Object.keys(config.councilVetoVoteThreshold)[0]) {
                case "yesVotePercentage":
                    return 1 + 1;
                case "quorumPercentage":
                    return 1 + 1;
                case "disabled":
                    return 1;
            }
        })() +
        8);
}
function encodeCreateProgramGovernance({ config, transferUpgradeAuthority, }) {
    return encodeData({ createProgramGovernance: { config, transferUpgradeAuthority } }, 1 +
        (() => {
            switch (Object.keys(config.communityVoteThreshold)[0]) {
                case "yesVotePercentage":
                    return 1 + 1;
                case "quorumPercentage":
                    return 1 + 1;
                case "disabled":
                    return 1;
            }
        })() +
        8 +
        4 +
        4 +
        (() => {
            switch (Object.keys(config.voteTipping)[0]) {
                case "strict":
                    return 1;
                case "early":
                    return 1;
                case "disabled":
                    return 1;
            }
        })() +
        (() => {
            switch (Object.keys(config.councilVoteThreshold)[0]) {
                case "yesVotePercentage":
                    return 1 + 1;
                case "quorumPercentage":
                    return 1 + 1;
                case "disabled":
                    return 1;
            }
        })() +
        (() => {
            switch (Object.keys(config.councilVetoVoteThreshold)[0]) {
                case "yesVotePercentage":
                    return 1 + 1;
                case "quorumPercentage":
                    return 1 + 1;
                case "disabled":
                    return 1;
            }
        })() +
        8 +
        1);
}
function encodeCreateProposal({ name, descriptionLink, voteType, options, useDenyOption, }) {
    return encodeData({
        createProposal: {
            name,
            descriptionLink,
            voteType,
            options,
            useDenyOption,
        },
    }, 1 +
        4 +
        name.length +
        4 +
        descriptionLink.length +
        (() => {
            switch (Object.keys(voteType)[0]) {
                case "singleChoice":
                    return 1;
                case "multiChoice":
                    return 1 + 1 + 1;
            }
        })() +
        4 +
        options.reduce((a, c) => a + 4 + c.length, 0) +
        1);
}
function encodeAddSignatory({ signatory }) {
    return encodeData({ addSignatory: { signatory } }, 1 + 32);
}
function encodeRemoveSignatory({ signatory }) {
    return encodeData({ removeSignatory: { signatory } }, 1 + 32);
}
function encodeInsertTransaction({ optionIndex, index, holdUpTime, instructions, }) {
    return encodeData({ insertTransaction: { optionIndex, index, holdUpTime, instructions } }, 1 +
        1 +
        2 +
        4 +
        4 +
        instructions.reduce((a, c) => a + 32 + 4 + c.accounts.length * 34 + 4 + c.data.length, 0));
}
function encodeRemoveTransaction({}) {
    return encodeData({ removeTransaction: {} }, 1);
}
function encodeCancelProposal({}) {
    return encodeData({ cancelProposal: {} }, 1);
}
function encodeSignOffProposal({}) {
    return encodeData({ signOffProposal: {} }, 1);
}
function encodeCastVote({ vote }) {
    return encodeData({ castVote: { vote } }, 1 +
        (() => {
            switch (Object.keys(vote)[0]) {
                case "approve":
                    return 1 + 4 + vote.length * 2;
                case "deny":
                    return 1;
                case "abstain":
                    return 1;
                case "veto":
                    return 1;
            }
        })());
}
function encodeFinalizeVote({}) {
    return encodeData({ finalizeVote: {} }, 1);
}
function encodeRelinquishVote({}) {
    return encodeData({ relinquishVote: {} }, 1);
}
function encodeExecuteTransaction({}) {
    return encodeData({ executeTransaction: {} }, 1);
}
function encodeCreateMintGovernance({ config, transferMintAuthorities, }) {
    return encodeData({ createMintGovernance: { config, transferMintAuthorities } }, 1 +
        (() => {
            switch (Object.keys(config.communityVoteThreshold)[0]) {
                case "yesVotePercentage":
                    return 1 + 1;
                case "quorumPercentage":
                    return 1 + 1;
                case "disabled":
                    return 1;
            }
        })() +
        8 +
        4 +
        4 +
        (() => {
            switch (Object.keys(config.voteTipping)[0]) {
                case "strict":
                    return 1;
                case "early":
                    return 1;
                case "disabled":
                    return 1;
            }
        })() +
        (() => {
            switch (Object.keys(config.councilVoteThreshold)[0]) {
                case "yesVotePercentage":
                    return 1 + 1;
                case "quorumPercentage":
                    return 1 + 1;
                case "disabled":
                    return 1;
            }
        })() +
        (() => {
            switch (Object.keys(config.councilVetoVoteThreshold)[0]) {
                case "yesVotePercentage":
                    return 1 + 1;
                case "quorumPercentage":
                    return 1 + 1;
                case "disabled":
                    return 1;
            }
        })() +
        8 +
        1);
}
function encodeCreateTokenGovernance({ config, transferAccountAuthorities, }) {
    return encodeData({ createTokenGovernance: { config, transferAccountAuthorities } }, 1 +
        (() => {
            switch (Object.keys(config.communityVoteThreshold)[0]) {
                case "yesVotePercentage":
                    return 1 + 1;
                case "quorumPercentage":
                    return 1 + 1;
                case "disabled":
                    return 1;
            }
        })() +
        8 +
        4 +
        4 +
        (() => {
            switch (Object.keys(config.voteTipping)[0]) {
                case "strict":
                    return 1;
                case "early":
                    return 1;
                case "disabled":
                    return 1;
            }
        })() +
        (() => {
            switch (Object.keys(config.councilVoteThreshold)[0]) {
                case "yesVotePercentage":
                    return 1 + 1;
                case "quorumPercentage":
                    return 1 + 1;
                case "disabled":
                    return 1;
            }
        })() +
        (() => {
            switch (Object.keys(config.councilVetoVoteThreshold)[0]) {
                case "yesVotePercentage":
                    return 1 + 1;
                case "quorumPercentage":
                    return 1 + 1;
                case "disabled":
                    return 1;
            }
        })() +
        8 +
        1);
}
function encodeSetGovernanceConfig({ config }) {
    return encodeData({ setGovernanceConfig: { config } }, 1 +
        (() => {
            switch (Object.keys(config.communityVoteThreshold)[0]) {
                case "yesVotePercentage":
                    return 1 + 1;
                case "quorumPercentage":
                    return 1 + 1;
                case "disabled":
                    return 1;
            }
        })() +
        8 +
        4 +
        4 +
        (() => {
            switch (Object.keys(config.voteTipping)[0]) {
                case "strict":
                    return 1;
                case "early":
                    return 1;
                case "disabled":
                    return 1;
            }
        })() +
        (() => {
            switch (Object.keys(config.councilVoteThreshold)[0]) {
                case "yesVotePercentage":
                    return 1 + 1;
                case "quorumPercentage":
                    return 1 + 1;
                case "disabled":
                    return 1;
            }
        })() +
        (() => {
            switch (Object.keys(config.councilVetoVoteThreshold)[0]) {
                case "yesVotePercentage":
                    return 1 + 1;
                case "quorumPercentage":
                    return 1 + 1;
                case "disabled":
                    return 1;
            }
        })() +
        8);
}
function encodeFlagTransactionError({}) {
    return encodeData({ flagTransactionError: {} }, 1);
}
function encodeSetRealmAuthority({ action }) {
    return encodeData({ setRealmAuthority: { action } }, 1 +
        (() => {
            switch (Object.keys(action)[0]) {
                case "setUnchecked":
                    return 1;
                case "setChecked":
                    return 1;
                case "remove":
                    return 1;
            }
        })());
}
function encodeSetRealmConfig({ configArgs }) {
    return encodeData({ setRealmConfig: { configArgs } }, 1 +
        1 +
        8 +
        (() => {
            switch (Object.keys(configArgs.communityMintMaxVoteWeightSource)[0]) {
                case "supplyFraction":
                    return 1 + 8;
                case "absolute":
                    return 1 + 8;
            }
        })() +
        1 +
        1);
}
function encodeCreateTokenOwnerRecord({}) {
    return encodeData({ createTokenOwnerRecord: {} }, 1);
}
function encodeUpdateProgramMetadata({}) {
    return encodeData({ updateProgramMetadata: {} }, 1);
}
function encodeCreateNativeTreasury({}) {
    return encodeData({ createNativeTreasury: {} }, 1);
}
const LAYOUT = B.union(B.u8("instruction"));
LAYOUT.addVariant(0, B.struct([
    B.utf8Str("name"),
    B.struct([
        B.bool("useCouncilMint"),
        B.u64("minCommunityWeightToCreateGovernance"),
        ((p) => {
            const U = B.union(B.u8("discriminator"), null, p);
            U.addVariant(0, B.u64(), "supplyFraction");
            U.addVariant(1, B.u64(), "absolute");
            return U;
        })("communityMintMaxVoteWeightSource"),
        B.bool("useCommunityVoterWeightAddin"),
        B.bool("useMaxCommunityVoterWeightAddin"),
    ], "configArgs"),
]), "createRealm");
LAYOUT.addVariant(1, B.struct([B.u64("amount")]), "depositGoverningTokens");
LAYOUT.addVariant(2, B.struct([]), "withdrawGoverningTokens");
LAYOUT.addVariant(3, B.struct([B.option(B.publicKey(), "newGovernanceDelegate")]), "setGovernanceDelegate");
LAYOUT.addVariant(4, B.struct([
    B.struct([
        ((p) => {
            const U = B.union(B.u8("discriminator"), null, p);
            U.addVariant(0, B.u8(), "yesVotePercentage");
            U.addVariant(1, B.u8(), "quorumPercentage");
            U.addVariant(2, B.struct([]), "disabled");
            return U;
        })("communityVoteThreshold"),
        B.u64("minCommunityWeightToCreateProposal"),
        B.u32("minTransactionHoldUpTime"),
        B.u32("maxVotingTime"),
        ((p) => {
            const U = B.union(B.u8("discriminator"), null, p);
            U.addVariant(0, B.struct([]), "strict");
            U.addVariant(1, B.struct([]), "early");
            U.addVariant(2, B.struct([]), "disabled");
            return U;
        })("voteTipping"),
        ((p) => {
            const U = B.union(B.u8("discriminator"), null, p);
            U.addVariant(0, B.u8(), "yesVotePercentage");
            U.addVariant(1, B.u8(), "quorumPercentage");
            U.addVariant(2, B.struct([]), "disabled");
            return U;
        })("councilVoteThreshold"),
        ((p) => {
            const U = B.union(B.u8("discriminator"), null, p);
            U.addVariant(0, B.u8(), "yesVotePercentage");
            U.addVariant(1, B.u8(), "quorumPercentage");
            U.addVariant(2, B.struct([]), "disabled");
            return U;
        })("councilVetoVoteThreshold"),
        B.u64("minCouncilWeightToCreateProposal"),
    ], "config"),
]), "createGovernance");
LAYOUT.addVariant(5, B.struct([
    B.struct([
        ((p) => {
            const U = B.union(B.u8("discriminator"), null, p);
            U.addVariant(0, B.u8(), "yesVotePercentage");
            U.addVariant(1, B.u8(), "quorumPercentage");
            U.addVariant(2, B.struct([]), "disabled");
            return U;
        })("communityVoteThreshold"),
        B.u64("minCommunityWeightToCreateProposal"),
        B.u32("minTransactionHoldUpTime"),
        B.u32("maxVotingTime"),
        ((p) => {
            const U = B.union(B.u8("discriminator"), null, p);
            U.addVariant(0, B.struct([]), "strict");
            U.addVariant(1, B.struct([]), "early");
            U.addVariant(2, B.struct([]), "disabled");
            return U;
        })("voteTipping"),
        ((p) => {
            const U = B.union(B.u8("discriminator"), null, p);
            U.addVariant(0, B.u8(), "yesVotePercentage");
            U.addVariant(1, B.u8(), "quorumPercentage");
            U.addVariant(2, B.struct([]), "disabled");
            return U;
        })("councilVoteThreshold"),
        ((p) => {
            const U = B.union(B.u8("discriminator"), null, p);
            U.addVariant(0, B.u8(), "yesVotePercentage");
            U.addVariant(1, B.u8(), "quorumPercentage");
            U.addVariant(2, B.struct([]), "disabled");
            return U;
        })("councilVetoVoteThreshold"),
        B.u64("minCouncilWeightToCreateProposal"),
    ], "config"),
    B.bool("transferUpgradeAuthority"),
]), "createProgramGovernance");
LAYOUT.addVariant(6, B.struct([
    B.utf8Str("name"),
    B.utf8Str("descriptionLink"),
    ((p) => {
        const U = B.union(B.u8("discriminator"), null, p);
        U.addVariant(0, B.struct([]), "singleChoice");
        U.addVariant(1, B.struct([B.u8("maxVoterOptions"), B.u8("maxWinningOptions")]), "multiChoice");
        return U;
    })("voteType"),
    B.vec(B.utf8Str(), "options"),
    B.bool("useDenyOption"),
]), "createProposal");
LAYOUT.addVariant(7, B.struct([B.publicKey("signatory")]), "addSignatory");
LAYOUT.addVariant(8, B.struct([B.publicKey("signatory")]), "removeSignatory");
LAYOUT.addVariant(9, B.struct([
    B.u8("optionIndex"),
    B.u16("index"),
    B.u32("holdUpTime"),
    B.vec(B.struct([
        B.publicKey("programId"),
        B.vec(B.struct([
            B.publicKey("pubkey"),
            B.bool("isSigner"),
            B.bool("isWritable"),
        ]), "accounts"),
        B.bytes("data"),
    ]), "instructions"),
]), "insertTransaction");
LAYOUT.addVariant(10, B.struct([]), "removeTransaction");
LAYOUT.addVariant(11, B.struct([]), "cancelProposal");
LAYOUT.addVariant(12, B.struct([]), "signOffProposal");
LAYOUT.addVariant(13, B.struct([
    ((p) => {
        const U = B.union(B.u8("discriminator"), null, p);
        U.addVariant(0, B.vec(B.struct([B.u8("rank"), B.u8("weightPercentage")])), "approve");
        U.addVariant(1, B.struct([]), "deny");
        U.addVariant(2, B.struct([]), "abstain");
        U.addVariant(3, B.struct([]), "veto");
        return U;
    })("vote"),
]), "castVote");
LAYOUT.addVariant(14, B.struct([]), "finalizeVote");
LAYOUT.addVariant(15, B.struct([]), "relinquishVote");
LAYOUT.addVariant(16, B.struct([]), "executeTransaction");
LAYOUT.addVariant(17, B.struct([
    B.struct([
        ((p) => {
            const U = B.union(B.u8("discriminator"), null, p);
            U.addVariant(0, B.u8(), "yesVotePercentage");
            U.addVariant(1, B.u8(), "quorumPercentage");
            U.addVariant(2, B.struct([]), "disabled");
            return U;
        })("communityVoteThreshold"),
        B.u64("minCommunityWeightToCreateProposal"),
        B.u32("minTransactionHoldUpTime"),
        B.u32("maxVotingTime"),
        ((p) => {
            const U = B.union(B.u8("discriminator"), null, p);
            U.addVariant(0, B.struct([]), "strict");
            U.addVariant(1, B.struct([]), "early");
            U.addVariant(2, B.struct([]), "disabled");
            return U;
        })("voteTipping"),
        ((p) => {
            const U = B.union(B.u8("discriminator"), null, p);
            U.addVariant(0, B.u8(), "yesVotePercentage");
            U.addVariant(1, B.u8(), "quorumPercentage");
            U.addVariant(2, B.struct([]), "disabled");
            return U;
        })("councilVoteThreshold"),
        ((p) => {
            const U = B.union(B.u8("discriminator"), null, p);
            U.addVariant(0, B.u8(), "yesVotePercentage");
            U.addVariant(1, B.u8(), "quorumPercentage");
            U.addVariant(2, B.struct([]), "disabled");
            return U;
        })("councilVetoVoteThreshold"),
        B.u64("minCouncilWeightToCreateProposal"),
    ], "config"),
    B.bool("transferMintAuthorities"),
]), "createMintGovernance");
LAYOUT.addVariant(18, B.struct([
    B.struct([
        ((p) => {
            const U = B.union(B.u8("discriminator"), null, p);
            U.addVariant(0, B.u8(), "yesVotePercentage");
            U.addVariant(1, B.u8(), "quorumPercentage");
            U.addVariant(2, B.struct([]), "disabled");
            return U;
        })("communityVoteThreshold"),
        B.u64("minCommunityWeightToCreateProposal"),
        B.u32("minTransactionHoldUpTime"),
        B.u32("maxVotingTime"),
        ((p) => {
            const U = B.union(B.u8("discriminator"), null, p);
            U.addVariant(0, B.struct([]), "strict");
            U.addVariant(1, B.struct([]), "early");
            U.addVariant(2, B.struct([]), "disabled");
            return U;
        })("voteTipping"),
        ((p) => {
            const U = B.union(B.u8("discriminator"), null, p);
            U.addVariant(0, B.u8(), "yesVotePercentage");
            U.addVariant(1, B.u8(), "quorumPercentage");
            U.addVariant(2, B.struct([]), "disabled");
            return U;
        })("councilVoteThreshold"),
        ((p) => {
            const U = B.union(B.u8("discriminator"), null, p);
            U.addVariant(0, B.u8(), "yesVotePercentage");
            U.addVariant(1, B.u8(), "quorumPercentage");
            U.addVariant(2, B.struct([]), "disabled");
            return U;
        })("councilVetoVoteThreshold"),
        B.u64("minCouncilWeightToCreateProposal"),
    ], "config"),
    B.bool("transferAccountAuthorities"),
]), "createTokenGovernance");
LAYOUT.addVariant(19, B.struct([
    B.struct([
        ((p) => {
            const U = B.union(B.u8("discriminator"), null, p);
            U.addVariant(0, B.u8(), "yesVotePercentage");
            U.addVariant(1, B.u8(), "quorumPercentage");
            U.addVariant(2, B.struct([]), "disabled");
            return U;
        })("communityVoteThreshold"),
        B.u64("minCommunityWeightToCreateProposal"),
        B.u32("minTransactionHoldUpTime"),
        B.u32("maxVotingTime"),
        ((p) => {
            const U = B.union(B.u8("discriminator"), null, p);
            U.addVariant(0, B.struct([]), "strict");
            U.addVariant(1, B.struct([]), "early");
            U.addVariant(2, B.struct([]), "disabled");
            return U;
        })("voteTipping"),
        ((p) => {
            const U = B.union(B.u8("discriminator"), null, p);
            U.addVariant(0, B.u8(), "yesVotePercentage");
            U.addVariant(1, B.u8(), "quorumPercentage");
            U.addVariant(2, B.struct([]), "disabled");
            return U;
        })("councilVoteThreshold"),
        ((p) => {
            const U = B.union(B.u8("discriminator"), null, p);
            U.addVariant(0, B.u8(), "yesVotePercentage");
            U.addVariant(1, B.u8(), "quorumPercentage");
            U.addVariant(2, B.struct([]), "disabled");
            return U;
        })("councilVetoVoteThreshold"),
        B.u64("minCouncilWeightToCreateProposal"),
    ], "config"),
]), "setGovernanceConfig");
LAYOUT.addVariant(20, B.struct([]), "flagTransactionError");
LAYOUT.addVariant(21, B.struct([
    ((p) => {
        const U = B.union(B.u8("discriminator"), null, p);
        U.addVariant(0, B.struct([]), "setUnchecked");
        U.addVariant(1, B.struct([]), "setChecked");
        U.addVariant(2, B.struct([]), "remove");
        return U;
    })("action"),
]), "setRealmAuthority");
LAYOUT.addVariant(22, B.struct([
    B.struct([
        B.bool("useCouncilMint"),
        B.u64("minCommunityWeightToCreateGovernance"),
        ((p) => {
            const U = B.union(B.u8("discriminator"), null, p);
            U.addVariant(0, B.u64(), "supplyFraction");
            U.addVariant(1, B.u64(), "absolute");
            return U;
        })("communityMintMaxVoteWeightSource"),
        B.bool("useCommunityVoterWeightAddin"),
        B.bool("useMaxCommunityVoterWeightAddin"),
    ], "configArgs"),
]), "setRealmConfig");
LAYOUT.addVariant(23, B.struct([]), "createTokenOwnerRecord");
LAYOUT.addVariant(24, B.struct([]), "updateProgramMetadata");
LAYOUT.addVariant(25, B.struct([]), "createNativeTreasury");
function encodeData(ix, span) {
    const b = Buffer.alloc(span);
    LAYOUT.encode(ix, b);
    return b;
}
//# sourceMappingURL=instructions.js.map
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
exports.SplStakePoolInstructionCoder = void 0;
// @ts-nocheck
const B = __importStar(require("@native-to-anchor/buffer-layout"));
class SplStakePoolInstructionCoder {
    constructor(_idl) { }
    encode(ixName, ix) {
        switch (ixName) {
            case "initialize": {
                return encodeInitialize(ix);
            }
            case "addValidatorToPool": {
                return encodeAddValidatorToPool(ix);
            }
            case "removeValidatorFromPool": {
                return encodeRemoveValidatorFromPool(ix);
            }
            case "decreaseValidatorStake": {
                return encodeDecreaseValidatorStake(ix);
            }
            case "increaseValidatorStake": {
                return encodeIncreaseValidatorStake(ix);
            }
            case "setPreferredValidator": {
                return encodeSetPreferredValidator(ix);
            }
            case "updateValidatorListBalance": {
                return encodeUpdateValidatorListBalance(ix);
            }
            case "updateStakePoolBalance": {
                return encodeUpdateStakePoolBalance(ix);
            }
            case "cleanupRemovedValidatorEntries": {
                return encodeCleanupRemovedValidatorEntries(ix);
            }
            case "depositStake": {
                return encodeDepositStake(ix);
            }
            case "withdrawStake": {
                return encodeWithdrawStake(ix);
            }
            case "setManager": {
                return encodeSetManager(ix);
            }
            case "setFee": {
                return encodeSetFee(ix);
            }
            case "setStaker": {
                return encodeSetStaker(ix);
            }
            case "depositSol": {
                return encodeDepositSol(ix);
            }
            case "setFundingAuthority": {
                return encodeSetFundingAuthority(ix);
            }
            case "withdrawSol": {
                return encodeWithdrawSol(ix);
            }
            case "createTokenMetadata": {
                return encodeCreateTokenMetadata(ix);
            }
            case "updateTokenMetadata": {
                return encodeUpdateTokenMetadata(ix);
            }
            default: {
                throw new Error(`Invalid instruction: ${ixName}`);
            }
        }
    }
    encodeState(_ixName, _ix) {
        throw new Error("SplStakePool does not have state");
    }
}
exports.SplStakePoolInstructionCoder = SplStakePoolInstructionCoder;
function encodeInitialize({ fee, withdrawalFee, depositFee, referralFee, maxValidators, }) {
    return encodeData({
        initialize: {
            fee,
            withdrawalFee,
            depositFee,
            referralFee,
            maxValidators,
        },
    }, 1 + 8 + 8 + 8 + 8 + 8 + 8 + 1 + 4);
}
function encodeAddValidatorToPool({}) {
    return encodeData({ addValidatorToPool: {} }, 1);
}
function encodeRemoveValidatorFromPool({}) {
    return encodeData({ removeValidatorFromPool: {} }, 1);
}
function encodeDecreaseValidatorStake({ lamports, transientStakeSeed, }) {
    return encodeData({ decreaseValidatorStake: { lamports, transientStakeSeed } }, 1 + 8 + 8);
}
function encodeIncreaseValidatorStake({ lamports, transientStakeSeed, }) {
    return encodeData({ increaseValidatorStake: { lamports, transientStakeSeed } }, 1 + 8 + 8);
}
function encodeSetPreferredValidator({ validatorType, validatorVoteAddress, }) {
    return encodeData({ setPreferredValidator: { validatorType, validatorVoteAddress } }, 1 +
        (() => {
            switch (Object.keys(validatorType)[0]) {
                case "deposit":
                    return 1;
                case "withdraw":
                    return 1;
            }
        })() +
        1 +
        (validatorVoteAddress === null ? 0 : 32));
}
function encodeUpdateValidatorListBalance({ startIndex, noMerge, }) {
    return encodeData({ updateValidatorListBalance: { startIndex, noMerge } }, 1 + 4 + 1);
}
function encodeUpdateStakePoolBalance({}) {
    return encodeData({ updateStakePoolBalance: {} }, 1);
}
function encodeCleanupRemovedValidatorEntries({}) {
    return encodeData({ cleanupRemovedValidatorEntries: {} }, 1);
}
function encodeDepositStake({}) {
    return encodeData({ depositStake: {} }, 1);
}
function encodeWithdrawStake({ arg }) {
    return encodeData({ withdrawStake: { arg } }, 1 + 8);
}
function encodeSetManager({}) {
    return encodeData({ setManager: {} }, 1);
}
function encodeSetFee({ fee }) {
    return encodeData({ setFee: { fee } }, 1 +
        (() => {
            switch (Object.keys(fee)[0]) {
                case "solReferral":
                    return 1 + 1;
                case "stakeReferral":
                    return 1 + 1;
                case "epoch":
                    return 1 + 8 + 8;
                case "stakeWithdrawal":
                    return 1 + 8 + 8;
                case "solDeposit":
                    return 1 + 8 + 8;
                case "stakeDeposit":
                    return 1 + 8 + 8;
                case "solWithdrawal":
                    return 1 + 8 + 8;
            }
        })());
}
function encodeSetStaker({}) {
    return encodeData({ setStaker: {} }, 1);
}
function encodeDepositSol({ arg }) {
    return encodeData({ depositSol: { arg } }, 1 + 8);
}
function encodeSetFundingAuthority({ arg }) {
    return encodeData({ setFundingAuthority: { arg } }, 1 +
        (() => {
            switch (Object.keys(arg)[0]) {
                case "stakeDeposit":
                    return 1;
                case "solDeposit":
                    return 1;
                case "solWithdraw":
                    return 1;
            }
        })());
}
function encodeWithdrawSol({ arg }) {
    return encodeData({ withdrawSol: { arg } }, 1 + 8);
}
function encodeCreateTokenMetadata({ name, symbol, uri }) {
    return encodeData({ createTokenMetadata: { name, symbol, uri } }, 1 + 4 + name.length + 4 + symbol.length + 4 + uri.length);
}
function encodeUpdateTokenMetadata({ name, symbol, uri }) {
    return encodeData({ updateTokenMetadata: { name, symbol, uri } }, 1 + 4 + name.length + 4 + symbol.length + 4 + uri.length);
}
const LAYOUT = B.union(B.u8("instruction"));
LAYOUT.addVariant(0, B.struct([
    B.struct([B.u64("denominator"), B.u64("numerator")], "fee"),
    B.struct([B.u64("denominator"), B.u64("numerator")], "withdrawalFee"),
    B.struct([B.u64("denominator"), B.u64("numerator")], "depositFee"),
    B.u8("referralFee"),
    B.u32("maxValidators"),
]), "initialize");
LAYOUT.addVariant(1, B.struct([]), "addValidatorToPool");
LAYOUT.addVariant(2, B.struct([]), "removeValidatorFromPool");
LAYOUT.addVariant(3, B.struct([B.u64("lamports"), B.u64("transientStakeSeed")]), "decreaseValidatorStake");
LAYOUT.addVariant(4, B.struct([B.u64("lamports"), B.u64("transientStakeSeed")]), "increaseValidatorStake");
LAYOUT.addVariant(5, B.struct([
    ((p) => {
        const U = B.union(B.u8("discriminator"), null, p);
        U.addVariant(0, B.struct([]), "deposit");
        U.addVariant(1, B.struct([]), "withdraw");
        return U;
    })("validatorType"),
    B.option(B.publicKey(), "validatorVoteAddress"),
]), "setPreferredValidator");
LAYOUT.addVariant(6, B.struct([B.u32("startIndex"), B.bool("noMerge")]), "updateValidatorListBalance");
LAYOUT.addVariant(7, B.struct([]), "updateStakePoolBalance");
LAYOUT.addVariant(8, B.struct([]), "cleanupRemovedValidatorEntries");
LAYOUT.addVariant(9, B.struct([]), "depositStake");
LAYOUT.addVariant(10, B.struct([B.u64("arg")]), "withdrawStake");
LAYOUT.addVariant(11, B.struct([]), "setManager");
LAYOUT.addVariant(12, B.struct([
    ((p) => {
        const U = B.union(B.u8("discriminator"), null, p);
        U.addVariant(0, B.u8(), "solReferral");
        U.addVariant(1, B.u8(), "stakeReferral");
        U.addVariant(2, B.struct([B.u64("denominator"), B.u64("numerator")]), "epoch");
        U.addVariant(3, B.struct([B.u64("denominator"), B.u64("numerator")]), "stakeWithdrawal");
        U.addVariant(4, B.struct([B.u64("denominator"), B.u64("numerator")]), "solDeposit");
        U.addVariant(5, B.struct([B.u64("denominator"), B.u64("numerator")]), "stakeDeposit");
        U.addVariant(6, B.struct([B.u64("denominator"), B.u64("numerator")]), "solWithdrawal");
        return U;
    })("fee"),
]), "setFee");
LAYOUT.addVariant(13, B.struct([]), "setStaker");
LAYOUT.addVariant(14, B.struct([B.u64("arg")]), "depositSol");
LAYOUT.addVariant(15, B.struct([
    ((p) => {
        const U = B.union(B.u8("discriminator"), null, p);
        U.addVariant(0, B.struct([]), "stakeDeposit");
        U.addVariant(1, B.struct([]), "solDeposit");
        U.addVariant(2, B.struct([]), "solWithdraw");
        return U;
    })("arg"),
]), "setFundingAuthority");
LAYOUT.addVariant(16, B.struct([B.u64("arg")]), "withdrawSol");
LAYOUT.addVariant(17, B.struct([B.utf8Str("name"), B.utf8Str("symbol"), B.utf8Str("uri")]), "createTokenMetadata");
LAYOUT.addVariant(18, B.struct([B.utf8Str("name"), B.utf8Str("symbol"), B.utf8Str("uri")]), "updateTokenMetadata");
function encodeData(ix, span) {
    const b = Buffer.alloc(span);
    LAYOUT.encode(ix, b);
    return b;
}
//# sourceMappingURL=instructions.js.map
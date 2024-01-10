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
exports.SplStakePoolAccountsCoder = void 0;
// @ts-nocheck
const B = __importStar(require("@native-to-anchor/buffer-layout"));
class SplStakePoolAccountsCoder {
    constructor(_idl) { }
    async encode(accountName, account) {
        switch (accountName) {
            case "stakePool": {
                const buffer = Buffer.alloc(10485760); // Space is variable
                const len = STAKE_POOL_LAYOUT.encode(account, buffer);
                return buffer.slice(0, len);
            }
            case "validatorStakeInfo": {
                const buffer = Buffer.alloc(73);
                const len = VALIDATOR_STAKE_INFO_LAYOUT.encode(account, buffer);
                return buffer.slice(0, len);
            }
            case "validatorList": {
                const buffer = Buffer.alloc(10485760); // Space is variable
                const len = VALIDATOR_LIST_LAYOUT.encode(account, buffer);
                return buffer.slice(0, len);
            }
            default: {
                throw new Error(`Invalid account name: ${accountName}`);
            }
        }
    }
    decode(accountName, ix) {
        return this.decodeUnchecked(accountName, ix);
    }
    decodeUnchecked(accountName, ix) {
        switch (accountName) {
            case "stakePool": {
                return decodeStakePoolAccount(ix);
            }
            case "validatorStakeInfo": {
                return decodeValidatorStakeInfoAccount(ix);
            }
            case "validatorList": {
                return decodeValidatorListAccount(ix);
            }
            default: {
                throw new Error(`Invalid account name: ${accountName}`);
            }
        }
    }
    memcmp(accountName, _appendData) {
        switch (accountName) {
            case "stakePool": {
                return {
                // Space is variable
                };
            }
            case "validatorStakeInfo": {
                return {
                    dataSize: 73,
                };
            }
            case "validatorList": {
                return {
                // Space is variable
                };
            }
            default: {
                throw new Error(`Invalid account name: ${accountName}`);
            }
        }
    }
    size(idlAccount) {
        switch (idlAccount.name) {
            case "stakePool": {
                return 0; // Space is variable;
            }
            case "validatorStakeInfo": {
                return 73;
            }
            case "validatorList": {
                return 0; // Space is variable;
            }
            default: {
                throw new Error(`Invalid account name: ${idlAccount.name}`);
            }
        }
    }
}
exports.SplStakePoolAccountsCoder = SplStakePoolAccountsCoder;
function decodeStakePoolAccount(ix) {
    return STAKE_POOL_LAYOUT.decode(ix);
}
function decodeValidatorStakeInfoAccount(ix) {
    return VALIDATOR_STAKE_INFO_LAYOUT.decode(ix);
}
function decodeValidatorListAccount(ix) {
    return VALIDATOR_LIST_LAYOUT.decode(ix);
}
const STAKE_POOL_LAYOUT = B.struct([
    ((p) => {
        const U = B.union(B.u8("discriminator"), null, p);
        U.addVariant(0, B.struct([]), "uninitialized");
        U.addVariant(1, B.struct([]), "stakePool");
        U.addVariant(2, B.struct([]), "validatorList");
        return U;
    })("accountType"),
    B.publicKey("manager"),
    B.publicKey("staker"),
    B.publicKey("stakeDepositAuthority"),
    B.u8("stakeWithdrawBumpSeed"),
    B.publicKey("validatorList"),
    B.publicKey("reserveStake"),
    B.publicKey("poolMint"),
    B.publicKey("managerFeeAccount"),
    B.publicKey("tokenProgramId"),
    B.u64("totalLamports"),
    B.u64("poolTokenSupply"),
    B.u64("lastUpdateEpoch"),
    B.u8("lockup"),
    B.struct([B.u64("denominator"), B.u64("numerator")], "epochFee"),
    B.option(B.struct([B.u64("denominator"), B.u64("numerator")]), "nextEpochFee"),
    B.option(B.publicKey(), "preferredDepositValidatorVoteAddress"),
    B.option(B.publicKey(), "preferredWithdrawValidatorVoteAddress"),
    B.struct([B.u64("denominator"), B.u64("numerator")], "stakeDepositFee"),
    B.struct([B.u64("denominator"), B.u64("numerator")], "stakeWithdrawalFee"),
    B.option(B.struct([B.u64("denominator"), B.u64("numerator")]), "nextStakeWithdrawalFee"),
    B.u8("stakeReferralFee"),
    B.option(B.publicKey(), "solDepositAuthority"),
    B.struct([B.u64("denominator"), B.u64("numerator")], "solDepositFee"),
    B.u8("solReferralFee"),
    B.option(B.publicKey(), "solWithdrawAuthority"),
    B.struct([B.u64("denominator"), B.u64("numerator")], "solWithdrawalFee"),
    B.option(B.struct([B.u64("denominator"), B.u64("numerator")]), "nextSolWithdrawalFee"),
    B.u64("lastEpochPoolTokenSupply"),
    B.u64("lastEpochTotalLamports"),
]);
const VALIDATOR_STAKE_INFO_LAYOUT = B.struct([
    B.u64("activeStakeLamports"),
    B.u64("transientStakeLamports"),
    B.u64("lastUpdateEpoch"),
    B.u64("transientSeedSuffixStart"),
    B.u64("transientSeedSuffixEnd"),
    ((p) => {
        const U = B.union(B.u8("discriminator"), null, p);
        U.addVariant(0, B.struct([]), "active");
        U.addVariant(1, B.struct([]), "deactivatingTransient");
        U.addVariant(2, B.struct([]), "readyForRemoval");
        return U;
    })("status"),
    B.publicKey("voteAccountAddress"),
]);
const VALIDATOR_LIST_LAYOUT = B.struct([
    B.struct([
        ((p) => {
            const U = B.union(B.u8("discriminator"), null, p);
            U.addVariant(0, B.struct([]), "uninitialized");
            U.addVariant(1, B.struct([]), "stakePool");
            U.addVariant(2, B.struct([]), "validatorList");
            return U;
        })("accountType"),
        B.u32("maxValidators"),
    ], "header"),
    B.vec(B.struct([
        B.u64("activeStakeLamports"),
        B.u64("transientStakeLamports"),
        B.u64("lastUpdateEpoch"),
        B.u64("transientSeedSuffixStart"),
        B.u64("transientSeedSuffixEnd"),
        ((p) => {
            const U = B.union(B.u8("discriminator"), null, p);
            U.addVariant(0, B.struct([]), "active");
            U.addVariant(1, B.struct([]), "deactivatingTransient");
            U.addVariant(2, B.struct([]), "readyForRemoval");
            return U;
        })("status"),
        B.publicKey("voteAccountAddress"),
    ]), "validators"),
]);
//# sourceMappingURL=accounts.js.map
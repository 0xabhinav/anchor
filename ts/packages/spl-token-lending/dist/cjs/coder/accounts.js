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
exports.SplTokenLendingAccountsCoder = void 0;
// @ts-nocheck
const B = __importStar(require("@native-to-anchor/buffer-layout"));
class SplTokenLendingAccountsCoder {
    constructor(_idl) { }
    async encode(accountName, account) {
        switch (accountName) {
            case "obligation": {
                const buffer = Buffer.alloc(916);
                const len = OBLIGATION_LAYOUT.encode(account, buffer);
                return buffer.slice(0, len);
            }
            case "lendingMarket": {
                const buffer = Buffer.alloc(258);
                const len = LENDING_MARKET_LAYOUT.encode(account, buffer);
                return buffer.slice(0, len);
            }
            case "reserve": {
                const buffer = Buffer.alloc(571);
                const len = RESERVE_LAYOUT.encode(account, buffer);
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
            case "obligation": {
                return decodeObligationAccount(ix);
            }
            case "lendingMarket": {
                return decodeLendingMarketAccount(ix);
            }
            case "reserve": {
                return decodeReserveAccount(ix);
            }
            default: {
                throw new Error(`Invalid account name: ${accountName}`);
            }
        }
    }
    memcmp(accountName, _appendData) {
        switch (accountName) {
            case "obligation": {
                return {
                    dataSize: 916,
                };
            }
            case "lendingMarket": {
                return {
                    dataSize: 258,
                };
            }
            case "reserve": {
                return {
                    dataSize: 571,
                };
            }
            default: {
                throw new Error(`Invalid account name: ${accountName}`);
            }
        }
    }
    size(idlAccount) {
        switch (idlAccount.name) {
            case "obligation": {
                return 916;
            }
            case "lendingMarket": {
                return 258;
            }
            case "reserve": {
                return 571;
            }
            default: {
                throw new Error(`Invalid account name: ${idlAccount.name}`);
            }
        }
    }
}
exports.SplTokenLendingAccountsCoder = SplTokenLendingAccountsCoder;
function decodeObligationAccount(ix) {
    return OBLIGATION_LAYOUT.decode(ix);
}
function decodeLendingMarketAccount(ix) {
    return LENDING_MARKET_LAYOUT.decode(ix);
}
function decodeReserveAccount(ix) {
    return RESERVE_LAYOUT.decode(ix);
}
const OBLIGATION_LAYOUT = B.struct([
    B.u8("version"),
    B.struct([B.u64("slot"), B.bool("stale")], "lastUpdate"),
    B.publicKey("lendingMarket"),
    B.publicKey("owner"),
    B.vec(B.struct([
        B.publicKey("depositReserve"),
        B.u64("depositedAmount"),
        B.decimal("marketValue"),
    ]), "deposits"),
    B.vec(B.struct([
        B.publicKey("borrowReserve"),
        B.decimal("cumulativeBorrowRateWads"),
        B.decimal("borrowedAmountWads"),
        B.decimal("marketValue"),
    ]), "borrows"),
    B.decimal("depositedValue"),
    B.decimal("borrowedValue"),
    B.decimal("allowedBorrowValue"),
    B.decimal("unhealthyBorrowValue"),
]);
const LENDING_MARKET_LAYOUT = B.struct([
    B.u8("version"),
    B.u8("bumpSeed"),
    B.publicKey("owner"),
    B.seq(B.u8(), 32, "quoteCurrency"),
    B.publicKey("tokenProgramId"),
    B.publicKey("oracleProgramId"),
    B.blob(128, "padding"),
]);
const RESERVE_LAYOUT = B.struct([
    B.u8("version"),
    B.struct([B.u64("slot"), B.bool("stale")], "lastUpdate"),
    B.publicKey("lendingMarket"),
    B.struct([
        B.publicKey("mintPubkey"),
        B.u8("mintDecimals"),
        B.publicKey("supplyPubkey"),
        B.publicKey("feeReceiver"),
        B.publicKey("oraclePubkey"),
        B.u64("availableAmount"),
        B.decimal("borrowedAmountWads"),
        B.decimal("cumulativeBorrowRateWads"),
        B.decimal("marketPrice"),
    ], "liquidity"),
    B.struct([
        B.publicKey("mintPubkey"),
        B.u64("mintTotalSupply"),
        B.publicKey("supplyPubkey"),
    ], "collateral"),
    B.struct([
        B.u8("optimalUtilizationRate"),
        B.u8("loanToValueRatio"),
        B.u8("liquidationBonus"),
        B.u8("liquidationThreshold"),
        B.u8("minBorrowRate"),
        B.u8("optimalBorrowRate"),
        B.u8("maxBorrowRate"),
        B.struct([
            B.u64("borrowFeeWad"),
            B.u64("flashLoanFeeWad"),
            B.u8("hostFeePercentage"),
        ], "fees"),
    ], "config"),
    B.blob(248, "padding"),
]);
//# sourceMappingURL=accounts.js.map
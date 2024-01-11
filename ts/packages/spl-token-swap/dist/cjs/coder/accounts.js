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
exports.SplTokenSwapAccountsCoder = void 0;
// @ts-nocheck
const B = __importStar(require("@native-to-anchor/buffer-layout"));
class SplTokenSwapAccountsCoder {
    constructor(_idl) { }
    async encode(accountName, account) {
        switch (accountName) {
            case "swap": {
                const buffer = Buffer.alloc(324);
                const len = SWAP_LAYOUT.encode(account, buffer);
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
            case "swap": {
                return decodeSwapAccount(ix);
            }
            default: {
                throw new Error(`Invalid account name: ${accountName}`);
            }
        }
    }
    memcmp(accountName, _appendData) {
        switch (accountName) {
            case "swap": {
                return {
                    dataSize: 324,
                };
            }
            default: {
                throw new Error(`Invalid account name: ${accountName}`);
            }
        }
    }
    size(idlAccount) {
        switch (idlAccount.name) {
            case "swap": {
                return 324;
            }
            default: {
                throw new Error(`Invalid account name: ${idlAccount.name}`);
            }
        }
    }
}
exports.SplTokenSwapAccountsCoder = SplTokenSwapAccountsCoder;
function decodeSwapAccount(ix) {
    return SWAP_LAYOUT.decode(ix);
}
const SWAP_LAYOUT = B.struct([
    B.u8("version"),
    B.bool("isInitialized"),
    B.u8("bumpSeed"),
    B.publicKey("tokenProgramId"),
    B.publicKey("tokenA"),
    B.publicKey("tokenB"),
    B.publicKey("poolMint"),
    B.publicKey("tokenAMint"),
    B.publicKey("tokenBMint"),
    B.publicKey("poolFeeAccount"),
    B.struct([
        B.u64("tradeFeeNumerator"),
        B.u64("tradeFeeDenominator"),
        B.u64("ownerTradeFeeNumerator"),
        B.u64("ownerTradeFeeDenominator"),
        B.u64("ownerWithdrawFeeNumerator"),
        B.u64("ownerWithdrawFeeDenominator"),
        B.u64("hostFeeNumerator"),
        B.u64("hostFeeDenominator"),
    ], "fees"),
    B.struct([
        ((p) => {
            const U = B.union(B.u8("discriminator"), null, p);
            U.addVariant(0, B.struct([]), "constantProduct");
            U.addVariant(1, B.struct([]), "constantPrice");
            U.addVariant(2, B.struct([]), "stable");
            U.addVariant(3, B.struct([]), "offset");
            return U;
        })("curveType"),
        B.seq(B.u8(), 32, "calculator"),
    ], "swapCurve"),
]);
//# sourceMappingURL=accounts.js.map
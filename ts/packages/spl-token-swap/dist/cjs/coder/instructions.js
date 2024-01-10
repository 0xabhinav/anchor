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
exports.SplTokenSwapInstructionCoder = void 0;
// @ts-nocheck
const B = __importStar(require("@native-to-anchor/buffer-layout"));
class SplTokenSwapInstructionCoder {
    constructor(_idl) { }
    encode(ixName, ix) {
        switch (ixName) {
            case "initialize": {
                return encodeInitialize(ix);
            }
            case "swap": {
                return encodeSwap(ix);
            }
            case "depositAllTokenTypes": {
                return encodeDepositAllTokenTypes(ix);
            }
            case "withdrawAllTokenTypes": {
                return encodeWithdrawAllTokenTypes(ix);
            }
            case "depositSingleTokenTypeExactAmountIn": {
                return encodeDepositSingleTokenTypeExactAmountIn(ix);
            }
            case "withdrawSingleTokenTypeExactAmountOut": {
                return encodeWithdrawSingleTokenTypeExactAmountOut(ix);
            }
            default: {
                throw new Error(`Invalid instruction: ${ixName}`);
            }
        }
    }
    encodeState(_ixName, _ix) {
        throw new Error("SplTokenSwap does not have state");
    }
}
exports.SplTokenSwapInstructionCoder = SplTokenSwapInstructionCoder;
function encodeInitialize({ fees, swapCurve }) {
    return encodeData({ initialize: { fees, swapCurve } }, 1 +
        8 +
        8 +
        8 +
        8 +
        8 +
        8 +
        8 +
        8 +
        (() => {
            switch (Object.keys(swapCurve.curveType)[0]) {
                case "constantProduct":
                    return 1;
                case "constantPrice":
                    return 1;
                case "stable":
                    return 1;
                case "offset":
                    return 1;
            }
        })() +
        1 * 32);
}
function encodeSwap({ amountIn, minimumAmountOut }) {
    return encodeData({ swap: { amountIn, minimumAmountOut } }, 1 + 8 + 8);
}
function encodeDepositAllTokenTypes({ poolTokenAmount, maximumTokenAAmount, maximumTokenBAmount, }) {
    return encodeData({
        depositAllTokenTypes: {
            poolTokenAmount,
            maximumTokenAAmount,
            maximumTokenBAmount,
        },
    }, 1 + 8 + 8 + 8);
}
function encodeWithdrawAllTokenTypes({ poolTokenAmount, minimumTokenAAmount, minimumTokenBAmount, }) {
    return encodeData({
        withdrawAllTokenTypes: {
            poolTokenAmount,
            minimumTokenAAmount,
            minimumTokenBAmount,
        },
    }, 1 + 8 + 8 + 8);
}
function encodeDepositSingleTokenTypeExactAmountIn({ sourceTokenAmount, minimumPoolTokenAmount, }) {
    return encodeData({
        depositSingleTokenTypeExactAmountIn: {
            sourceTokenAmount,
            minimumPoolTokenAmount,
        },
    }, 1 + 8 + 8);
}
function encodeWithdrawSingleTokenTypeExactAmountOut({ destinationTokenAmount, maximumPoolTokenAmount, }) {
    return encodeData({
        withdrawSingleTokenTypeExactAmountOut: {
            destinationTokenAmount,
            maximumPoolTokenAmount,
        },
    }, 1 + 8 + 8);
}
const LAYOUT = B.union(B.u8("instruction"));
LAYOUT.addVariant(0, B.struct([
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
]), "initialize");
LAYOUT.addVariant(1, B.struct([B.u64("amountIn"), B.u64("minimumAmountOut")]), "swap");
LAYOUT.addVariant(2, B.struct([
    B.u64("poolTokenAmount"),
    B.u64("maximumTokenAAmount"),
    B.u64("maximumTokenBAmount"),
]), "depositAllTokenTypes");
LAYOUT.addVariant(3, B.struct([
    B.u64("poolTokenAmount"),
    B.u64("minimumTokenAAmount"),
    B.u64("minimumTokenBAmount"),
]), "withdrawAllTokenTypes");
LAYOUT.addVariant(4, B.struct([B.u64("sourceTokenAmount"), B.u64("minimumPoolTokenAmount")]), "depositSingleTokenTypeExactAmountIn");
LAYOUT.addVariant(5, B.struct([B.u64("destinationTokenAmount"), B.u64("maximumPoolTokenAmount")]), "withdrawSingleTokenTypeExactAmountOut");
function encodeData(ix, span) {
    const b = Buffer.alloc(span);
    LAYOUT.encode(ix, b);
    return b;
}
//# sourceMappingURL=instructions.js.map
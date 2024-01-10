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
exports.SplTokenLendingInstructionCoder = void 0;
// @ts-nocheck
const B = __importStar(require("@native-to-anchor/buffer-layout"));
class SplTokenLendingInstructionCoder {
    constructor(_idl) { }
    encode(ixName, ix) {
        switch (ixName) {
            case "initLendingMarket": {
                return encodeInitLendingMarket(ix);
            }
            case "setLendingMarketOwner": {
                return encodeSetLendingMarketOwner(ix);
            }
            case "initReserve": {
                return encodeInitReserve(ix);
            }
            case "refreshReserve": {
                return encodeRefreshReserve(ix);
            }
            case "depositReserveLiquidity": {
                return encodeDepositReserveLiquidity(ix);
            }
            case "redeemReserveCollateral": {
                return encodeRedeemReserveCollateral(ix);
            }
            case "initObligation": {
                return encodeInitObligation(ix);
            }
            case "refreshObligation": {
                return encodeRefreshObligation(ix);
            }
            case "depositObligationCollateral": {
                return encodeDepositObligationCollateral(ix);
            }
            case "withdrawObligationCollateral": {
                return encodeWithdrawObligationCollateral(ix);
            }
            case "borrowObligationLiquidity": {
                return encodeBorrowObligationLiquidity(ix);
            }
            case "repayObligationLiquidity": {
                return encodeRepayObligationLiquidity(ix);
            }
            case "liquidateObligation": {
                return encodeLiquidateObligation(ix);
            }
            case "flashLoan": {
                return encodeFlashLoan(ix);
            }
            default: {
                throw new Error(`Invalid instruction: ${ixName}`);
            }
        }
    }
    encodeState(_ixName, _ix) {
        throw new Error("SplTokenLending does not have state");
    }
}
exports.SplTokenLendingInstructionCoder = SplTokenLendingInstructionCoder;
function encodeInitLendingMarket({ owner, quoteCurrency }) {
    return encodeData({ initLendingMarket: { owner, quoteCurrency } }, 1 + 32 + 1 * 32);
}
function encodeSetLendingMarketOwner({ newOwner }) {
    return encodeData({ setLendingMarketOwner: { newOwner } }, 1 + 32);
}
function encodeInitReserve({ liquidityAmount, config }) {
    return encodeData({ initReserve: { liquidityAmount, config } }, 1 + 8 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 8 + 8 + 1);
}
function encodeRefreshReserve({}) {
    return encodeData({ refreshReserve: {} }, 1);
}
function encodeDepositReserveLiquidity({ liquidityAmount }) {
    return encodeData({ depositReserveLiquidity: { liquidityAmount } }, 1 + 8);
}
function encodeRedeemReserveCollateral({ collateralAmount }) {
    return encodeData({ redeemReserveCollateral: { collateralAmount } }, 1 + 8);
}
function encodeInitObligation({}) {
    return encodeData({ initObligation: {} }, 1);
}
function encodeRefreshObligation({}) {
    return encodeData({ refreshObligation: {} }, 1);
}
function encodeDepositObligationCollateral({ collateralAmount }) {
    return encodeData({ depositObligationCollateral: { collateralAmount } }, 1 + 8);
}
function encodeWithdrawObligationCollateral({ collateralAmount }) {
    return encodeData({ withdrawObligationCollateral: { collateralAmount } }, 1 + 8);
}
function encodeBorrowObligationLiquidity({ liquidityAmount }) {
    return encodeData({ borrowObligationLiquidity: { liquidityAmount } }, 1 + 8);
}
function encodeRepayObligationLiquidity({ liquidityAmount }) {
    return encodeData({ repayObligationLiquidity: { liquidityAmount } }, 1 + 8);
}
function encodeLiquidateObligation({ liquidityAmount }) {
    return encodeData({ liquidateObligation: { liquidityAmount } }, 1 + 8);
}
function encodeFlashLoan({ amount }) {
    return encodeData({ flashLoan: { amount } }, 1 + 8);
}
const LAYOUT = B.union(B.u8("instruction"));
LAYOUT.addVariant(0, B.struct([B.publicKey("owner"), B.seq(B.u8(), 32, "quoteCurrency")]), "initLendingMarket");
LAYOUT.addVariant(1, B.struct([B.publicKey("newOwner")]), "setLendingMarketOwner");
LAYOUT.addVariant(2, B.struct([
    B.u64("liquidityAmount"),
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
]), "initReserve");
LAYOUT.addVariant(3, B.struct([]), "refreshReserve");
LAYOUT.addVariant(4, B.struct([B.u64("liquidityAmount")]), "depositReserveLiquidity");
LAYOUT.addVariant(5, B.struct([B.u64("collateralAmount")]), "redeemReserveCollateral");
LAYOUT.addVariant(6, B.struct([]), "initObligation");
LAYOUT.addVariant(7, B.struct([]), "refreshObligation");
LAYOUT.addVariant(8, B.struct([B.u64("collateralAmount")]), "depositObligationCollateral");
LAYOUT.addVariant(9, B.struct([B.u64("collateralAmount")]), "withdrawObligationCollateral");
LAYOUT.addVariant(10, B.struct([B.u64("liquidityAmount")]), "borrowObligationLiquidity");
LAYOUT.addVariant(11, B.struct([B.u64("liquidityAmount")]), "repayObligationLiquidity");
LAYOUT.addVariant(12, B.struct([B.u64("liquidityAmount")]), "liquidateObligation");
LAYOUT.addVariant(13, B.struct([B.u64("amount")]), "flashLoan");
function encodeData(ix, span) {
    const b = Buffer.alloc(span);
    LAYOUT.encode(ix, b);
    return b;
}
//# sourceMappingURL=instructions.js.map
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
exports.SplBinaryOraclePairInstructionCoder = void 0;
// @ts-nocheck
const B = __importStar(require("@native-to-anchor/buffer-layout"));
class SplBinaryOraclePairInstructionCoder {
    constructor(_idl) { }
    encode(ixName, ix) {
        switch (ixName) {
            case "initPool": {
                return encodeInitPool(ix);
            }
            case "deposit": {
                return encodeDeposit(ix);
            }
            case "withdraw": {
                return encodeWithdraw(ix);
            }
            case "decide": {
                return encodeDecide(ix);
            }
            default: {
                throw new Error(`Invalid instruction: ${ixName}`);
            }
        }
    }
    encodeState(_ixName, _ix) {
        throw new Error("SplBinaryOraclePair does not have state");
    }
}
exports.SplBinaryOraclePairInstructionCoder = SplBinaryOraclePairInstructionCoder;
function encodeInitPool({ mintEndSlot, decideEndSlot, bumpSeed }) {
    return encodeData({ initPool: { mintEndSlot, decideEndSlot, bumpSeed } }, 1 + 8 + 8 + 1);
}
function encodeDeposit({ arg }) {
    return encodeData({ deposit: { arg } }, 1 + 8);
}
function encodeWithdraw({ arg }) {
    return encodeData({ withdraw: { arg } }, 1 + 8);
}
function encodeDecide({ arg }) {
    return encodeData({ decide: { arg } }, 1 + 1);
}
const LAYOUT = B.union(B.u8("instruction"));
LAYOUT.addVariant(0, B.struct([B.u64("mintEndSlot"), B.u64("decideEndSlot"), B.u8("bumpSeed")]), "initPool");
LAYOUT.addVariant(1, B.struct([B.u64("arg")]), "deposit");
LAYOUT.addVariant(2, B.struct([B.u64("arg")]), "withdraw");
LAYOUT.addVariant(3, B.struct([B.bool("arg")]), "decide");
function encodeData(ix, span) {
    const b = Buffer.alloc(span);
    LAYOUT.encode(ix, b);
    return b;
}
//# sourceMappingURL=instructions.js.map
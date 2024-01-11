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
exports.SplBinaryOptionInstructionCoder = void 0;
// @ts-nocheck
const B = __importStar(require("@native-to-anchor/buffer-layout"));
class SplBinaryOptionInstructionCoder {
    constructor(_idl) { }
    encode(ixName, ix) {
        switch (ixName) {
            case "initializeBinaryOption": {
                return encodeInitializeBinaryOption(ix);
            }
            case "trade": {
                return encodeTrade(ix);
            }
            case "settle": {
                return encodeSettle(ix);
            }
            case "collect": {
                return encodeCollect(ix);
            }
            default: {
                throw new Error(`Invalid instruction: ${ixName}`);
            }
        }
    }
    encodeState(_ixName, _ix) {
        throw new Error("SplBinaryOption does not have state");
    }
}
exports.SplBinaryOptionInstructionCoder = SplBinaryOptionInstructionCoder;
function encodeInitializeBinaryOption({ decimals }) {
    return encodeData({ initializeBinaryOption: { decimals } }, 1 + 1);
}
function encodeTrade({ size, buyPrice, sellPrice }) {
    return encodeData({ trade: { size, buyPrice, sellPrice } }, 1 + 8 + 8 + 8);
}
function encodeSettle({}) {
    return encodeData({ settle: {} }, 1);
}
function encodeCollect({}) {
    return encodeData({ collect: {} }, 1);
}
const LAYOUT = B.union(B.u8("instruction"));
LAYOUT.addVariant(0, B.struct([B.u8("decimals")]), "initializeBinaryOption");
LAYOUT.addVariant(1, B.struct([B.u64("size"), B.u64("buyPrice"), B.u64("sellPrice")]), "trade");
LAYOUT.addVariant(2, B.struct([]), "settle");
LAYOUT.addVariant(3, B.struct([]), "collect");
function encodeData(ix, span) {
    const b = Buffer.alloc(span);
    LAYOUT.encode(ix, b);
    return b;
}
//# sourceMappingURL=instructions.js.map
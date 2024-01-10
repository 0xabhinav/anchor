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
exports.SplNameServiceInstructionCoder = void 0;
// @ts-nocheck
const B = __importStar(require("@native-to-anchor/buffer-layout"));
class SplNameServiceInstructionCoder {
    constructor(_idl) { }
    encode(ixName, ix) {
        switch (ixName) {
            case "create": {
                return encodeCreate(ix);
            }
            case "update": {
                return encodeUpdate(ix);
            }
            case "transfer": {
                return encodeTransfer(ix);
            }
            case "delete": {
                return encodeDelete(ix);
            }
            default: {
                throw new Error(`Invalid instruction: ${ixName}`);
            }
        }
    }
    encodeState(_ixName, _ix) {
        throw new Error("SplNameService does not have state");
    }
}
exports.SplNameServiceInstructionCoder = SplNameServiceInstructionCoder;
function encodeCreate({ hashedName, lamports, space }) {
    return encodeData({ create: { hashedName, lamports, space } }, 1 + 4 + hashedName.length + 8 + 4);
}
function encodeUpdate({ offset, data }) {
    return encodeData({ update: { offset, data } }, 1 + 4 + 4 + data.length);
}
function encodeTransfer({ newOwner }) {
    return encodeData({ transfer: { newOwner } }, 1 + 32);
}
function encodeDelete({}) {
    return encodeData({ delete: {} }, 1);
}
const LAYOUT = B.union(B.u8("instruction"));
LAYOUT.addVariant(0, B.struct([B.bytes("hashedName"), B.u64("lamports"), B.u32("space")]), "create");
LAYOUT.addVariant(1, B.struct([B.u32("offset"), B.bytes("data")]), "update");
LAYOUT.addVariant(2, B.struct([B.publicKey("newOwner")]), "transfer");
LAYOUT.addVariant(3, B.struct([]), "delete");
function encodeData(ix, span) {
    const b = Buffer.alloc(span);
    LAYOUT.encode(ix, b);
    return b;
}
//# sourceMappingURL=instructions.js.map
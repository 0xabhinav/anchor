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
exports.SplRecordInstructionCoder = void 0;
// @ts-nocheck
const B = __importStar(require("@native-to-anchor/buffer-layout"));
class SplRecordInstructionCoder {
    constructor(_idl) { }
    encode(ixName, ix) {
        switch (ixName) {
            case "initialize": {
                return encodeInitialize(ix);
            }
            case "write": {
                return encodeWrite(ix);
            }
            case "setAuthority": {
                return encodeSetAuthority(ix);
            }
            case "closeAccount": {
                return encodeCloseAccount(ix);
            }
            default: {
                throw new Error(`Invalid instruction: ${ixName}`);
            }
        }
    }
    encodeState(_ixName, _ix) {
        throw new Error("SplRecord does not have state");
    }
}
exports.SplRecordInstructionCoder = SplRecordInstructionCoder;
function encodeInitialize({}) {
    return encodeData({ initialize: {} }, 1);
}
function encodeWrite({ offset, data }) {
    return encodeData({ write: { offset, data } }, 1 + 8 + 4 + data.length);
}
function encodeSetAuthority({}) {
    return encodeData({ setAuthority: {} }, 1);
}
function encodeCloseAccount({}) {
    return encodeData({ closeAccount: {} }, 1);
}
const LAYOUT = B.union(B.u8("instruction"));
LAYOUT.addVariant(0, B.struct([]), "initialize");
LAYOUT.addVariant(1, B.struct([B.u64("offset"), B.bytes("data")]), "write");
LAYOUT.addVariant(2, B.struct([]), "setAuthority");
LAYOUT.addVariant(3, B.struct([]), "closeAccount");
function encodeData(ix, span) {
    const b = Buffer.alloc(span);
    LAYOUT.encode(ix, b);
    return b;
}
//# sourceMappingURL=instructions.js.map
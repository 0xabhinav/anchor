// @ts-nocheck
import * as B from "@native-to-anchor/buffer-layout";
export class SplRecordInstructionCoder {
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
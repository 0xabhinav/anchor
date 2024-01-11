// @ts-nocheck
import * as B from "@native-to-anchor/buffer-layout";
export class SplBinaryOptionInstructionCoder {
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
// @ts-nocheck
import * as B from "@native-to-anchor/buffer-layout";
export class SplNameServiceInstructionCoder {
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